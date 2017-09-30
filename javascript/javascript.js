console.log("hello");

 var config = {
    apiKey: "AIzaSyAwqvvoU5Wb18B2OsTKTrYKeQbQDu8B8bk",
    authDomain: "ekyaung-2f015.firebaseapp.com",
    databaseURL: "https://ekyaung-2f015.firebaseio.com",
    projectId: "ekyaung-2f015",
    storageBucket: "ekyaung-2f015.appspot.com",
    messagingSenderId: "144705799120"
  };

  firebase.initalizeApp(config);

  var database = firebase.database();
  var connections = database.ref("/connections");
  var connected = database.ref(".info/connected");

  connectedRef.on("train", function(pop){
  	if(pop.val()){
  		var con = connectionsRef.push(true);
  		con.onDisconnect().remove();
  	}
  });

  connectionsRef.on("train", function(pop){
  	console.log(pop);

  	$("#watchers").html(pop.numChildren());
  });

  //initial times
	var initialTime = "12:00 PM";
	var initialDestination = "San Francisco";
	var tFrequency = 2;
	var nextArrival;

	var timeConverted = moment(initialTime, "hh:mm").subtact(1, "years");
	console.log(timeConverted);

	var currentTime = moment();
	console.log("Current time: " + moment(currentTime).format("hh:mm"));
