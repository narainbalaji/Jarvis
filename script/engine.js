(function(){

	/*Add tickets*/
	window.ticketController = new TicketController();

	(function fetchTickets(){
		window.ticketController.add($("#sev3 ul"), {ticketId: "Ticket Id 4", shortDescription: "Short Description"});
	})();

})();