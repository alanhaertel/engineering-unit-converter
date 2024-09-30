import { type Torque } from '../types'
import converter from '../publicConverter'

const torque: Torque = {
  baseUnit: 'N/m',
  units: {
    'N/m': {
      name: 'Newton per Meter',
      convertValue: 1
    },
    'dyn/cm': {
      name: 'Dyne per Centimeter',
      convertValue: 0.001
    },
    'lbf/ft': {
      name: 'Pound-force per Foot',
      convertValue: 14.5939
    },
    'mN/m': {
      name: 'Millinewton per Meter',
      convertValue: 0.001
    },
    'lbf/in': {
      name: 'Pound-force per Inch',
      convertValue: 175.126836
    },
    'ozf/in': {
      name: 'Ounce-force per Inch',
      convertValue: 10.945427
    }
  }
}

export default converter(torque)
