/*global Ember*/
KoaEmberPlayground.User = DS.Model.extend({
  name: DS.attr(),
  email: DS.attr(),
  tagline: DS.attr(),
  websiteURL: DS.attr()
});

// probably should be mixed-in...
KoaEmberPlayground.User.reopen({
  attributes: function(){
    var model = this;
    return Ember.keys(this.get('data')).map(function(key){
      return Em.Object.create({ model: model, key: key, valueBinding: 'model.' + key });
    });
  }.property()
});

// sample data to use in place of server-supplied values
KoaEmberPlayground.User.FIXTURES = [{
    id: 0,
    name: "Gary Coleman",
    email: "test.email@gmail.com",
    tagline: "Whatchu talkin' bout, Willis?",
    websiteURL: "http://www.google.com"
  },
  {
    id: 1,
    name: "Tommy Wiseau",
    email: "theroomguy@gmail.com",
    tagline: "You're tearing me apart, Lisa!",
    websiteURL: "http://www.theroommovie.com"
  }
];
