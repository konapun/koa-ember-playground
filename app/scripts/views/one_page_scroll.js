/*
 * Wrapper view for one page scroll 
 * (https://github.com/peachananr/onepage-scroll)
 */
KoaEmberPlayground.OnePageScroll = Ember.View.extend({
  attributes: ['sectionContainer', 'easing', 'animationTime', 'pagination', 'updateURL', 'beforeMove', 'afterMove', 'loop', 'keyboard', 'responsiveFallback'],
  events: ['scroll'],
  tagName: 'div',
  classNames: 'main',
  
  didInsertElement: function() {
    var self = this,
        options = {
          sectionContainer: "section",
          easing: "ease",
          animationTime: 1000,
          pagination: true,
          updateURL: false,
          keyboard: true
        };
    
    this.get('events').forEach(function(event) {
      if (self[event]) {
        options[event] = self[event];
      }
    });
    
    this.get('attributes').forEach(function(attr) {
      if (typeof self[attr] !== 'undefined') {
        options[attr] = self[attr];
      }
    });
    
    this.$().onepage_scroll(options);
  }
});
