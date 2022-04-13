$(document).ready(function () {
    //header
    $("header .dropdown").hover(function () {
        var dropdownMenu = $(this).children(".dropdown-menu");
        if (dropdownMenu.is(":visible")) {
            dropdownMenu.parent().toggleClass("open");
        }
    });
    //go to the page when single click
    $('header .dropdown > a').click(function () {
        if (checkScreenSize()) {
            location.href = this.href;
        }
    });
        //go to the page when double click on mobile 
    $("header .dropdown > a").on("dblclick", function () {
        if (!checkScreenSize()) {
            location.href = this.href;
        }
    });
    // check for screen size 
    function checkScreenSize() {
        return window.innerWidth >= 992; //The screen size you would like to enable the click;
    }
    //sign in and sign out button in heder animation  
    $(".left.switch-button-case").click(function () {
        $(".active-btn-background").removeClass("moveRight");
        $(".active-btn-background").addClass("moveLeft");
        $('.right.switch-button-case').removeClass('active-case');
        $('.left.switch-button-case').addClass('active-case');
        setTimeout(function () {
            window.location.href = '/signUp.html'
        }, 300);

    });
    $(".right.switch-button-case").click(function () {
        $(".active-btn-background").removeClass("moveLeft");
        $(".active-btn-background").addClass("moveRight");
        $('.left.switch-button-case').removeClass('active-case');
        $('.right.switch-button-case').addClass('active-case');
        setTimeout(function () {
            window.location.href = '/signUp.html'
        }, 300);
    });
});