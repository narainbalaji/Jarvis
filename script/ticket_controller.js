(function(){

  window.TicketController = function(ticketStore){
    var self=this;
    this.showingUnread = false;
    this.ticketStore = ticketStore;
    /*Add click handler*/
	  $("body").click(function(e){
      var parent = null;
        if($(e.target).parent('li').length > 0){
          parent = $(e.target).parent('li');
        }else if("LI" === e.target.nodeName){
          parent = $(e.target);
        }
  	  	if(parent){
          var ticket = self.ticketStore.get($("a", parent).text())
          if(ticket){
            if(self.showingUnread){
              self.markAsRead(self.element, ticket);
              destroy(parent);
            }
            chrome.tabs.create({
              'url': localStorage["jarvis.ticketUrl"] + ticket.id,
              'active': false
            });
          }
  	  	}
	  });	
  };

  function destroy(ticketItem) {
    $(ticketItem).remove();
  }

  function showTicket(section, ticket){
    var template = $("#ticket-template li").clone();
    template.append(ticket.shortDescription);
    template.appendTo($('ul', section));
    $("a", template).text(ticket.id);
  }

  function updateTicketHeading(section, title, count){
    $("#ticket-list-heading", section).text(title + " (" + count + ")");
  }

  window.TicketController.prototype = {
  	add: function(ticket){
      this.ticketStore.add(ticket);
  	},
    showUnreadTickets: function(section){
      this.showingUnread = true;
      $("ul", section).empty();
      unreadTickets = this.ticketStore.getUnreadTickets();
      updateTicketHeading(section, "Unread Tickets", unreadTickets.length);
      for(var i=0; i<unreadTickets.length;i++){
        showTicket(section, unreadTickets[i]);
      }
    },
    showAllTickets: function(section){
      this.showingUnread = false;
      var allTickets = this.ticketStore.getAll();
      updateTicketHeading(section, "All Tickets", allTickets.length);
      $("ul", section).empty();
      for(var i=0; i<allTickets.length;i++){
        showTicket(section, allTickets[i]);
      }
    },
    markAsRead: function(section, ticket){
      this.ticketStore.markAsRead(ticket);
      unreadTickets = this.ticketStore.getUnreadTickets();
      updateTicketHeading(section, "Unread Tickets", unreadTickets.length);
    }
  };

})();
