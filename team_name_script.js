const axios = require('axios');
var team_name = document.getElementById('inputBox').value;

/*axios.get('https://cs684api.7g2rji63c728k.us-east-1.cs.amazonlightsail.com/hw3', {
	params: {
		team: team_name}
	})
	.then(function callAPI_(resp){
		this.setState({resp:resp})
		console.log(resp.data);
	})
	  .catch(function (error) {
    		console.log(error);
  	})
	.then(function callAPI_() {

  });*/
  function call() {
    //get user input IF needed
    var userInput = myInputBox.value;
    var userEncoded = encodeURIComponent(userInput);

    //call API here
    var apiResponse = `${userEncoded}: API response`;
	axios.get('https://cs684api.7g2rji63c728k.us-east-1.cs.amazonlightsail.com/hw3', {
		params: {
			team: team_name}
		});
		this.setState({resp:resp})
		console.log(resp.data);





    //put API response in Label
    myLabel.innerHTML = apiResponse;

}