var confirmation = {
  init: function(){
    $("#tour").on("click", "button", this.loadConfirmation);
  },
  loadConfirmation: function(){
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
  }

};

$(document).ready(function(){
  confirmation.init();
});
