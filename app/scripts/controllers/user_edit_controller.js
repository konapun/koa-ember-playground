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
    }
  }
});

