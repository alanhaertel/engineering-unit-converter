engineering-unit-converter
=============

A light and simple library for make all type measures conversions and manipulations.
Used [convert-units](https://github.com/ben-ng/convert-units) as a reference.

Installation
-----

```bash
npm engineering-unit-converter --save
```

Usage
-----

`engineering-unit-converter` uses TypeScript to infer the avalaible units, I strongly recommend to use TypeScript for make the dev experience better.

Using this library is simple, the above snippet shows a example:


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