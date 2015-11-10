var BukiList = Backbone.Collection.extend({
  
  model: Buki,
  
  url: '/buki.json'
  
});