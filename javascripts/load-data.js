define(function(require){
  var firebase = require("firebase");
  var templates = require("get-templates");


  var myFirebaseRef = new Firebase("https://ls-traveled-to-places.firebaseio.com/");
  
  myFirebaseRef.child("location_types").on("value", function(snapshot) {
    var location_types = snapshot.val();
    console.log("location_types", location_types);

    //This will hold the complete DOM string of locations
    var populatedTemplate = templates.locTypeTpl(location_types);
    
    // Insert the DOM string into the appropriate element
    $("#location-type").html(populatedTemplate);
  });

  // Listen for when anything changes on the "trips" key
  myFirebaseRef.child("trips").on("value", function(snapshot) {
    var trips = snapshot.val();

    console.log("trips", trips);

    // This will hold the complete DOM string of trips
    var populatedTemplate = templates.tripTpl(trips);

    // Insert the DOM string into the appropriate element
    $("#list-of-trips").html(populatedTemplate);

  });

});







