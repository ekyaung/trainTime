// console.log("hello");

 var config = {
    apiKey: "AIzaSyAwqvvoU5Wb18B2OsTKTrYKeQbQDu8B8bk",
    authDomain: "ekyaung-2f015.firebaseapp.com",
    databaseURL: "https://ekyaung-2f015.firebaseio.com",
    projectId: "ekyaung-2f015",
    storageBucket: "ekyaung-2f015.appspot.com",
    messagingSenderId: "144705799120"
  };

  firebase.initializeApp(config);

  var database = firebase.database();
  var connections = database.ref("/connections");
  var connected = database.ref("/info/connected");

  connected.on("value", function(pop){
  	if(pop.val()){
  		var con = connected.push(true);
  		con.onDisconnect().remove();
  	}
  });

  connected.on("child_added", function(pop){
  	console.log(pop);

  	$(".current-time").html(pop.numChildren());
  });

  //initial times
	var initialTime = "12:00 PM";
	var initialDestination = "San Francisco";
	var tFrequency = 2;
	var nextArrival = "02:00 PM";

	$("#add-data").on("click", function(){
	
		initialTime = $("#train-name").val().trim();
		iitialDestination = $("#add-train-time").val().trim();
		tFrequency = $("#add-frequency").val().trim();
		nextArrival = $("#input-train-time").val().trim();

		database.ref().set({
			initialTime: time,
			initialDestination: destination,
			tFrequency: frequency,
			nextArrival: arrival
		});
	});
	
	var timeConverted = moment(initialTime, "hh:mm").subtract(1, "years");
	console.log(timeConverted);

	var currentTime = moment();
	console.log("Current time: " + moment(currentTime).format("hh:mm"));


	
