var User = DS.Model.extend({
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),

  displayName: function() {
    return this.get('firstName') + ' ' + this.get('lastName');
  }.property('firstName', 'lastName')
});

module.exports = User;
