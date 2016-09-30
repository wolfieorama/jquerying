$(document).ready(function(){
  $('.confirmation').on('click', 'button', function(){
    //  $('.confirmation').on('click', '.view-boarding-pass', function(){...}); event delegation
    $.ajax('confirmation.html'), {//$.ajax(url[, settings])
      success: function(response){//on succesful response
        $('.ticket').html(response).slideDown();
      },
      data: { "confNum": 1234}
    }
  });
});

//similary using the $(get) function

$(document).ready(function(){
  $('.confirmation').on('click', 'button', function(){
    $.get('confirmation.html', function(response){// shorthand $.get(url, success)
      $('.ticket').html(response).slideDown();
    });
  });
});

//with a data option from html

$(document).ready(function() {
  $("#tour").on("click", "button", function() {
    $.ajax('/photos.html', {
      success: function(response) {
        $('.photos').html(response).fadeIn();
      },
      data: { "location": $('#tour').data('location') },
      error: function(request, errorType, errorMessage){
        alert('Error' + errorType + 'with message' + errorMessage);
      },
      timeout: 3000,
      beforeSend: function(){
        $('.confirmation').addClass('is-loading');
      },
      complete: function(){
        $('.confirmation').removeClass('is-loading');
      }
    });
  });
});

//parsing html message
$(document).ready(function() {
  var el = $("#tour");
  el.on("click", "button", function() {
    $.ajax('/photos.html', {
      data: {location: el.data('location')},
      success: function(response) {
        $('.photos').html(response).fadeIn();
      },
      error: function(request, errorType, errorMessage) {
        $('.photos').html('<li>"Error" + errorType + "Try again"</li>');
      }
    });
  });
});


//
$(document).ready(function() {
  function showPhotos() {
    $(this).find('span').slideToggle();
  }
  $('.photos').on('mouseenter', 'li', showPhotos)
                 .on('mouseleave', 'li', showPhotos);


  var el = $("#tour");
  el.on("click", "button", function() {
    $.ajax('/photos.html', {
      data: {location: el.data('location')},
      success: function(response) {
        $('.photos').html(response).fadeIn();
      },
      error: function() {
        $('.photos').html('<li>There was a problem fetching the latest photos. Please try again.</li>');
      },
      timeout: 3000,
      beforeSend: function() {
        $('#tour').addClass('is-fetching');
      },
      complete: function() {
        $('#tour').removeClass('is-fetching');
      }
    });
  });
});
