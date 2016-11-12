$(document).ready(function(){

  // listener for click on one of the mathematical operation buttons
  $("button").on("click", function(){
    $('#result').empty();
    var buttonText = $(this).text();
    var numberObject = {};
    numberObject['x']= $('#first').val();
    numberObject['y']= $('#second').val();
    console.log(typeof numberObject.x)
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
