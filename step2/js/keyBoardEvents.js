$(document).ready(function () {
  $('.vacation').on('keyup', '.quantity', function(){
    var  price = +$(this).closest('vacation').data('price');
    var quantity = +$(this).val();
    $('#total').text(price * quantity);
  });
});

// focus and keyup
$(document).ready(function() {
  $('#nights').on('keyup', function() {
    var nights = +$(this).val();
    var dailyPrice = +$(this).closest(".tour").data("daily-price");
    $('#total').text(nights * dailyPrice);
    $('#nights-count').text($(this).val());
  });
  // add another event handler
  $('#nights').on('focus', function(){
    $(this).val(7);
  });
});
