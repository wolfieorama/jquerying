function Confirmation(el){
  this.el =el;//save reference to the passed in element
  this.ticket = this.el.find('.ticket');
  var confirmation = this;
  this.loadConfirmation = function(){
    $.ajax('/photos.html', {
      timeout: 3000,
      context: confirmation,// to use the correct context of this
      success: function(response) {
      this.ticket.html(response).fadeIn();
      }
  });
  this.showBoardingPass = function(event){
    event.preventDefault();
    $(this).hide();
    confirmation.el.find('.boarding-pass').show();
  });

  this.el.on('click', 'button', this.loadConfirmation);
  this.el.on('click', '.view-boarding-pass', this.showBoardingPass);
}

$(document).ready(function(){
  var paris = new Confirmation($('#paris')); // create a new ocnfirmation for each ticket
  var london = new Confirmation($('#london'))
});

//example
function Vacation(destination){
  this.details = function(){
    console.log(destination);
  }
}

$(document).ready(function(){
  var paris = new Vacation('Paris');
  paris.details();
  var london = new Vacation('London');
  london.details();
});
