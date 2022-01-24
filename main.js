console.log("Page Loaded!")

getNutrientInfo()

function getNutrientInfo(){

  makeNetworkCallToFoodApi();
}

function makeNetworkCallToFoodApi(){
  var url = "http://localhost:8080/food";

  var xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);

  xhr.onload = function(e){
    console.log('food api onload triggered');
    console.log('network response received = ' + xhr.responseText);
    updateOutputWithResponse(xhr.responseText);
  }

  xhr.onerror = function(e){
    console.log('food api onerror triggered' + xhr.statusText);
  }

  xhr.send(null);
}

function updateOutputWithResponse(response_text){
  var response_json = JSON.parse(response_text);
  console.log(response_json);
}
