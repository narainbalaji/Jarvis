(function(){

	/*Dependency injection*/
	window.ticketStore = new window.TicketStore();
  window.ticketController = new window.TicketController(window.ticketStore);
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