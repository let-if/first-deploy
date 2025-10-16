$(document).ready(function() {
  $("div.alert").hide();
   $("button.in3").click(function(e) {
     e.preventDefault();
    $("input.in1, input.in2").each(function() {
      if ($(this).val().trim() === "") {
        $(this).css("border", "2px solid red");
      }
       else {
        $(this).css("border", "1px solid #ccc");
          $("div.alert").show();
      }
    });
  });
$("span.close-btn").click(function(e){
 e.preventDefault();
  $("div.alert").hide();
});
    
  });
  