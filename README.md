# OmbreFoodNutritionAPI

### Food Nutrition API Overview

#### Project/API Overview

This API is a server hosting a small database of a variety of foods and their nutrients.  The datapoints for each Food include the foods id, name, weight, measure, and nutrient data which includes alcohol, protein, lipids, carbs, sugar, ash, energy and fiber. The API gives the user the ability to interact with the database by inputting a desired amount of each type of nutrient which will result in the output of every food name that meets those criteria established by the user.

### REST API Specification

#### Server

The server is located at /WebServer/server.py.

#### Controller

This project contains one controller: /WebServer/FoodController.py.

* **FoodController.py**: This controller contains the function GET_KEY. This controller contains the main function to find data within our Food database. The function is explained in greater detail:
  * *GET_KEY*: Returns JSON formatted data based upon the which number food it is in the list, with its value being the food's details and its nutrient information.


##### Specification Table
 |Request Type|Resource Endpoint|Body|Expected Response|Inner Working of Handler|
 |-----|-----|-----|-----|-----|
 |GET| /food | There should be no body to a GET request|string formatted json of all Foods with their nutrient data|GET_KEY goes through and grabs all foods and their information. Uses get_foods() from fdb

### User Interaction

1. Ensure that python is downloaded, these programs were created on python 3.9.6.  Addtionally the cherrypy library of python is needed which can be obtained by running *pip install CherryPy* as seen on this site https://pypi.org/project/CherryPy/ .
2. Clone the repository on your own machine.
3. In a terminal, go to the folder /OmbreFoodNutritionAPI/WebServer, and run the command *python server.py* .
4. Open the index.html file into your browser and you should be able to interact with the API.
5. Simply input the values of each nutrient you would like (greater or less than), then press submit and all foods matching the given criteria should appear below.

### Screenshots

Some Screenshots are available in the /FrontEnd/images folder.

