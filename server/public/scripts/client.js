$(document).ready(function(){

  $('#clear').on('click', function(){
    $('#view').text('0');
  });

  // listener for click on one of the mathematical operation buttons
  $(".math").on("click", function(){
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
