//for a single item being returned
$(document).ready(function(){
  $('button').on('click', function(){
    $.ajax('cities/favourite/1', {
      contentType: 'application/json',
      dataType: 'json',
      success: function(result){
        var fav = $('.favourite');
        fav.find('p').html(result.name);
        fav.find('img').attr('src', result.image);
      }
    });
  });
});

//for grouped of items returned as json that we need to iterate through

success: function(result){
  $.each(result, function(index, city){
    var fav = $('.favourite' + index);
    fav.find('p').html(city.name);
    fav.find(img).attr('src', city.image);
  });
}
