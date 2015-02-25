(function(){
	window.options = {
		save: function(){
			localStorage["jarvis.username"] = $("#username").val();
			localStorage["jarvis.password"] = $("#password").val();
			localStorage["jarvis.url"] = $("#url").val();
		},
		load: function(){
			$("#username").val(localStorage["jarvis.username"] || "")
			$("#password").val(localStorage["jarvis.password"] || "")
			$("#url").val(localStorage["jarvis.url"] || "")
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