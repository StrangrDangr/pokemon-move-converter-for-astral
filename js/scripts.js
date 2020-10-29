$(document).ready(function(){
   $( "#submit" ).submit(function( event ){
    event.preventDefault();
    var name= $('#mname').val(),
        desc= $('#desc').val(),
        pow= $('#power').val(),
        acc= $('#acc').val(),
        pp= $('#pp').val(),
        type= $('#type').val(),
        cat= $('#cat').val(),
        eff1= $('#effect1').val(),
        prob1= $('#prob1').val(),
        eff2= $('#effect2').val(),
        prob2= $('#prob2').val(),
        stab= $('#sametype').val(),
        misc= $('#misc").val();
     var title= "{name} uses " + name;
     var display= name + " - " + type;
     var message= "'Type: " + type "'<br />___<br />```<br />" + desc + "<br />```<br />";
     $('#title').html(title);
     $('#display').html(display);
     $('#message').html(message);
   });
})
