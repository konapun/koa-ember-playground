KoaEmberPlayground.PlaysetEditController = Ember.ObjectController.extend({
  needs: 'playset',
  actions: {
    save: function(){
      self = this
      this.get('buffer').forEach(function(attr){
        self.get('controllers.playset.model').set(attr.key, attr.value);
      });
      this.transitionToRoute('playset',this.get('model'));
    }
  }
});

