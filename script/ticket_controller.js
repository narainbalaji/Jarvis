(function(){

  window.TicketController = function(){
	  this.tickets = [];
    var self=this;
    this.showingUnread = false;
    /*Add click handler*/
	  $("body").click(function(e){
      if(self.showingUnread){
  	  	var parent = null;
        if($(e.target).parent('li').length > 0){
          parent = $(e.target).parent('li');
        }else if("LI" === $(e.target).nodeName){
          parent = $(e.target);
        }
  	  	if(parent){
          var ticket = findById($("a", parent).text(), self.tickets);
          if(ticket){
            self.markAsRead(ticket);
            chrome.tabs.create({
              'url': localStorage["jarvis.ticketUrl"] + ticket.id,
              'active': false
            });
          }
  	  	}
      }
	  });	
  };

  function findById(id, tickets){
    for(var i=0; i<tickets.length; i++){
      if(id===tickets[i].id){
        return tickets[i];
      }
    }
  }

  function showTicket(section, ticket){
    var template = $("#ticket-template li").clone();
    template.append(ticket.shortDescription);
    template.appendTo($('ul', section));
    $("a", template).text(ticket.id);
  }

  function getUnreadTickets(tickets){
    var result = [];
    for(var i=0; i<tickets.length; i++){
      if(!localStorage[tickets[i].id] || JSON.parse(localStorage[tickets[i].id]).modifiedDate !== tickets[i].modifiedDate){
        result.push(tickets[i]);
      }
    }
    return result;
  }

  window.TicketController.prototype = {
  	add: function(ticket){
      this.tickets.push(ticket);
  	},
    showUnreadTickets: function(section){
      this.showingUnread = true;
      $("ul", section).empty();
      unreadTickets = getUnreadTickets(this.tickets);
      $("#ticket-list-heading", section).text("Unread Tickets (" + unreadTickets.length +")");
      for(var i=0; i<unreadTickets.length;i++){
        showTicket(section, unreadTickets[i]);
      }
    },
    showAllTickets: function(section){
      this.showingUnread = false;
      $("#ticket-list-heading", section).text("All Tickets (" + this.tickets.length +")");
      $("ul", section).empty();
      for(var i=0; i<this.tickets.length;i++){
        showTicket(section, this.tickets[i]);
      }
    },
    markAsRead: function(ticket){
      localStorage[ticket.id] = JSON.stringify(ticket);
    }
  };

})();
