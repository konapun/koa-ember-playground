KoaEmberPlayground.Router.map(function () {
  
  // /konapun/playsets
  this.resource('konapun', function() {
    this.resource('playsets', function(){
      this.resource('playset', { path: '/:playset_id' }, function(){
        this.route('edit');
      });
      this.route('create');
    });
  });
  
  // /users
  this.resource('users', function(){
    this.resource('user', { path: '/:user_id' }, function(){
      this.route('edit');
    });
    this.route('create');
  });
  
});
