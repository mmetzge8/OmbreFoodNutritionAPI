import cherrypy
from FoodController import FoodController

def start_service():
    dispatcher = cherrypy.dispatch.RoutesDispatcher()

    fdb = _pokemon_database()

    foodController = FoodController(fdb = fdb)

    dispatcher.connect('food_get', '/food', controller = foodController, action = 'GET_KEY', conditions = dict(method=['GET']))

    dispatcher.connect('pokemon_options', '/pokemon/', controller=optionsController, action='OPTIONS', conditions=dict(method=['OPTIONS']))
    dispatcher.connect('pokemon_key_options', '/pokemon/:pokemon_id', controller=optionsController, action='OPTIONS', conditions=dict(method=['OPTIONS']))

    conf = {
        'global' : {
            'server.thread_pool': 5,
            'server.socket_host' : 'localhost',
            'server.socket_port': 8080  # put port here
        },
    '/': {
        'request.dispatch' : dispatcher,
        'tools.CORS.on' : True,
        }
    }

    cherrypy.config.update(conf)
    app = cherrypy.tree.mount(None, config=conf)
    cherrypy.quickstart(app)

    class optionsController:
        def OPTIONS(self, *args, **kwargs):
            return ""

    def CORS():
        cherrypy.response.headers["Access-Control-Allow-Origin"] = "*"
        cherrypy.response.headers["Access-Control-Allow-Methods"] = "GET, PUT, POST, DELETE, OPTIONS"
        cherrypy.response.headers["Access-Control-Allow-Credentials"] = "true"

    if __name__ == '__main__':
        cherrypy.tools.CORS = cherrypy.Tool('before_finalize', CORS) # CORS
        start_service()