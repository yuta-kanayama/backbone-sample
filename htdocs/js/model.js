var Buki = Backbone.Model.extend({
  
  defaults: function(){
    return {
      category: '',
      name: '',
      range: 0,
      power: 0,
      speed: 0,
      rapid: 0,
      weight: 0,
      mobility: 0,
      imageS: '',
      imageL: ''
    }
  }
  
});
