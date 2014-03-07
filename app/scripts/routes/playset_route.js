KoaEmberPlayground.PlaysetRoute = Ember.Route.extend({
  model: function(params) {
    return this.get('store').find('playset', params.playset_id);
  }
});

