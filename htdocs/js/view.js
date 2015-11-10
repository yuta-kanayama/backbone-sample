var View = Backbone.View.extend({
  
  el: '#buki',
  
  initialize: function(){
    _.bindAll(this, 'load', 'render', 'error', 'transition');
    
    this.template = {
      buki: _.template($('#base-template').html())
    }
    
    this.buki = new BukiList();
    this.load();
    
    this.router = new Router();
    Backbone.history.start();
  },
  
  load: function(){
    this.buki.fetch({
      dataType: 'json',
      success: this.render,
      error: this.error
    });
    return false;
  },
  
  render: function(){
    var html = '';
    this.buki.each(_.bind(function(model){
      html += this.template.buki(model.attributes);
    }, this));
    
    this.$el.html(html);
    this.$isotope = this.$el.isotope({
      itemSelector: '.buki-item',
      layoutMode: 'masonry',
      masonry: {
        gutter: 20
      }
    });
    
    this.router.on('transition', this.transition);
    
    return false;
  },
  
  error: function(a,b,c){
    console.log(a,b,c);
  },
  
  transition: function(id){
    this.$isotope.isotope({
      filter: '.' + id
    });
  }
  
});
