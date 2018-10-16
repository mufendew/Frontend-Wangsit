(function($) {
  $(function() {

    $(".sidenav").sidenav();
    $(".parallax").parallax();
    $(".dropdown-trigger").dropdown({coverTrigger : false, constrainWidth : false});
	$('.modal').modal();
	$('select').formSelect();
	$('#summernote').summernote({
		placeholder: '',
		tabsize: 5,
		height: 200
	});
	$('input#input_text').characterCounter();
	 
    $('.datepicker').datepicker({
	showClearBtn : true,
	format: 'dd-mm-yyyy',
	defaultDate : new Date("1998-05-05"),
	yearRange : [1980,2005]
	
		
	
  	});
	$('.dropdown-trigger').dropdown({
		constrainWidth : true,
		coverTrigger : false
	});


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
