$(document).ready(function(){

  var x = '';
  var y = '';
  var numberObject = {};
  var operationClicked = false;
  var negativeVisible = false;
  var decimalVisible = false;

  // listener for clear button which calls clearView to reset all the variables
  $('#clear').on('click', function(){
    $('#view').text('0');
    clearView();
  });


  // gives the number as a percentage when clicked
  $('#percent').on('click', function(){
    var percent = $('#view').text() / 100;
    $('#view').text(percent);
  });

  // when clicked, number is either made negative, or, if already negative
  // is made positive
  $('#negative').on('click', makeNegativeOrPositive);

  // when clicked a decimal point is added to x or y and is shown on DOM
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

  // when a number is clicked it is added to either x or y and is also added
  // to the DOM
  $('.number').on('click', function(){
    if(!operationClicked){
      x += $(this).text();
      $('#view').text(x);
    } else {
      y += $(this).text();
      $('#view').text(y);
    }
  });

  // if a math operation is clicked the first number is now know and saved in
  // in the numberObject. The type of operation is also added to the numberObject.
  $('.operations').on('click', function(){
    if (!operationClicked) {
      numberObject.x = x;
      numberObject.type = $(this).attr('id');
      operationClicked = true;
    }
  });

  // when equals is clicked the second number is added to numberObject. The url
  // is determined by the type of operation and the data is the numberObject.
  $('#equals').on('click', function(){
    numberObject.y = y;
    var fileName = '/' + numberObject.type;
    $.ajax({
      type: 'POST',
      url: fileName,
      data: numberObject,
      // if the post is successful then another ajax call gets the result and
      // everything is reset
      success: function(data){
        getResult();
        clearView();
      }
    });
  });

  // this makes the number on the view either negative or positive and updates
  // the x and y variables
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

  // this function resets everything
  function clearView(){
    x = '';
    y = '';
    numberObject = {};
    operationClicked = false;
  }

  // this function makes a get request to the url based on the type of mathematical
  // operation. If it is successful it updates the view with the result
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
