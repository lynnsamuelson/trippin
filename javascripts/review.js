define(function(require) {
  var $ = require("jquery");
  var selectedTripId;
  
  $(document).on("click", "button[id^='add-review#']", function() {
    selectedTripId = $(this).attr("id").split("#")[1];
    $(".review-container").toggle();
    console.log("key", selectedTripId);
  });

  $("#save-review").click(function() {
    var tripNameRef = new Firebase('https://ls-traveled-to-places.firebaseio.com/trips/' + selectedTripId);
    

    var newReview = {

      date: Date.now(),
      text: $(".review-container").val(),
      title: "Title"
    };

    
    tripNameRef.child("reviews").push(newReview);
  });

  
});