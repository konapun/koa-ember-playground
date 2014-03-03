KoaEmberPlayground.Store = DS.Store.extend({
  adapter: DS.FixtureAdapter
});
KoaEmberPlayground.ApplicationAdapter = DS.FixtureAdapter; // for now, use fixtures to fetch data. This will be changed to a RESTAdapter (http://emberjs.com/api/data/classes/DS.RESTAdapter.html) once the server API is in place
