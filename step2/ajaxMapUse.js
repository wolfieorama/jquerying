//using $.map to iterate and modify json result
$('.update-status').on('click', function(){
  $.getJSON(/status, function(result){
    var statusElement = $.map(result, function(status, i){
      var listItem = $('<li></li>');
      $('<h3>'+status.name'</h3>').appendTo(listItem);
      $('<h3>'+status.status'</h3>').appendTo(listItem);
      return listItem;
    });
    $('.status-list').detach().html(statusElement).appendTo('status');
  });
});
