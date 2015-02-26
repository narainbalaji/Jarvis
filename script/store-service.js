(function(){

	window.TicketStore = function(){
		this.prefix = "jarvis.ticket.";
	};

	window.TicketStore.prototype = {
		add: function(ticket){
			var existingTicket = this.get(ticket.id);
			ticket.lastReadDate = (existingTicket) ? existingTicket.lastReadDate : null;
			localStorage[this.prefix + ticket.id] = JSON.stringify(ticket);
		},
		get: function(id){
			var ticket = localStorage[this.prefix + id.replace(this.prefix, "")];
			return (ticket)? JSON.parse(ticket): ticket;
		},
		getAll: function(){
			var result = [];
			for(var i=0; i < localStorage.length; i++){
				var itemKey = localStorage.key(i);
				if(itemKey.indexOf(this.prefix) >=0){
					result.push(this.get(itemKey));
				}
			}
			return result;
		},
		getUnreadTickets: function(){
			var result = [];
			for(var i=0; i < localStorage.length; i++){
				var itemKey = localStorage.key(i);
				if(itemKey.indexOf(this.prefix) >=0){
					var ticket = this.get(itemKey);
					if(ticket){
						if(!ticket.lastReadDate || (ticket.modifiedDate !== ticket.lastReadDate)){
							result.push(ticket);	
						}
					}
				}
			}
			return result;
		},
		markAsRead: function(ticket){
			ticket.lastReadDate = ticket.modifiedDate;
			localStorage[this.prefix + ticket.id] = JSON.stringify(ticket);
		}
	};

})();