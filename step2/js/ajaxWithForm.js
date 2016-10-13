$('form').on('submit', function(event){
  var from = $(this);
  event.preventDefault();
  $.ajax($('form').attr('action'), {
    type: $('form').attr('method'),
    data: form.serialize(),
    dataType: 'json',
    success: function(result){
      form.remove();
      var msg = $('<p></p>');
      msg.append("destination" + result.location + ".")
      msg.append("price" + result.price + ".")
      msg.append("night" + result.night + ".")
      msg.append("confirmation" + result.confirmation + ".")

      $('#vacation').hide().html(msg).fadeIn();
    },
    contentType: 'application/json',
  });
});

//more ajax
$(document).ready(function() {
  $('form').on('submit', function(event) {
    event.preventDefault();
    $.ajax('/book', {
      type: 'POST',
      data: $('form').serialize(),
      success: function(result){
        $('.tour').html(result);
      }
    });
  });
});
