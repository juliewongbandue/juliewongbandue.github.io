$(document).ready(function () {
	$('#myForm').submit(function(event){
		//preventDefault prevents form submission from happening and run your own code
		event.preventDefault();
		var name = $('#name-input').val();
		$('#target').text(name);
	})
	//keyup will fire event when key is released
	$('#name-input').keyup(function(event){
		event.preventDefault();
		console.log(event);
	})s

	$('#social a').click(function(e){
		e.preventDefault();
		console.log(e);
	})
})
