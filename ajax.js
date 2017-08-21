document.addEventListener("DOMContentLoaded", function() {

  var button_one = document.querySelector('#button_one')

  button_one.addEventListener('click', function() {

    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/',
      method: 'GET',
      data: {},
      dataType: 'text',
    });
  })
});
