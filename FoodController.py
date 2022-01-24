import cherrypy
import re, json
from food_library import _food_database

class FoodController(object):

    def __init__(self, fdb=None):
        if fdb is None:
            self.fdb = _food_database()
        else:
            self.fdb = _food_database

        self.fdb.load_food('food_data.json')


    def GET_KEY(self):
        output = {'result' : 'success'}
