var ApplicationController = Ember.Controller.extend({
  currentYear: function() {
    return new Date().getFullYear();
  }.property()
});

module.exports = ApplicationController;

