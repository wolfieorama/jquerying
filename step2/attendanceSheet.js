$(document).on('change', '#attendance_sheet_team_id', function(event) {
  var team_id;
  console.log(event);
  team_id = event.target.value;
  $.get('/attendance_sheets/new.js', {
    team_id: team_id
  }).done(function(response) {
    return console.log('response', response);
  });
  return $(document).ajaxSuccess(function() {
    return $('.actions').show("slow");
  });
});
