(function($) {
  $(function() {

    $(".sidenav").sidenav();
    $(".parallax").parallax();
    $(".dropdown-trigger").dropdown({coverTrigger : false, constrainWidth : false});
    $('.datepicker').datepicker();


    $("#password").on("focusout", function (e) {
      if ($(this).val() != $("#passwordConfirm").val()) {
          $("#passwordConfirm").removeClass("valid").addClass("invalid");
      } else {
          $("#passwordConfirm").removeClass("invalid").addClass("valid");
      }
  	});
  
  	$("#passwordConfirm").on("keyup", function (e) {
      if ($("#password").val() != $(this).val()) {
          $(this).removeClass("valid").addClass("invalid");
      } else {
          $(this).removeClass("invalid").addClass("valid");
      }
  	});
  }); // end of document ready
})(jQuery); // end of jQuery name space
