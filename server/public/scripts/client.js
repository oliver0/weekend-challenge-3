$(document).ready(function(){

  $('#clear').on('click', function(){
    $('#numberForm').find('input[type=number]').val('');
    $('#result').empty();
  });

  // listener for click on one of the mathematical operation buttons
  $(".math").on("click", function(){
    $('#result').empty();
    var buttonText = $(this).text();
    var numberObject = {};
    numberObject['x']= $('#first').val();
    numberObject['y']= $('#second').val();
    numberObject['type']= buttonText;

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
