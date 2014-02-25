KoaEmberPlayground.KonapunRoute = Ember.Route.extend({
  model: function(params) {
    return this.get('store').find('konapun', params.konapun_id);
  }
});

