$(document).ready(function(){

  var x = '';
  var y = '';
  var numberObject = {};
  var operationClicked = false;

  $('#clear').on('click', function(){
    $('#view').text('0');
    x = ''
    y = '';
    numberObject = {};
    operationClicked = false;
    console.log(x);
  });

  // listener for click on one of the mathematical operation buttons
  /*$(".math").on("click", function(){
    $('#result').empty();
    var buttonText = $(this).text();
    var numberObject = {x:$('#first').val(), y: $('#second').val(), type: buttonText};

    $.ajax({
      type: 'POST',
      url: '/operations',
      data: numberObject,
      success: function(data){
        getResult();
      }
    });
  });*/

  $('.number').on('click', function(){
    if(!operationClicked){
      x += $(this).text();
      $('#view').text(x);
    } else {
      y += $(this).text();
      $('#view').text(y);
    }
  });

  $('.operations').on('click', function(){
    if (!operationClicked) {
      numberObject.x = x;
      numberObject.type = $(this).attr('id');
      operationClicked = true;

    }
  });

  $('#equals').on('click', function(){
    numberObject.y = y;
    //console.log(numberObject);
    $.ajax({
      type: 'POST',
      url: '/operations',
      data: numberObject,
      success: function(data){
        getResult();
      }
    });
  });

  function postNumbers(){
    event.preventDefault();
    var numberObject = {};
    }

  function getResult(){
    $.ajax({
      type: 'GET',
      url: '/operations',
      success: function(data){
        $('#view').text(data.result);
      }
    });
  }
});
