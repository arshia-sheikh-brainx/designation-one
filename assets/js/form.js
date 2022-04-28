$(document).ready(function () {
  // add style to selected radio button 
  $(document).on('change','input[type=radio]', function(){
    $(this).parents('.d-flex').find('.form-radio-container').removeClass('radio-styles'); 
    $(this).parents('.form-radio-container').addClass('radio-styles'); 
  });
 });
