jQuery(document).ready(function(){
  $("h1").text("Olla Mister");

  $(".promo").text("Venice-promo");

  $("#destinations > li").text("opps"); //selecting direct descendants

  $("#destinations").find("li"); //traversing its faster

  $("#destinations, .classxy").text("opps"); //selecting multiple elements

  $("#destinations li:first").text("opps"); //selecting first item

  $("#destinations li:last").text("opps"); //selecting last item
  $("destinations").last();

  $("#destinations li:even").text("opps"); //selecting even listing

  $("#destinations li:odd").text("opps"); //selecting odd listing

  $("destinations").last().parent(); // walks up the DOM to select the parent of the last item

  $("#destinations").children("li").text("opps"); //selects only the direct children
  $("#destinations").find("li").last(); // selcting the last destination
  $("#tours").find(".featured").parent(); //selecting the parents of featured tours
});
