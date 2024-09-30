import { Temperature } from "../types"
import converter from '../publicConverter'

const temperature: Temperature = {
  baseUnit: 'C',
  units: {
    'C': {
      name: 'Celsius',
      convertValue: 1,
      offset: 0
    },
    'F': {
      name: 'Fahrenheit',
      convertValue: 5 / 9, // Inverse of 9/5
      offset: +32
    },
    'K': {
      name: 'Kelvin',
      convertValue: 1,
      offset: 273.15 // Subtract 273.15 to convert from K to C
    }
  }
}

export default converter(temperature)
