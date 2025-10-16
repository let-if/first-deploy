$(document).ready(function() {
     $("input.in7").hide();
      $("input.in8").hide();
       $("input.in9").hide();
        $("input.in10").hide();
         $("input.in11").hide();
          $("input.in12").hide();
     $("input.b2").hide();

$("input.b1").click(function(){
   $("input.b1").hide(); 
   $("input.b2").show();
})
$("button.b4").click(function(e){
     e.preventDefault();
     if($('[name="letif"]').val()=="pinaple") {
 $("input.in1").hide();
  $("input.in7").show();
     }
    else{
         $("input.in1").show();
  $("input.in7").hide();
  
    }
});

    $("button.b4").click(function(e){
     e.preventDefault();
     if($('[name="letif"]').val()=="apple") {
 $("input.in2").hide();
  $("input.in8").show();
     }
    else{
         $("input.in2").show();
  $("input.in8").hide();

    }
    
});
 $("button.b4").click(function(e){
     e.preventDefault();
     if($('[name="letif"]').val()=="orange") {
 $("input.in3").hide();
  $("input.in9").show();
     }
    else{
         $("input.in3").show();
  $("input.in9").hide();
  
    }
    
});
 $("button.b4").click(function(e){
     e.preventDefault();
     if($('[name="letif"]').val()=="banana") {
 $("input.in4").hide();
  $("input.in10").show();
     }
    else{
         $("input.in4").show();
  $("input.in10").hide();
  
    }
    
});
 $("button.b4").click(function(e){
     e.preventDefault();
     if($('[name="letif"]').val()=="mango") {
 $("input.in5").hide();
  $("input.in11").show();
     }
    else{
         $("input.in5").show();
  $("input.in11").hide();
  
    }
    
});
 $("button.b4").click(function(e){
     e.preventDefault();
     if($('[name="letif"]').val()=="avocado") {
 $("input.in6").hide();
  $("input.in12").show();
     }
    else{
         $("input.in6").show();
  $("input.in12").hide();
  
    }
    
});

});
