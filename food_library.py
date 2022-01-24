import re, json

class _food_database:

    def __init__(self):
        self.food_names = dict()

    def load_food(self, foodData):
        f = open(foodData)
        data = json.load(f)
        self.food_names[fid] = data['report']['foods'][1]

    def get_food(self, fid):
        try:
            fname = self.food_names[fid]
        except Exception as ex:
            fname = None
        return fname


if __name__ == "__main__":
    fdb = _food_database()

    fdb.load_food('food_data.json')

    food = fdb.get_food('09002')
    print(food)
