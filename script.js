$(function(){
    $('#load').hide();
    $("#submit").click(function(){
      $('#load').show();
      $('#results').hide();
      var input1 = $("#textInput1").val();
      var input2 = $("#textInput2").val();
      var url = "https://coppola-engine.herokuapp.com/getParam?s1=" + input1 + "&s2=" + input2;
      console.log(input1);
      console.log(input2);
     $.ajax({
    
        url: url,
        dataType: 'json',
        success: function(results){
            var param1 = results.Param1;
            var param2 = results.Param2;
            $('#results').show();
            $('#results').empty();
            $('#load').hide();
            // var ul=$("<ul>");
            // $('#results').append('Param1: ' +param1 + ' & Param2: ' + param2);
            var ul=$("<ul>");
        $.each(results, function(index, value){
            ul.append($("<li>").text(value));
        });
        $('#results').append(ul);
            }
        });
    
    });
    
    });