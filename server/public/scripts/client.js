$(document).ready(function(){

  var x = '';
  var y = '';
  var numberObject = {};
  var operationClicked = false;
  var negativeVisible = false;
  var decimalVisible = false;

  $('#clear').on('click', function(){
    $('#view').text('0');
    clearView();
  });



  $('#percent').on('click', function(){
    var percent = $('#view').text() / 100;
    $('#view').text(percent);
  });

  $('#negative').on('click', makeNegativeOrPositive);

  $('#decimal').on('click', function(){
    if(!decimalVisible){
      if(operationClicked){
        y += '.';
        $('#view').text(y);
      } else {
        x += '.';
        $('#view').text(x);
      }
    }
  });

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
    var fileName = '/' + numberObject.type;
    $.ajax({
      type: 'POST',
      url: fileName,
      data: numberObject,
      success: function(data){
        getResult();
        clearView();
      }
    });
  });

  function makeNegativeOrPositive(){
    var currentNumber = $('#view').text();
    if(negativeVisible){
      $('#view').text(currentNumber.substring(1,20));
    } else{
      $('#view').text('-' + currentNumber);
    }
    if(operationClicked){
      if(negativeVisible){
        y = y.substring(1,20);
      } else {
        y = '-' + y;
      }
    }  else{
          if(negativeVisible){
            x = x.substring(1,20);
          } else{
            x = '-' + x;
          }
        }
    negativeVisible = !negativeVisible;
  }

  function clearView(){
    x = '';
    y = '';
    numberObject = {};
    operationClicked = false;
  }

  function getResult(){
    var fileName = '/' + numberObject.type;
    $.ajax({
      type: 'GET',
      url: fileName,
      success: function(data){
        $('#view').text(data.result);
      }
    });
  }
});
