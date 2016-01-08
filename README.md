## angulartics-hubspot

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

> Please note that core Angulartics doesn't export the name yet, but it will once we move it into [the new organization](http://github.com/angulartics).

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

## Documentation


## Development

```shell
npm run build
```

## License

[MIT](LICENSE)
