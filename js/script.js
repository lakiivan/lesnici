function displayDate() {
	document.getElementById('data').innerHTML = Date();

}

//retrieve json file
function retrieveOreders() {
	var myData = JSON.parse(data);
	alert(myData[0].firstName);
	alert(myData[0].lastName);
	
}



(function (global) {

	var test = {};

	console.log("We are about to start.");

	global.test = test;

})(window);
