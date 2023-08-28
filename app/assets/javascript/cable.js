(function(){
this.app || (this.app = {});
App.cable = ActionCable.createconsumer($('meta[name_action_cable_url]').attr('content'));

});call(this);