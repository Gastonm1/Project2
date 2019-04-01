// Get references to page elements
var $businessSchoolBtn = $(".businessSchoolBtn");

// The API object contains methods for each kind of request we'll make
var API = {
  schoolPicked: function() {
    window.location = '/majors';
  }
};

var handleSchoolBtn = function(event) {
  event.preventDefault();

  API.schoolPicked();
};

// Add event listeners to the submit and delete buttons
// $submitBtn.on("click", handleFormSubmit);
// $exampleList.on("click", ".delete", handleDeleteBtnClick);

$businessSchoolBtn.on("click", handleSchoolBtn);