function mobile_nav_menu_responsive_Function() {
var x = document.getElementById("mobile_nav_menu");
    if (x.className === "nav_menu") {
    x.className += "_responsive";
    } else {
    x.className = "nav_menu";
    }
var x = document.getElementById("mobile_nav");
    if (x.className === "mobile_nav_menu_button") {
    x.className += "_responsive";
    } else {
    x.className = "mobile_nav_menu_button";
    }
var x = document.getElementById("mobile_search");
    if (x.className === "mobile_search_button") {
    x.className += "_change_icon";
    } else {
    x.className = "mobile_search_button";
    }		
var x = document.getElementById("mobile_header");
    if (x.className === "header_nav") {
    x.className += "_burger_menu";
    } else {
    x.className = "header_nav";
    }
var x = document.getElementById("mobile_signed_up");
    if (x.className === "signed_up_block") {
    x.className += "_burger_menu";
    } else {
    x.className = "signed_up_block";
    }
var x = document.getElementById("mobile_header_banner");
    if (x.className === "header_banner") {
    x.className += "_burger_menu";
    } else {
    x.className = "header_banner";
    }
}