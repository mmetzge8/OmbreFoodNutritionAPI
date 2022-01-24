import re, json

class _food_database:

    def __init__(self):
        self.food_names = dict()

    def load_food(self, foodData):
        f = open(foodData)
        data = json.load(f)
        for i in range(data['report']['end']):
            self.food_names[data['report']['foods'][i]["name"]] = data['report']['foods'][i]['nutrients']

    def get_foods(self):
        return self.food_names


if __name__ == "__main__":
    fdb = _food_database()


    fdb.load_food('food_data.json')

    food = fdb.get_foods()
    print(food)
