
var myInputBox = document.getElementById("inputBox");
var myLabel = document.getElementById("label1");


function callAPI() {
    //get user input IF needed
    var userInput = myInputBox.value;
	var response;

    //call API here

	axios.get('https://cs684api.7g2rji63c728k.us-east-1.cs.amazonlightsail.com/hw3', {
	params: {
		team: userInput}
	})
	.then(function(resp){
		console.log(resp.data.team);

		//the response is an object

		response = resp.data.team;

	})
	  .catch(function (error) {
    		console.log(error);
  	})
	.then(function () {
		myLabel.innerHTML = `API RESPONSE: Your team name is: ${response}`;

  });


}


