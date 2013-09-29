# Ember Trackr

This is the sample app for the book [Developing an Ember.js Edge][1]
published by [Bleeding Edge Press][2].

## Getting Started

Our development toolchain consists of [Ember Tools][3] and [Testem][4].
Install both with npm:

```sh
$ npm install ember-tools testem
```

Testem will watch all project files, rebuild the app, and run the test
suite automatically whenever it spots a change. Boot it with the
`testem` command and follow the displayed instructions:

```sh
$ testem
```

To preview the app, open `index.html` in your browser of choice:

```sh
$ open index.html
```

[1]: http://my.safaribooksonline.com/9781939902047
[2]: http://bleedingedgepress.com/
[3]: https://github.com/rpflorence/ember-tools
[4]: https://github.com/airportyh/testem
