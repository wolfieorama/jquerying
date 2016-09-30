function Tour() {
  console.log("A new Tour was created");
  
  this.cost = function(nights){
    console.log(nights * price);
  };
}
$(document).ready(function() {
  var tour = new Tour(100);
  tour.cost(4);
});
