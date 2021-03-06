(function(){
	window.options = {
		save: function(){
			localStorage["jarvis.username"] = $("#username").val();
			localStorage["jarvis.password"] = $("#password").val();
			localStorage["jarvis.url"] = $("#url").val();
			localStorage["jarvis.login"] = $("#login").val();
			localStorage["jarvis.ticketUrl"] = $("#ticket-url").val();
		},
		load: function(){
			$("#username").val(localStorage["jarvis.username"] || "")
			$("#password").val(localStorage["jarvis.password"] || "")
			$("#url").val(localStorage["jarvis.url"] || "")
			$("#login").val(localStorage["jarvis.login"] || "")
			$("#ticket-url").val(localStorage["jarvis.ticketUrl"] || "")
		}
	}
	/*Listeners*/
	$(".login").ready(function(){
		window.options.load()
	});
	$(".login .submit").click(function(){
		window.options.save()
	});
})();