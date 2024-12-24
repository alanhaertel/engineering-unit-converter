import { type PressurePerLength } from '../types';
import converter from '../publicConverter';

const pressurePerLength: PressurePerLength = {
  baseUnit: 'Pa/m',
  units: {
    'Pa/m': {
      name: 'Pascal per Meter',
      convertValue: 1,
    },
    'Pa/km': {
      name: 'Pascal per Kilometer',
      convertValue: 1 / 1000, // 1 km = 1000 m
    },
    'kPa/m': {
      name: 'Kilopascal per Meter',
      convertValue: 1000, // 1 kPa = 1000 Pa
    },
    'kPa/km': {
      name: 'Kilopascal per Meter',
      convertValue: 1,
    },
    'bar/m': {
      name: 'Bar per Meter',
      convertValue: 1e5, // 1 bar = 100,000 Pa
    },
    'bar/km': {
      name: 'Bar per Kilometer',
      convertValue: 100, // 1 bar/km = 1e5 Pa / 1000 m
    },
    'psi/ft': {
      name: 'Pound per Square Inch per Foot',
      convertValue: 6894.76 / 3.28084, // 1 psi = 6894.76 Pa, 1 ft = 0.3048 m
    },
    'psi/m': {
      name: 'Pound per Square Inch per Meter',
      convertValue: 6894.76, // 1 psi = 6894.76 Pa
    },
    'atm/m': {
      name: 'Atmosphere per Meter',
      convertValue: 101325, // 1 atm = 101325 Pa
    },
    'atm/km': {
      name: 'Atmosphere per Kilometer',
      convertValue: 101.325, // 1 atm/km = 101325 Pa / 1000 m
    },
    'kg/cm2/m': {
      name: 'Kilogram per Square Centimeter per Meter',
      convertValue: 98066.5, // 1 kg/cm² = 98066.5 Pa
    },
    'kg/cm2/km': {
      name: 'Kilogram per Square Centimeter per Kilometer',
      convertValue: 98.0665, // 1 kg/cm² = 98066.5 Pa / 1000 m
    },

    // Gauge Units with Atmospheric Offset
    'barg/m': {
      name: 'Bar Gauge per Meter',
      convertValue: 1e5,
      offset: -101325, // Remove atmospheric pressure
    },
    'psig/ft': {
      name: 'Pound per Square Inch Gauge per Foot',
      convertValue: 6894.76 / 3.28084,
      offset: -101325, // Remove atmospheric pressure in Pa
    },
    'psig/m': {
      name: 'Pound per Square Inch Gauge per Meter',
      convertValue: 6894.76,
      offset: -101325, // Remove atmospheric pressure in Pa
    },
    'kg/cm2g/m': {
      name: 'Kilogram per Square Centimeter Gauge per Meter',
      convertValue: 98066.5,
      offset: -101325, // Remove atmospheric pressure in Pa
    },
    'kg/cm2g/km': {
      name: 'Kilogram per Square Centimeter Gauge per Kilometer',
      convertValue: 98.0665,
      offset: -101.325, // Remove atmospheric pressure divided by 1000
    },
  },
};

export default converter(pressurePerLength);
