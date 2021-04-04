function displayDate() {
	document.getElementById('data').innerHTML = Date();

}

(function (global) {

	var test = {};

	console.log("We are about to start.");

	global.test = test;

})(window);
