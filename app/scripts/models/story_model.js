/*global Ember*/
KoaEmberPlayground.Story = DS.Model.extend({
  url: DS.attr('string'),
  tags: DS.attr('string'),
  fullname: DS.attr('string'),
  title: DS.attr('string'),
  excerpt: DS.attr('string'),
  submittedOn: DS.attr('date')
});

// probably should be mixed-in...
KoaEmberPlayground.Story.reopen({
  attributes: function(){
    var model = this;
    return Ember.keys(this.get('data')).map(function(key){
      return Em.Object.create({ model: model, key: key, valueBinding: 'model.' + key });
    });
  }.property()
});

// delete below here if you do not want fixtures
KoaEmberPlayground.Story.FIXTURES = [
  
  {
    id: 0,
    
  },
  
  {
    id: 1,
    
  }
  
];
