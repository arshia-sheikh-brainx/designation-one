$(document).ready(function () {
  // team  slick slider 
  $('.card-slider').slick({
    dots: false,
    arrows: true,
    slidesToShow: 3,
    infinite: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 576,
        settings: {
          centerMode: true,
          dots: true,
          arrows: false,
          slidesToShow: 1,
          infinite: true
        }
      }
    ]
  });
  // news and events slick slider 
  $('.events-slider').slick({
    dots: false,
    arrows: true,
    slidesToShow: 3,
    infinite: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          dots: true,
          arrows: false,
        }
      }
    ]
  });
  // Team +  Ambassadors card hover effect 
  $('.eye-icon').click(function () {
    $(this).parents('.card').find(".card-hover-content").removeClass('d-none');
  });
  $('.card').mouseleave(function () {
    $(this).find(".card-hover-content").addClass('d-none');
  });
  $(".cancel-btn").click(function () {
  $(this).parents('.card').find(".card-hover-content").addClass('d-none');

  });

  // read more button for mobile  in about section 
  function AddReadMore() {
    //This limit you can set after how much characters you want to show Read More.
    let carLmt = 400;
    // Text to show when text is collapsed
    const readMoreTxt = "<span class='read-more-btn'> <br> Load More <img src='assets/images/fast-forward-double-right-arrows-symbol.svg'> </span>";
    // Text to show when text is expanded
    const readLessTxt = " <span class='read-more-btn'> <br> Read Less </span>";


    //Traverse all selectors with this class and manupulate HTML part to show Read More
    $(".addReadMore").each(function () {
      if ($(this).find(".firstSec").length)
        return;

      let allstr = $(this).text();
      if (allstr.length > carLmt) {
        let firstSet = allstr.substring(0, carLmt);
        let secdHalf = allstr.substring(carLmt, allstr.length);
        let strtoadd = firstSet + "<span class='SecSec'>" + secdHalf + "</span><span class='readMore'  title='Click to Show More'>" + readMoreTxt + "</span><span class='readLess' title='Click to Show Less'>" + readLessTxt + "</span>";
        $(this).html(strtoadd);
      }

    });
    //Read More and Read Less Click Event binding
    $(document).on("click", ".readMore,.readLess", function () {
      $(this).closest(".addReadMore").toggleClass("showlesscontent showmorecontent");
    });
  }
  // show read more button on mobile 
  if ($("body").width() <= 576) {
    AddReadMore();
  }
});