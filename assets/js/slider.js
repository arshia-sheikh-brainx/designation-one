$(document).ready(function() {
    $(".custom-slider").slick({
      arrows: true,
      dots: false,
      slidesToShow: 1,
      autoplay: false,
      prevArrow: '<button class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" width="25.806" height="12.5" viewBox="0 0 25.806 12.5"><g id="left-arrow_1_" data-name="left-arrow (1)" transform="translate(0 -132)"><g id="Group_2035" data-name="Group 2035" transform="translate(0 132)"><path id="Path_15949" data-name="Path 15949" d="M24.8,137.242H3.449l3.536-3.519a1.008,1.008,0,0,0-1.422-1.429L.3,137.536h0a1.009,1.009,0,0,0,0,1.427h0l5.267,5.242a1.008,1.008,0,0,0,1.422-1.429l-3.536-3.519H24.8a1.008,1.008,0,0,0,0-2.016Z" transform="translate(0 -132)"/></g><g></svg></button>',
      nextArrow: '<button class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" width="25.806" height="12.5" viewBox="0 0 25.806 12.5"><g id="left-arrow_1_" data-name="left-arrow (1)" transform="translate(0)"><g id="Group_2035" data-name="Group 2035" transform="translate(0 0)"><path id="Path_15949" data-name="Path 15949" d="M1.008,137.242H22.356l-3.536-3.519a1.008,1.008,0,0,1,1.422-1.429l5.267,5.242h0a1.009,1.009,0,0,1,0,1.427h0l-5.267,5.242a1.008,1.008,0,0,1-1.422-1.429l3.536-3.519H1.008a1.008,1.008,0,0,1,0-2.016Z" transform="translate(0 -132)" fill="#fff"/></g></g></svg></button>',
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1
          }
        },
        {
          breakpoint: 550,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    }).on('afterChange',function(event){
      var toppos = ($('.slick-active').height()/2);
      $('.slick-arrow').css('top',toppos+'px');
    }).trigger('afterChange');
  });
  