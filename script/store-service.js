(function(){

	window.TicketStore = function(){
		this.prefix = "jarvis.ticket.";
		this.tickets = [];
	};

	window.TicketStore.prototype = {
		add: function(ticket){
			this.tickets.push(ticket);
		},
		get: function(id){
			for(var i=0; i<this.tickets.length; i++){
				if(this.tickets[i].id===id){
					return this.tickets[i];
				}
			}
		},
		getAll: function(){
			return this.tickets;
		},
		getUnreadTickets: function(){
			var result = [];
			for(var i=0; i < this.tickets.length; i++){
				var storedItem = localStorage[this.prefix + this.tickets[i].id];
				var storedObject = (storedItem)? JSON.parse(storedItem): null;
				if(!storedObject || storedObject.modifiedDate !== this.tickets[i].modifiedDate){
					result.push(this.tickets[i]);
				}
			}
			return result;
		},
		markAsRead: function(ticket){
			localStorage[this.prefix + ticket.id] = JSON.stringify(ticket);
		}
	};

})();