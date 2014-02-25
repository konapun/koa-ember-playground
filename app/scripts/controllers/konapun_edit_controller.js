KoaEmberPlayground.KonapunEditController = Ember.ObjectController.extend({
  needs: 'konapun',
  actions: {
    save: function(){
      self = this
      this.get('buffer').forEach(function(attr){
        self.get('controllers.konapun.model').set(attr.key, attr.value);
      });
      this.transitionToRoute('konapun',this.get('model'));
    }
  }
});

