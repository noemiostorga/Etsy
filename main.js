$(document).ready(function(){

	var etsyURL = 'https://api.etsy.com/v2/listings/active.js?api_key=tlhdf18ou6iutoocbpda0dg5&keywords=whiskey&includes=Images,Shop';


	$.ajax({
	  url: etsyURL,
	  dataType: 'jsonp',
	  method: 'get'
}).then (function (response) {
  console.log(response);
  var information = response.results.map(function(obj){
  			return {
  				"title": obj.title,
  				"url":obj.url,
  				"price": obj.price,
  				"shop": obj.Shop.shop_name,
  				"image": obj.Images[0]["url_170x135"]
  			}

  		
  		})
  var Data = {
	"information":information
};

var Template = $("#informationList").text();
var listHTML = Mustache.render(Template, Data);

$(".allCatBoxes").html(listHTML);
	})



});



