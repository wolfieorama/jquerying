$('button').trigger('click'); // will invoke an action as the user clicking all the button

$('button').trigger('click.image') // will invoke an action as the user clicking the show details button

var showPrice = function(){
  var vacation = $(this).closest('.vacation');
  var price = vacation.data('price');
  var details = $('<p>Book 3 days for $' +(3 * price)+'</p>');
  vacation.append(details);
}



$('.vacation').on('click', showPrice); // calls individual show price

$('.vacation').on('show-price', showPrice); // call the individual show price for each

$('.show-prices').on('click', function(event){
  event.preventDeafult();
  $('.vacation').trigger('.show-price'); //click the button on each to run show price
});
