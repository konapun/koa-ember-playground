KoaEmberPlayground.StoryEditRoute = Ember.Route.extend({
  model: function(params) {
    alert("Model: " + this.modelFor('story'));
    return this.get('store').find('story', this.modelFor('story').id);
  },
  setupController: function(controller, model){
    controller.set('model', model);
    buffer = model.get('attributes').map(function(attr){
      return { key: attr.get('key'), value: attr.get('value') }
    });
    controller.set('buffer', buffer)
  }
});

