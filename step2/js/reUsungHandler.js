function showTicket(){
  $(this).closest('.confirmation').find('.ticket').slideDown();
}

$(document).ready(function(){
  $('.confirmation').on('click', 'button', showTicket);
  $('.confirmation').on('click', 'h3', showTicket);
});

//Reusing a handler via a function

$(document).ready(function() {
  $('#tour').on('click', 'button', function() {
    $('.photos').slideToggle();
  });
  $('.photos').on('mouseenter', 'li', function() {
    $(this).find('span').slideToggle();
  });
  // add another event handler
  $('.photos').on('mouseleave', 'li', function() {
    $(this).find('span').slideToggle();
  });
});


//refactored
$(document).ready(function() {
  $('#tour').on('click', 'button', function() {
    $('.photos').slideToggle();
  });
  $('.photos').on('mouseenter', 'li', showPhotos);
  // add another event handler
  $('.photos').on('mouseleave', 'li', showPhotos);

  function showPhotos(){
    $(this).find('span').slideToggle();
  }
});
