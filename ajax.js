document.addEventListener("DOMContentLoaded", function() {

  var button_one    = document.querySelector('#button_one')
  var button_two    = document.querySelector('#button_two')
  var button_three  = document.querySelector('#button_three')
  var button_four   = document.querySelector('#button_four')
  var button_five   = document.querySelector('#button_five')
  var button_six   = document.querySelector('#button_six')




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

  button_four.addEventListener('click', function() {

    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/pong',
      method: 'GET',
      data: {},
      dataType: 'text',
    }).always(function () {
      console.log("Hey the request finished!");
    });
  })

  button_five.addEventListener('click', function() {

    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/count',
      method: 'GET',
      data: {},
      dataType: 'text',
    }).done(function (responseData) {

      var countElement = document.createElement("h3");
      countElement.innerHTML = responseData
      var section = document.querySelector('#step7')
      section.appendChild(countElement);
        console.log('Yay we did it!');
    }).fail(function () {
        console.log('That did NOT go well.');
    }).always(function () {
      console.log("All I know is, it's over.");
  })

});

button_six.addEventListener('click', function() {

    $.ajax({
    url: 'http://first-ajax-api.herokuapp.com/time' ,
    method: 'GET',
    data: {timezone: 'America/Mexico_City'},
    dataType: 'text'
  }).done(function (responseData) {
    var timeElement = document.createElement("h3");
    timeElement.innerHTML = responseData
    var section = document.querySelector('#step8')
    section.appendChild(timeElement);
      console.log('Yay we did it!');
  }).fail(function () {
      console.log('That did NOT go well.');
  }).always(function () {
    console.log("All I know is, it's over.");
})

});







});
