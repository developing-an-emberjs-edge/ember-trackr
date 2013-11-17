var md5 = require('../vendor/md5').md5;

var User = DS.Model.extend({
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  email: DS.attr('string'),

  displayName: function() {
    return this.get('firstName') + ' ' + this.get('lastName');
  }.property('firstName', 'lastName')
});

User.FIXTURES = [{
  id: 1,
  firstName: 'Yehuda',
  lastName: 'Katz',
  email: 'wycats@gmail.com'
}, {
  id: 2,
  firstName: 'Tom',
  lastName: 'Dale',
  email: 'tom@tomdale.net'
}];

module.exports = User;
