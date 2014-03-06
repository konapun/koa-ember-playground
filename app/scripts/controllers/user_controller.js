KoaEmberPlayground.UserController = Ember.ObjectController.extend({
  deleteMode: false,
  actions: {
    
    edit: function() { // handle edits in edit route
      this.transitionToRoute('user.edit');
    },
    
    delete: function() {
      this.toggleProperty('deleteMode');
    },
    
    confirmDelete: function() {
      var model = this.get('model');
      
      model.deleteRecord();
      model.save();
      this.transitionToRoute('users');
    },
    
    cancelDelete: function() {
      this.set('deleteMode', false);
    }
  }
});
