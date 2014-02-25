KoaEmberPlayground.Router.map(function () {
  
  this.resource('index', {path: '/'});
  this.resource('konapun', {path: '/konapun/:konapun_id'});
  this.resource('konapun_edit', {path: '/konapun/new'});
  
});
