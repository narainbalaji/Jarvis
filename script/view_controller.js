(function(){

  window.ViewController = function(element, ticketController){
	 this.ticketController = ticketController;
	 this.element = element;
  }

  function getTickets(data){
    var tickets = [];
    var entries = data.getElementsByTagName('entry');
    for(var i=0; i < entries.length; i++){
      var ticket = {
        id: $(entries[i].getElementsByTagName('title')[0]).text(),
        shortDescription: $(entries[i].getElementsByTagName('summary')[0]).text(),
        modifiedDate: $(entries[i].getElementsByTagName('updated')[0]).text()
      }
      tickets.push(ticket);
    }
    return tickets;
  }

  window.ViewController.prototype = {
  	show: function(){
  		var self = this;
  		/*Fetch tickets*/
  		$.ajax({
  			url: localStorage["jarvis.url"],
  			type: 'GET',
        data: {
          'phrase_search_text': localStorage["jarvis.login"]
        },
  			username: localStorage["jarvis.username"],
  			password: localStorage["jarvis.password"], 
  			success: function(data){
          var tickets = getTickets(data);
          for(var i=0; i < tickets.length; i++){
            self.ticketController.add(tickets[i]); 
          }
  			}
  		});
      self.ticketController.showUnreadTickets(self.element);
  	},
    showUnreadTickets: function(){
      this.ticketController.showUnreadTickets(this.element);
    },
    showAllTickets: function(){
      this.ticketController.showAllTickets(this.element);
    }
  }
})();

