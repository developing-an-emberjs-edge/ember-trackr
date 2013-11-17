var UserRoute = Ember.Route.extend({
  actions: {
    edit: function() {
      this.set('controller.isEditing', true);
    },

    done: function() {
      this.set('controller.isEditing', false);
      this.modelFor('user').save();
    }
  }
});

module.exports = UserRoute;
