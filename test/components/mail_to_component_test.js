module('MailToComponent');

test('href', function() {
  var component = App.MailToComponent.create({
    email: 'test@example.com'
  });

  equal(component.get('href'),
        'mailto:test@example.com');
});
