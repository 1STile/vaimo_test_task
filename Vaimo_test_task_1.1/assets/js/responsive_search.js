function search_block_responsive_Function() {
var x = document.getElementById("search_nav");
	if (x.className === "search_block") {
	x.className += "_responsive";
	} else {
	x.className = "search_block";
	}

var x = document.getElementById("mobile_search");
	if (x.className === "mobile_search_button") {
	x.className += "_responsive";
	} else {
	x.className = "mobile_search_button";
	}
	
var x = document.getElementById("mobile_header");
	if (x.className === "header_nav") {
	x.className += "_responsive";
	} else {
	x.className = "header_nav";
	}
	
var x = document.getElementById("mobile_nav");
	if (x.className === "mobile_nav_menu_button") {
	x.className += "_change_icon";
	} else {
	x.className = "mobile_nav_menu_button";
	}
	
var x = document.getElementById("mobile_basket");
	if (x.className === "shop_basket") {
	x.className += "_change_icon";
	} else {
	x.className = "shop_basket";
	}
}