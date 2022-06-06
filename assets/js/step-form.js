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

    //add row

    $('.add-row-btn').click(function(){
      $(this).parent('.row').find('table tr:last').after('<tr class="prev-role-row"><td><input type="text" name="start-date" id="" value="2022"></td><td><input type="text" name="end-date" id="" value="2022"></td><td><input type="text" name="position" id="" value="Designer"></td><td><input type="text" name="company" id=""  class="blue-text" value="BrainX Technologies"></td><td class="remove-row"><svg xmlns="http://www.w3.org/2000/svg" id="Component_25_7" data-name="Component 25 – 7" width="7.832" height="7.832" viewBox="0 0 7.832 7.832"><path id="Path_10138" data-name="Path 10138" d="M25.641,977.365a.636.636,0,0,0-.454,1.088l2.825,2.825L25.187,984.1a.639.639,0,0,0,.9.9l2.825-2.825,2.825,2.825a.639.639,0,0,0,.9-.9l-2.825-2.825,2.825-2.825a.639.639,0,0,0-.9-.9l-2.825,2.825-2.825-2.825A.629.629,0,0,0,25.641,977.365Z" transform="translate(-25 -977.362)" fill="#004d9f"/></svg></td></tr>');
      $(".remove-row").on("click", function() {
        $(this).closest("tr").remove();
     });
    });
    //remove row 
    $(".remove-row").on("click", function() {
      $(this).closest("tr").remove();
   });
});
  