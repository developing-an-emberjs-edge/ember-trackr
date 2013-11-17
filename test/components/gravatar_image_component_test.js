module('GravatarImageComponent');

test('src with valid email', function() {
  var component = App.GravatarImageComponent.create({
    email: 'tom@example.com'
  });

  equal(component.get('src'),
        'http://www.gravatar.com/avatar/e4f7cd8905e896b04425b1d08411e9fb.jpg?s=80');
});

test('src with blank email', function() {
  var component = App.GravatarImageComponent.create({
    email: ''
  });

  equal(component.get('src'),
        'http://www.gravatar.com/avatar/00000000000000000000000000000000.jpg?s=80');
});
