// Get references to page elements
var $submitBtn = $(".submitBtn");

// The API object contains methods for each kind of request we'll make
var API = {
  classesPicked: function() {
    window.location = '/studenthub';
  }
};

var handleSubmitBtn = function(event) {
  event.preventDefault();

  API.classesPicked();
};

// Add event listeners to the submit and delete buttons
// $submitBtn.on("click", handleFormSubmit);
// $exampleList.on("click", ".delete", handleDeleteBtnClick);

$submitBtn.on("click", handleSubmitBtn);