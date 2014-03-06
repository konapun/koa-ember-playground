KoaEmberPlayground.UsersCreateController = Ember.ObjectController.extend({
  actions: {
    create: function() {
      alert("Creating");
      var user = this.store.createRecord('user', this.get('model'));
      
      user.save();
      
      var buffer = user.get('attributes').map(function(attr) {
        alert("KEY: " + attr.get('key'));
        return {
          key: attr.get('key'),
          value: attr.get('value')
        };
      });
      
      this.set('buffer', buffer);
      this.transitionToRoute('user.edit', user); // display the view for the newly added user, using the new user as the model
    }
  }
});
