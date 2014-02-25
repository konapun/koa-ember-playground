/*global Ember*/
KoaEmberPlayground.Konapun = DS.Model.extend({
  manufacturer: DS.attr('string'),
  tags: DS.attr('string'),
  description: DS.attr('string'),
  image: DS.attr('string')
});

// probably should be mixed-in...
KoaEmberPlayground.Konapun.reopen({
  attributes: function(){
    var model = this;
    return Ember.keys(this.get('data')).map(function(key){
      return Em.Object.create({ model: model, key: key, valueBinding: 'model.' + key });
    });
  }.property()
});

// delete below here if you do not want fixtures
KoaEmberPlayground.Konapun.FIXTURES = [
  
  {
    id: 0,
    
  },
  
  {
    id: 1,
    
  }
  
];
