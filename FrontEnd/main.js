console.log("Page Loaded!")

var clearButton = document.getElementById('bsr-clear-button');
clearButton.onmouseup = clearSearch;
var submitButton = document.getElementById('bsr-submit-button');
submitButton.onmouseup = getNutrientInfo;

function getNutrientInfo(){
  makeNetworkCallToFoodApi();
}

function makeNetworkCallToFoodApi(){
  var url = "http://localhost:8080/food";

  var xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);

  xhr.onload = function(e){
    console.log('food api onload triggered');

    updateOutputWithResponse(xhr.responseText);
  }

  xhr.onerror = function(e){
    console.log('food api onerror triggered' + xhr.statusText);
  }

  xhr.send(null);
}

function updateOutputWithResponse(response_text){
  var response_json = JSON.parse(response_text);

  var alcoholNum = document.getElementById('alcoholNum').value;
  var alcoholhighlow = document.getElementById('alcoholhighlow').value;

  var proteinNum = document.getElementById('proteinNum').value;
  var proteinhighlow = document.getElementById('proteinhighlow').value;

  var lipidNum = document.getElementById('lipidNum').value;
  var lipidhighlow = document.getElementById('lipidhighlow').value;

  var carbNum = document.getElementById('carbNum').value;
  var carbhighlow = document.getElementById('carbhighlow').value;

  var sugarNum = document.getElementById('sugarNum').value;
  var sugarhighlow = document.getElementById('sugarhighlow').value;

  var ashNum = document.getElementById('ashNum').value;
  var ashhighlow = document.getElementById('ashhighlow').value;

  var energyNum = document.getElementById('energyNum').value;
  var energyhighlow = document.getElementById('energyhighlow').value;

  var fiberNum = document.getElementById('fiberNum').value;
  var fiberhighlow = document.getElementById('fiberhighlow').value;

  var searchOutput = document.getElementById('searchOutput');

  var checks = Array(150).fill(0);


  searchOutput.innerHTML = "";

  for(let i = 0; i < Object.keys(response_json["foods"][0]).length; i++){
    if (alcoholhighlow == "greater"){
      if(Number(response_json["foods"][0][i]["nutrients"][0]["value"]) >= alcoholNum){
        checks[i] += 1;
      }
    }
    else{
      if(Number(response_json["foods"][0][i]["nutrients"][0]["value"]) < alcoholNum){
        checks[i] += 1;
      }
    }

    if (proteinhighlow == "greater"){
      if(Number(response_json["foods"][0][i]["nutrients"][1]["value"]) >= proteinNum){
        checks[i] += 1;
      }
    }
    else{
      if(Number(response_json["foods"][0][i]["nutrients"][1]["value"]) < proteinNum){
        checks[i] += 1;      }
    }

    if (lipidhighlow == "greater"){
      if(Number(response_json["foods"][0][i]["nutrients"][2]["value"]) >= lipidNum){
        checks[i] += 1;
      }
    }
    else{
      if(Number(response_json["foods"][0][i]["nutrients"][2]["value"]) < lipidNum){
        checks[i] += 1;
      }
    }

    if (carbhighlow == "greater"){
      if(Number(response_json["foods"][0][i]["nutrients"][3]["value"]) >= carbNum){
        checks[i] += 1;
      }
    }
    else{
      if(Number(response_json["foods"][0][i]["nutrients"][3]["value"]) < carbNum){
        checks[i] += 1;
      }
    }

    if (sugarhighlow == "greater"){
      if(Number(response_json["foods"][0][i]["nutrients"][4]["value"]) >= sugarNum){
        checks[i] += 1;
      }
    }
    else{
      if(Number(response_json["foods"][0][i]["nutrients"][4]["value"]) < sugarNum){
        checks[i] += 1;
      }
    }

    if (ashhighlow == "greater"){
      if(Number(response_json["foods"][0][i]["nutrients"][5]["value"]) >= ashNum){
        checks[i] += 1;
      }
    }
    else{
      if(Number(response_json["foods"][0][i]["nutrients"][5]["value"]) < ashNum){
        checks[i] += 1;
      }
    }

    if (energyhighlow == "greater"){
      if(Number(response_json["foods"][0][i]["nutrients"][6]["value"]) >= energyNum){
        checks[i] += 1;
      }
    }
    else{
      if(Number(response_json["foods"][0][i]["nutrients"][6]["value"]) < energyNum){
        checks[i] += 1;
      }
    }

    if (fiberhighlow == "greater"){
      if(Number(response_json["foods"][0][i]["nutrients"][7]["value"]) >= fiberNum){
        checks[i] += 1;
      }
    }
    else{
      if(Number(response_json["foods"][0][i]["nutrients"][7]["value"]) < fiberNum){
        checks[i] += 1;
      }
    }

    if(checks[i] == 8){
      searchOutput.innerHTML += "<br>" + response_json["foods"][0][i]["name"] + "<br>" + "&emsp;" + "&emsp;" + "Alcohol: " + response_json["foods"][0][i]["nutrients"][0]["value"] + " g" + "&emsp;" + "&emsp;" + "Protein: " + response_json["foods"][0][i]["nutrients"][1]["value"] + " g"
      + "<br>" + "&emsp;" + "&emsp;" + "Lipids: " + response_json["foods"][0][i]["nutrients"][2]["value"] + " g" + "&emsp;" + "&emsp;" + "Carbs: " + response_json["foods"][0][i]["nutrients"][3]["value"] + " g" + "<br>" + "&emsp;" + "&emsp;" + "Sugar: " + response_json["foods"][0][i]["nutrients"][4]["value"] + " g"
      + "&emsp;" + "&emsp;" + "Ash: " + response_json["foods"][0][i]["nutrients"][5]["value"] + " g" + "<br>" + "&emsp;" + "&emsp;" + "Energy: " + response_json["foods"][0][i]["nutrients"][6]["value"] + " kcal" + "&emsp;" + "&emsp;" + "Fiber: " + response_json["foods"][0][i]["nutrients"][7]["value"] + " g" + "<br>";
    }
  }


}

function clearSearch(){
  var searchOutput = document.getElementById('searchOutput');
  searchOutput.innerHTML = "";
}
