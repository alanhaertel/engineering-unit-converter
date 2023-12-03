engineering-unit-converter
=============

A light and simple library for make all type measures conversions and manipulations.
Used [convert-units](https://github.com/ben-ng/convert-units) as a reference.

Installation
-----

```bash
npm install engineering-unit-converter
```

Usage
-----

`engineering-unit-converter` uses TypeScript to infer the available units, I strongly recommend using it for making the dev experience better.

Using this library is simple, the above snippet shows an example:


```js
import { massFlow } from 'engineering-unit-converter'
const newValue = massFlow(65000).from('lb/day').to('kg/h')
console.log(newValue) //1.2284783333333333
```

Available units
-----

- acceleration
- area
- density
- electricCharge
- electricCurrent
- energy
- force
- length
- massFlow
- mass
- power
- pressureManometric
- pressure
- speed
- standardVolumetricFlow
- surfaceTension
- time
- viscosity
- voltage
- volume
- volumetricFlow