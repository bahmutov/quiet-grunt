# quiet-grunt

> Limit grunt output to dots if everything goes well. On error print dump everything.

[![NPM info][nodei.co]](https://npmjs.org/package/quiet-grunt)

[![dependencies][dependencies-image]][dependencies-url]
[![endorse][endorse-image]][endorse-url]

Default Grunt output is way too verbose. *quiet-grunt* replaces each message with single dot.
It looks like this everything goes well `....`. If there is an error, entire output is dumped.

## Install

```shell
npm install quiet-grunt --save-dev
```

Once the plugin has been installed, load it at the beginning of the gruntfile.

```js
require('quiet-grunt');

module.exports = function (grunt) {
...
```

To skip plugin and use the default reporting, use command line argument `--no-quiet`

Inspired by [time-grunt](https://github.com/sindresorhus/time-grunt)

## Small print

Author: Gleb Bahmutov &copy; 2014
[@bahmutov](https://twitter.com/bahmutov) [glebbahmutov.com](http://glebbahmutov.com)

License: MIT - do anything with the code, but don't blame me if it does not work.

Spread the word: tweet, star on github, etc.

Support: if you find any problems with this module, email / tweet / open issue on Github

[ci-image]: https://travis-ci.org/bahmutov/quiet-grunt.png?branch=master
[ci-url]: https://travis-ci.org/bahmutov/quiet-grunt
[nodei.co]: https://nodei.co/npm/quiet-grunt.png?downloads=true
[dependencies-image]: https://david-dm.org/bahmutov/quiet-grunt.png
[dependencies-url]: https://david-dm.org/bahmutov/quiet-grunt
[endorse-image]: https://api.coderwall.com/bahmutov/endorsecount.png
[endorse-url]: https://coderwall.com/bahmutov
