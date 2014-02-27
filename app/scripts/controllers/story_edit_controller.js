KoaEmberPlayground.StoryEditController = Ember.ObjectController.extend({
  needs: 'story',
  actions: {
    save: function(){
      self = this
      this.get('buffer').forEach(function(attr){
        self.get('controllers.story.model').set(attr.key, attr.value);
      });
      this.transitionToRoute('story',this.get('model'));
    }
  }
});

