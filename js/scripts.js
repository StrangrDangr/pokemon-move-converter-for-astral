$(document).ready(function(){
   $( "#submit" ).click(function(){
    var name= $('#mname').val(),
        desc= $('#desc').val(),
        pow= Math.ceil($('#power').val() / 10),
        acc= Math.ceil($('#acc').val() / 10),
        pp= $('#pp').val(),
        type= $('#type').val(),
        cat= $('#cat').val(),
        eff1= $('#effect1').val(),
        prob1= Math.ceil($('#prob1').val() / 10),
        eff2= $('#effect2').val(),
        prob2= Math.ceil($('#prob2').val() / 10),
        stab= $('#sametype').prop('checked'),
        crit= $('#crit-rate').prop('checked'),
        targ= $("input[name='target']:checked").val(),
        pri= $("input[name='priority']:checked").val(),
        misc= $('#misc').val();
     var convpow= function(){
           let x= pow-4;
           if (x==0){
              return " ";
           }else if(x>0){
              return " + " + x;
           }else{
              return " - " + (x * (-1));
           };
        };
     var defstat= function() {
        if (cat=="Atk"){
           return "Def";
        }else if(cat=="SpAtk"){
           return "Sp.Def";
        }else{
           return " ";
        };
     };
     var title= "{name} uses " + name;
     var display= name + " - " + cat;
     var first=pri;/*(function(){
        var fl= "<br>";
        if(pri != "default"){fl += ">" + pri + "<br>"};
        if(targ != "default"){fl += ">" + targ + "<br>"};
        return fl;
     });*/
    var toHit=(function(){
        if(acc>0){
           if($(crit)==false){
              return ">To Hit: {!(2d6) + " + acc + " + acc} - evasion vs. 12 <br>";
           }else{
              return ">To Hit: !(2d6cr>10) + {acc + " + acc + "} - evasion vs. 12 <br>";
           };
        }else if(pow>0){
           return ">Auto success! !(2d6)<br>"
        }else{
           return ">Auto success!<br>"
        };
     });
     var dmg= function(){
        if(pow>0){
           let d= "!(1d4)" + convpow + " + " + cat;
           let e= "} vs " + defstat + ".<br>";
           let c= ">Crit? + !!(1d4" + convpow + ") dmg.<br>";
           if(stab==false){
             return ">Damage: {" + d + e + c;
           }else{
             return ">Damage(STAB): {floor(1.5 *(" + d + "))" + e + c;
           }
        }else{
           return " ";
        }};
     var extra= function(){
        if (eff1 !=0){
           let r1= "!!(1d10>" + (10-$(prob1)) + ")<br>";
           let e1= ">" + eff1 + "? ";
           if (eff2 !=0){
              let r2= "!!(1d10>" + (10-$(prob2)) + ")<br>";
              let e2= ">" + eff2 + "? ";
              return e1+r1+e2+r2;
           }else{
              return e1+r1;
           }
        }else{
           return " ";
        }
     };
     var ms = function(){
        if(misc!=0){
           return ">" + misc;
        }else{
           return " ";
        }
     };
     var message1= "\'Type: " + type + "\'<br>" + pow + " Pow - " + acc + " Acc - " + pp + " pp<br>___<br>```<br>" + desc + "<br>```";
     var message2= first + toHit + dmg + extra + ms;
     $('#title').html(title);
     $('#display').html(display);
     $('#message1').html(message1);
     $('#message2').html(message2);
   });
})
