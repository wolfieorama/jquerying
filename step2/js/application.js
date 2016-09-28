$(document).ready(function(){
  // $('button').on('click', function(){
  //   var price = $(this).data('price');
  //   $(this).after(price);
  //   // $(this).closest('.vacation').append(price);
  //   // $('.vacation').append(price); // price.appendTo($('#vacation'))
  //   // $('.vacation').on('click', 'button', function(){}); event delegation for all buttons inside the ,vacation class
  //   $(this).remove();
  // });


  // $('#filter').on('click', '.onsale-filter', function(){
  //   $('.highlighted').removeClass('highlighted')
  //   $('.vacation').filter('.onsale').addClass('highlighted');
  // });
  //
  // $('#filter').on('click', '.expiring-filter', function(){
  //   $('.vacation').filter('.expiring').addClass('highlighted');
  // });
  $('#filter').on('click', '#sale', function(){
    $('.highlighted').removeClass('highlighted')
    $('.holiday').filter('.onsale').addClass('highlighted');
  });

  $('#filter').on('click', '#nosale', function(){
    $('.highlighted').removeClass('highlighted')
    $('.holiday').filter('.nosale').addClass('highlighted');
  });

});


// $(document).ready(function() {
//   $('.tour').on('click', 'button', function() {
//     var tour = $(this).closest('.tour');
//     var discount = tour.data('discount');
//     var message = $('<span>Call 1-555-jquery-air for a $' + discount + ' discount.</span>');
//     tour.append(message);
//     $(this).remove();
//   });
// });
