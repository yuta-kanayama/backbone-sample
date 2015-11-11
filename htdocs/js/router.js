var Router = Backbone.Router.extend({
  
  routes: {
    '': 'index',
    ':id': 'category'
  },
  
  index: function(){
    // ハッシュなしでアクセスされたときの処理を書く
  },
  
  category: function(id){
    this.trigger('transition', id);
  }
  
});
