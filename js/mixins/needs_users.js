var NeedsUsers = Ember.Mixin.create({
  needs: ['users'],
  users: Ember.computed.oneWay('controllers.users'),

  creatorId: function(key, value) {
    if (arguments.length === 1) {
      return this.get('creator.id');
    } else {
      var user = this.get('users').findBy('id', value);
      this.set('creator', user);
    }
  }.property('creator.id'),

  assigneeId: function(key, value) {
    if (arguments.length === 1) {
      return this.get('assignee.id');
    } else {
      var user = this.get('users').findBy('id', value);
      this.set('assignee', user);
    }
  }.property('assignee.id')
});

module.exports = NeedsUsers;
