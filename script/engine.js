(function(){

	/*Add tickets*/
	window.ticketController = new window.TicketController();
	window.viewController = new window.ViewController($("#sev3"), window.ticketController);
	window.viewController.show();

})();