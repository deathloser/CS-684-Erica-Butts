var myInputBox = document.getElementById("inputBox");
var myLabel = document.getElementById("label1");


function callAPI() {
    //get user input IF needed
    var userInput = myInputBox.value;

    var userEncoded = encodeURIComponent(userInput);

    //call API here
    var apiResponse = `${userEncoded}: API response`;





    //put API response in Label
    myLabel.innerHTML = apiResponse;

}