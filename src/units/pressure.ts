import { type Pressure } from '../types'
import converter from '../publicConverter'

const pressure: Pressure = {
  baseUnit: 'Pa',
  units: {
    Pa: {
      name: 'Pascal',
      convertValue: 1
    },
    kPa: {
      name: 'Kilopascal',
      convertValue: 1000 // Conversion factor from Pa to kPa
    },
    MPa: {
      name: 'Megapascal',
      convertValue: 1e6 // Conversion factor from Pa to MPa
    },
    bar: {
      name: 'Bar',
      convertValue: 1e5 // Conversion factor from Pa to Bar
    },
    atm: {
      name: 'Atmosphere',
      convertValue: 101325 // Standard atmospheric pressure in Pa
    },
    psi: {
      name: 'Pound per Square Inch',
      convertValue: 6894.76 // Conversion factor from Pa to psi
    },
    'kg/cm2': {
      name: 'Kilogram per Square Centimeter',
      convertValue: 98066.5 // Conversion factor from Pa to kg/cm²
    },
    Pag: {
      name: 'Pascal',
      convertValue: 1,
      offset: -1
    },
    kPag: {
      name: 'Kilopascal',
      convertValue: 1000,
      offset: -1 // Conversion factor from Pa to kPa
    },
    MPag: {
      name: 'Megapascal',
      convertValue: 1e6,
      offset: -1 // Conversion factor from Pa to MPa
    },
    barg: {
      name: 'Bar',
      convertValue: 1e5,
      offset: -1 // Conversion factor from Pa to Bar
    },
    atmg: {
      name: 'Atmosphere',
      convertValue: 101325,
      offset: -1 // Standard atmospheric pressure in Pa
    },
    psig: {
      name: 'Pound per Square Inch',
      convertValue: 6894.76,
      offset: -1 // Conversion factor from Pa to psi
    },
    'kg/cm2g': {
      name: 'Kilogram per Square Centimeter',
      convertValue: 98066.5,
      offset: -1 // Conversion factor from Pa to kg/cm²
    }
  }
}

export default converter(pressure)
