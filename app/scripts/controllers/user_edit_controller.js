KoaEmberPlayground.UserEditController = Ember.ObjectController.extend({
  needs: 'user',
  deleteMode: false,
  actions: {
  
    save: function() { // save edits
      self = this;
      this.get('buffer').forEach(function(attr){
        self.get('controllers.user.model').set(attr.key, attr.value);
      });
      this.transitionToRoute('user', this.get('model'));
    },
    
    delete: function() { // display delete confirmation
      this.toggleProperty('deleteMode'); 
      alert("Delete mode? " + this.get('deleteMode'));
      alert("MODEL: " + this.get('model'));
    },
    
    cancelDelete: function() {
      this.set('deleteMode', false);
    },
    
    confirmDelete: function() {
      var model = this.get('model');
      
      model.deleteRecord();
      model.save();
      this.transitionToRoute('users', model);
      this.set('deleteMode', false);
    }
  }
});

