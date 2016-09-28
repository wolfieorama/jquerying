$(document).ready(function(){
  $('.vacation').on('click', '.expand', function(event){
    event.preventDefault();
    $(this).closest('.vacation').find('.comments').fadeToggle();
  });
})


$(document).ready(function() {
  $('.see-photos').on('click', function(event) {
    event.stopPropagation();
    event.preventDefault();
    $(this).closest('.tour').find('.photos').slideToggle();
  });
  $('.tour').on('click', function() {
    alert('This event handler should not be called.');
  });
});

$(document).ready(function() {
  $('.tour').on('mouseenter', function() {
    $(this).addClass('highlight');
    $(this).find('.photos').show();
  });
  // add a new event handler

  $('.tour').on('mouseleave', function() {
    $(this).removeClass('highlight');
  });
});

//basic animation

$(document).ready(function() {
  $('.tour').on('mouseenter', function() {
    $(this).addClass('highlight');
    $(this).find('.per-night').animate({'top': '-14px', 'opacity': '1'}, 'fast');
  });
  $('.tour').on('mouseleave', function() {
    $(this).removeClass('highlight');
    $(this).find('.per-night').animate({'top': '0px', 'opacity': '0'}, 'fast');
  });
});
