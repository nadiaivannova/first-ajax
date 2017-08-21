document.addEventListener("DOMContentLoaded", function() {

  var button_one    = document.querySelector('#button_one')
  var button_two    = document.querySelector('#button_two')
  var button_three  = document.querySelector('#button_three')

  button_one.addEventListener('click', function() {

    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/',
      method: 'GET',
      data: {},
      dataType: 'text',
    }).done(function (responseData) {
      console.log(responseData);
    });
  })

  button_two.addEventListener('click', function() {

    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/ping',
      method: 'GET',
      data: {},
      dataType: 'text',
    }).done(function (responseData) {
      var pingElement = document.createElement("h3");
      pingElement.innerHTML = responseData
      var section = document.querySelector('#step3456')
      section.appendChild(pingElement);
      console.log(responseData);
    });
  })

  button_three.addEventListener('click', function() {

    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/pong',
      method: 'GET',
      data: {},
      dataType: 'text',
    }).fail(function () {
      var fail = document.createElement('h3')
      fail.innerHTML = 'Everyone panic! Our request has failed! Apologies we are trying to fix it!'
      var section = document.querySelector('#step3456')
      section.appendChild(fail);
      console.log(responseData);
    });
  })

});
