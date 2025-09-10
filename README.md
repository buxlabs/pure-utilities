# pure-utilities

[![npm](https://img.shields.io/npm/v/pure-utilities.svg)](https://www.npmjs.com/package/pure-utilities)
[![build](https://github.com/buxlabs/pure-utilities/actions/workflows/nodejs.yml/badge.svg)](https://github.com/buxlabs/pure-utilities/actions/workflows/nodejs.yml)

> A set of pure functions.

## Table of Contents

- [Background](#background)
- [Install](#install)
- [Usage](#usage)
- [Maintainers](#maintainers)
- [Contributing](#contributing)
- [License](#license)

## Background

A pure function is a function that given the same input will give you the same output. It also does not have any side effects. The library contains many pure functions, which by design, do not depend on other non built-in functions. This limitation makes it simpler to consume the functions for inlining (e.g. by bundlers or compilers).

## Install

`npm install pure-utilities`

## Usage

```javascript
import { flatten } from "pure-utilities/object";
console.log(flatten({ hello: { world: "1234" } })); // { 'hello.world': '1234' }
```

## Maintainers

[@emilos](https://github.com/emilos)

## Contibuting

All contributions are highly appreciated. Please feel free to open new issues and send PRs. All new function names need to be lowercased and independent on other non built-in functions. Please consider updating the docs and fixtures as a part of the PRs.

## License

MIT
