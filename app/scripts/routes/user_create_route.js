KoaEmberPlayground.UsersCreateRoute = Ember.Route.extend({
  model: function() {
    return Em.Object.create({}); // empty model for this route
  },
  renderTemplate: function() { // reuse the edit template using the usersCreate controller
    this.render('user.edit', {
      controller: 'usersCreate'
    });
  }
});
