import cherrypy
import re, json
from food_library import _food_database

class FoodController(object):

    def __init__(self, fdb=None):
        if fdb is None:
            self.fdb = _food_database()
        else:
            self.fdb = fdb

        self.fdb.load_food('food_data.json') # Load in the JSON data provided on initialization

    # Modify and Get our data from the server and send to client requesting
    def GET_KEY(self):
        output = {'result' : 'success'}
        output['foods'] = []

        try:
            foods = self.fdb.get_foods()
            output['foods'].append(foods)
        except Exception as ex:
            output['result'] = 'error'
            output['message'] = str(ex)

        return json.dumps(output)
