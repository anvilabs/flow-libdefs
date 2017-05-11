# @anvilabs/flow-libdefs

[![Build Status](https://img.shields.io/travis/anvilabs/flow-libdefs.svg)](https://travis-ci.org/anvilabs/flow-libdefs)
[![Version](https://img.shields.io/npm/v/@anvilabs/flow-libdefs.svg)](http://npm.im/@anvilabs/flow-libdefs)
[![devDependency Status](https://img.shields.io/david/dev/anvilabs/flow-libdefs.svg)](https://david-dm.org/anvilabs/flow-libdefs?type=dev)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

Incomplete flow [library interface definitions](https://flow.org/en/docs/libdefs/) we use in our projects.

## Installation

First, install the package by running:

```bash
$ yarn add @anvilabs/flow-libdefs --dev
# or
$ npm install @anvilabs/flow-libdefs --save-dev
```

Then add the following to your `.flowconfig`:

```ini
...
[libs]
node_modules/@anvilabs/flow-libdefs/definitions/
...
```

Alternatively, add definitions for each library separately:

```ini
...
[libs]
node_modules/@anvilabs/flow-libdefs/definitions/lodash.js
node_modules/@anvilabs/flow-libdefs/definitions/recompact.js
...
```

## Contributing

Pull requests for existing interfaces are welcome. If you plan on adding a new one, please contribute to https://github.com/flowtype/flow-typed.

## License

[MIT License](./LICENSE) © Anvilabs LLC
