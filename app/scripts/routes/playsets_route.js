KoaEmberPlayground.PlaysetsRoute = Ember.Route.extend({
  model: function() {
    return this.get('store').find('playset');
  }
});

