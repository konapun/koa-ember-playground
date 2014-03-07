/*global Ember*/
KoaEmberPlayground.Playset = DS.Model.extend({});

// probably should be mixed-in...
KoaEmberPlayground.Playset.reopen({
  attributes: function(){
    var model = this;
    return Ember.keys(this.get('data')).map(function(key){
      return Em.Object.create({ model: model, key: key, valueBinding: 'model.' + key });
    });
  }.property()
});

// delete below here if you do not want fixtures
KoaEmberPlayground.Playset.FIXTURES = [
  
  {
    id: 0,
    
  },
  
  {
    id: 1,
    
  }
  
];
