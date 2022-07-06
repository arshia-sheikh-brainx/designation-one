let selected = $('.selected-language').find(":selected").text();
$('.language').css('display' , 'none');
$(".language#" + selected).css('display' , 'block');

// onchange 

$('.selected-language').on('change', function() {
    let selected = $('.selected-language').find(":selected").text();
    $('.language').css('display' , 'none');
    $(".language#" + selected).css('display' , 'block');
  });