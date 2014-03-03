KoaEmberPlayground.UsersController = Ember.ArrayController.extend({
  sortProperties: ['name'],
  sortAscending: true,
  
  /*
   * Computed property for returning the number of users in the collection
   */
  usersCount: function() {
    return this.get('model.length');
  }.property('@each') // watch for changes to this controller's model
});

