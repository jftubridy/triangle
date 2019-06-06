$(function() {
  var one;
  var two;
  var three;

  $(".formOne").submit(function(event){
    one = parseInt($("input#length1").val());
    two = parseInt($("input#length2").val());
    three = parseInt($("input#length3").val());
    console.log(one);
    if ( one == two && two == three) {
      $(".equal").show();
      $(".iso").hide();
      $(".scal").hide();
      $(".nat").hide();
    } else if (one == two ||one ==three||two==three){
      $(".equal").hide();
      $(".iso").show();
      $(".scal").hide();
      $(".nat").hide();
    } else if ( one + two != three && two + three != one && one + three != two){
      $(".equal").hide();
      $(".iso").hide();
      $(".scal").hide();
      $(".nat").show();
    } else {
      $(".equal").hide();
      $(".iso").hide();
      $(".scal").show();
      $(".nat").hide();
    }
    event.preventDefault();
  })




});
