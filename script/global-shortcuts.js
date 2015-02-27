(function(){

	/*Go to unread list*/
	Mousetrap.bind('alt+shift+u', function(e) {
		if($("#unread-tickets")){
    		$("#unread-tickets").trigger("click");
		}
	});
	Mousetrap.bind('alt+shift+a', function(e) {
		if($("#all-tickets")){
    		$("#all-tickets").trigger("click");
    	}
	});
	Mousetrap.bind('alt+shift+f', function(e) {
		if($(".ticketid") && $(".ticketid").length > 0){
    		$($(".ticketid")[0]).focus();
    	}
	});

})();