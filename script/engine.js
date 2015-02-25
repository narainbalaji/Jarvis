(function(){

	/*Add tickets*/
	window.ticketController = new window.TicketController();
	window.viewController = new window.ViewController($("#ticket-list"), window.ticketController);
	window.viewController.show();

    /*Registering event listeners*/
  	$("#unread-tickets").click(function(){
    	window.viewController.showUnreadTickets();
  	})
  	$("#all-tickets").click(function(){
    	window.viewController.showAllTickets();
  	})

})();