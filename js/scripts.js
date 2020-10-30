$(document).ready(function(){
   $( "#submit" ).submit(function( event ){
    event.preventDefault();
    var name= $('#mname').val(),
        desc= $('#desc').val(),
        pow= Math.ceil($('#power').val() / 10),
        acc= Math.ceil($('#acc').val() / 10),
        pp= $('#pp').val(),
        type= $('#type').val(),
        cat= $('#cat').val(),
        eff1= $('#effect1').val(),
        prob1= $('#prob1').val(),
        eff2= $('#effect2').val(),
        prob2= $('#prob2').val(),
        stab= $('#sametype').prop('checked'),
        crit= $('#crit-rate').prop('checked'),
        targ= $("input[name='target']:checked").val(),
        pri= $("input[name='priority']:checked").val(),
        misc= $('#misc").val();
     var convpow= function(){
           let x= pow-4;
           if (x==0){
              return " ";
           }elseif(x>0){
              return " + " + x;
           }else{
              return " - " + (x * (-1));
           };
        };
     var defstat= function(){
        if (cat=="Atk"){
           return "Def";
        }elseif(cat=="SpAtk"){
           return "Sp.Def";
        }else{
           return " ";
        }
     };
     var title= "{name} uses " + name;
     var display= name + " - " + cat;
     var toHit= if(acc>0){">To Hit: \{!(2d6) + " + acc + " + acc\} - evasion vs. 12 <br />"}else{"Auto success"};
     var dmg= function(){
        if(pow>0){
           return ">Damage: \{!(1d4)" + convpow + " + " + cat + "\} vs " + defstat + ".<br>";
        }else{
           return " ";
        }};
     var message= "'Type: " + type "'<br />" + pow + " Pow - " + acc + " Acc - " + pp + " pp<br />___<br />```<br />" + desc + "<br />```<br />" + toHit + dmg;
     $('#title').html(title);
     $('#display').html(display);
     $('#message').html(message);
   });
})
