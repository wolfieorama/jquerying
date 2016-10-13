//each
var cities = ['Paris', 'London', 'Orlando'];
$.each(cities, function(index, city){
  var result = city + " " + index;
  console.log(result) // Paris 0 London 1  Orlando 2 but our original array is intact ['Paris', 'London', 'Orlando'];
});

//map

var cities = ['Paris', 'London', 'Orlando'];
$.map(cities, function(city. index){
  var result = city + " " + index;
  console.log(result);// Paris 0 London 1  Orlando 2 but our new  array result is ['Paris 0', 'London 1', 'Orlando 2'];
  return result
});

//real example

$('button').on('click', function() {
  $.ajax('/cities/deals', {
    contentType: 'application/json',
    dataType: 'json',
    success: function(result) {
      $.each(result, function(index, dealItem) {
        var dealElement = $('.deal-' + index);
        dealElement.find('.name').html(dealItem.name);
        dealElement.find('.price').html(dealItem.price);
      });
    }
  });
});


//can also be cleaned up to

('button').on('click', function() {
  $.getJSON('/cities/deals', function(result) {
    $.each(result, function(index, dealItem) {
      var dealElement = $('.deal-' + index);
      dealElement.find('.name').html(dealItem.name);
      dealElement.find('.price').html(dealItem.price);
    });
  });
});
