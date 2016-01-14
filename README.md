## angulartics-hubspot
[![NPM version][npm-image]][npm-url] [![NPM downloads][npm-downloads-image]][npm-downloads-url] [![Bower version][bower-image]][bower-url] [![MIT license][license-image]][license-url]

Hubspot plugin for [Angulartics](http://github.com/angulartics).

## Install
First make sure you've read installation and setup instructions for [Angulartics](http://angulartics.github.io/).

Then you can install this package either with `npm` or with `bower`.

### npm

```shell
npm install angulartics-hubspot
```

Then add `angulartics.hubspot` as a dependency for your app:

```javascript
require('angulartics')

angular.module('myApp', [
  'angulartics',
  require('angulartics-hubspot')
]);
```

### bower
```shell
bower install angulartics-hubspot
```

Add the `<script>` to your `index.html`:

```html
<script src="/bower_components/angulartics-hubspot/dist/angulartics-hubspot.min.js"></script>
```

Then add `angulartics.hubspot` as a dependency for your app:

```javascript
angular.module('myApp', [
  'angulartics',
  'angulartics.hubspot'
]);
```

## Documentation
Documentation is available on the [Angulartics site](http://luisfarzati.github.io/angulartics).

This plugin supports the following analytics calls:
```
registerPageTrack
registerEventTrack
registerSetUserProperties
```

## Development

```shell
npm run build
```

## License

[MIT](LICENSE)

[npm-image]: https://img.shields.io/npm/v/angulartics-hubspot.svg
[npm-url]: https://npmjs.org/package/angulartics-hubspot
[npm-downloads-image]: https://img.shields.io/npm/dm/angulartics-hubspot.svg
[npm-downloads-url]: https://npmjs.org/package/angulartics-hubspot
[bower-image]: https://img.shields.io/bower/v/angulartics-hubspot.svg
[bower-url]: http://bower.io/search/?q=angulartics-hubspot
[license-image]: http://img.shields.io/badge/license-MIT-blue.svg
[license-url]: LICENSE