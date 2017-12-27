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