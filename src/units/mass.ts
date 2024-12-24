import { type Mass } from '../types'
import converter from '../publicConverter'

const mass: Mass = {
  baseUnit: 'kg',
  units: {
    kg: {
      name: 'Kilogram',
      convertValue: 1
    },
    g: {
      name: 'Gram',
      convertValue: 0.001 // Conversion factor from kg to g
    },
    lb: {
      name: 'Pound',
      convertValue: 0.453592 // Conversion factor from kg to lb
    },
    oz: {
      name: 'Ounce',
      convertValue: 0.0283495 // Conversion factor from kg to oz
    },
    ton: {
      name: 'Ton',
      convertValue: 1000 // Conversion factor from kg to ton
    }
    ,
    mg: {
      name: 'Miligram',
      convertValue: 1e-6
    }
  }
}

export default converter(mass)
