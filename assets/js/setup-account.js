$(document).ready(function () {
    // step form 
    const form = $("#individual-membership-form");
    form.steps({
      headerTag: "h6",
      bodyTag: "section",
      transitionEffect: "fade",
      titleTemplate: '<span class="step"></span> <span class="title">#title#</span>',
      labels: 
      {
          finish: "Done",
      }
    });
    let input = $('<button class="skip-btn"> Skip </button>');

      input.appendTo($('ul[aria-label=Pagination]'));
  
    // profile image upload 
    function readURL(input) {
      if (input.files && input.files[0]) {
        let reader = new FileReader();
        reader.onload = function (e) {
          $('#profile-image1').css('background-image', 'url(' + e.target.result + ')');
          $('#profile-image1').hide();
          $('#profile-image1').fadeIn(650);
        }
        reader.readAsDataURL(input.files[0]);
      }
    }
    $("#profile-image-upload").change(function () {
      readURL(this);
    });
  // multi select pills 
    $(".multiple-select").select2({
      closeOnSelect : false,
      placeholder : "What may be your one designation?",
      allowClear: false,
      tags: false
    });
});
  