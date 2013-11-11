var App = require('./app');

App.Router.map(function() {
  this.resource('tickets', function() {
    this.resource('ticket', { path: ':ticket_id' });
    this.route('new');
  });
  this.resource('users', function() {
    this.resource('user', { path: ':user_id' });
  });
});
