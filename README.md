# @anvilabs/flow-libdefs

Incomplete flow [library interface definitions](https://flow.org/en/docs/libdefs/) we use in our projects.

To install them, add the following to your `.flowconfig`:

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
