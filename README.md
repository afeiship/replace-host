# replace-host
> Replace host to the other.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm install @jswork/replace-host
```

## usage
```js
import replaceHost from '@jswork/replace-host';

const url1 = 'https://aot-report-h5.dev.com/offline_asc_mobile?task_id=16807';
const url2 = 'https://sandbox-aot-report-h5.dev.com';

replaceHost(url1, url2);
// https://sandbox-aot-report-h5.dev.com/offline_asc_mobile?task_id=16807
```

## license
Code released under [the MIT license](https://github.com/afeiship/replace-host/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/replace-host
[version-url]: https://npmjs.org/package/@jswork/replace-host

[license-image]: https://img.shields.io/npm/l/@jswork/replace-host
[license-url]: https://github.com/afeiship/replace-host/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/replace-host
[size-url]: https://github.com/afeiship/replace-host/blob/master/dist/replace-host.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/replace-host
[download-url]: https://www.npmjs.com/package/@jswork/replace-host
