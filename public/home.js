
$(document).ready(function() {
$("div.div11").hide();
  $("button.show").hide();
$("button.button").click(function(e){
  e.preventDefault();
    $("div.div11").show();
    $("button.button").hide();
       $("button.show").show();
})
$("button.show").click(function(e){
      e.preventDefault();
    $("div.div11").hide();
     $("button.show").hide();
      $("button.button").show();
})
$("div.d8").hide();
$("button.circle-button").click(function(e){
  e.preventDefault();
$("div.d7").hide();
$("div.d8").show();
});
$("button.circle-buttonn").click(function(e){
  e.preventDefault();
$("div.d8").hide();
$("div.d7").show();
});
$("div.d9").hide();
$("button.circle-butto").click(function(e){
  e.preventDefault();
  $("div.d7").hide();
$("div.d8").hide();
$("div.d9").show();
});
$("button.circle-buttonnn").click(function(e){
  e.preventDefault();
  $("div.d9").hide();
   $("div.d7").hide();
$("div.d8").show();

});
$("div.div26").hide();
$("button.inside-btnn").hide();
$("button.inside-btn").click(function(e){
  e.preventDefault();
  $("div.div26").show();
   $("button.inside-btn").hide();
    $("button.inside-btnn").show();
});
$("button.inside-btnn").click(function(e){
  e.preventDefault();
  $("div.div26").hide();
   $("button.inside-btnn").hide();
    $("button.inside-btn").show();
}); 
$("span.close-btn").click(function(e){
 $("div.div32").hide();
});



});

