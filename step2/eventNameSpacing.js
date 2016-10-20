function picture(){
  console.log('show plane');
}

function status(){
  console.log('in service');
}

$(document).ready(function(){
  $('button').on('click.image', picture); //namespaced for image only
  $('button').on('click.details', status); //namespaced for details only

  $('button').off('click.image'); // removes the event handler for click image

  $('button').off('.image'); //removes all event handlers that end with .image
});

$(document).ready(function(){
  // Get Weather
  $('button').on('click', function() {
    var results = $(this).closest('li').find('.results');
    results.append('<p>Weather: 74&deg;</p>');
    $(this).off('click');
   });
})

//namespaced and off click
$(document).ready(function(){
  // Get Weather
  $('button').on('click.weather', function() {
    var results = $(this).closest('li').find('.results');
    results.append('<p>Weather: 74&deg;</p>');
    $(this).off('click.weather');
  });

   // Show Photos
  $('button').on('click.photos', function() {
    var tour = $(this).closest('li');
    var results = tour.find('.results');
    results.append('<p><img src="/assets/photos/'+tour.data('loc')+'.jpg" /></p>');
    $(this).off('click.photos');
  });
});
