// Get references to page elements
var $scheduleBtn = $(".scheduleBtn");

// The API object contains methods for each kind of request we'll make
var API = {
  schedulePicked: function() {
    window.location = '/schedule';
  }
};

var handleScheduleBtn = function(event) {
  event.preventDefault();

  API.schedulePicked();
};

// Add event listeners to the submit and delete buttons
// $submitBtn.on("click", handleFormSubmit);
// $exampleList.on("click", ".delete", handleDeleteBtnClick);

$scheduleBtn.on("click", handleScheduleBtn);