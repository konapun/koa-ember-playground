KoaEmberPlayground.UsersCreateController = Ember.ObjectController.extend({
  actions: {
    save: function() {
      var user = this.store.createRecord('user', this.get('model'));
      user.save();
      
      this.transitionToRoute('user', user);
    }
  }
});
