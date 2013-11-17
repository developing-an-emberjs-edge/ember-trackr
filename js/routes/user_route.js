var UserRoute = Ember.Route.extend({
  actions: {
    edit: function() {
      this.set('controller.isEditing', true);
    }
  }
});

module.exports = UserRoute;
