$(document).ready(function(){

  var x = "";
  var y = "";
  var numberObject = {};
  var operationClicked = false;

  $('#clear').on('click', function(){
    $('#view').text('0');
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
    } else {
      y += $(this).text();
      console.log(y)
    }

    console.log(x);
  });

  $('.operations').on('click', function(){
    if (!operationClicked) {
      numberObject['x'] = x;
      numberObject['type'] = $(this).attr('id');
      operationClicked = true;
    }



    console.log(numberObject);
    console.log($(this).attr('id'));

    // numberObject[first] = first;
    // numberObject[type] =
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
        $('#result').append(data.result);
      }
    });
  }
});
