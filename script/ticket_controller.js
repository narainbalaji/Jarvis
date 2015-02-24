(function(){

  window.TicketController = function(){
	  /*Add click handler*/
	  $("body").click(function(e){
	  	var parent = $("section li", e.target);
	  	if(parent){

	  	}
	  });	
  }

  window.TicketController.prototype = {
  	add: function(section, ticket){
  		var template = $("#ticket-template li").clone();
  		template.append(ticket.shortDescription);
  		template.appendTo(section);
  		$("a", template).text(ticket.ticketId);
  	}
  }

})();
