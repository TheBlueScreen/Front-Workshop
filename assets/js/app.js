console.log("App js loaded");
$(".submenu-item a").on('click', function () {
    console.log("Menu item clicked");
    let container = $("header .menu .menu-content ul");
    container.find('.active').removeClass("active");

    let item = $(this).parent();
    item.addClass('active');

    let index = item.data('number');
    container = $("header .menu .menu-content .menu-preview");
    container.find('.active').removeClass("active");
    $("#submenu-preview-"+index).addClass("active");
});


$("#mobile-menu-btn").click(function () {
    let menu = $(".mobile-menu");
    let isOpen = menu.hasClass('active');

    if(isOpen){
        menu.removeClass("active");
    }else{
        menu.addClass('active');
    }
});

$("#go-up").click(function() {
    $('html, body').animate({
        scrollTop: 0
    }, 2000);
});