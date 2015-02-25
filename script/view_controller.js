(function(){

  window.ViewController = function(element, ticketController){
	this.ticketController = ticketController;
	this.element = element;
  }

  window.ViewController.prototype = {
  	show: function(){
  		var self = this;
  		/*Fetch tickets*/
  		$.ajax({
  			url: localStorage["jarvis.url"],
  			type: 'GET',
  			username: localStorage["jarvis.username"],
  			password: localStorage["jarvis.password"], 
  			success: function(data){
  				self.ticketController.add(self.element, {
  					'id' : $(data.getElementsByTagName('id')[0]).text(),
  					'shortDescription': $(data.getElementsByTagName('title')[0]).text()
  				});
  			}
  		});
  	}
  }

})();

