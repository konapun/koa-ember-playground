KoaEmberPlayground.UsersCreateRoute = Ember.Route.extend({
  model: function() {
    return Em.Object.create({});
  },
  renderTemplate: function() { // reuse the edit template using the usersCreate controller
    this.render('user.edit', {
      controller: 'usersCreate'
    });
  }
});
