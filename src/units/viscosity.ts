import { type Viscosity } from '../types'
import converter from '../publicConverter'

const viscosity: Viscosity = {
    baseUnit: 'cP',
    units: {
        cP: {
            name: 'Centipoise',
            convertValue: 1
        },
        Pa·s: {
            name: 'Pascal second',
            convertValue: 1 / 0.001
        },
        'lb/ft·s': {
            name: 'Pound per second-foot',
            convertValue: 1 / 0.000671968994813
        },
        'kg/m·s': {
            name: 'Kilogram per meter-second-hour',
            convertValue: 1 / 0.001
        },
        'lb/ft·h': {
            name: 'Pound per hour-foot',
            convertValue: 1 / 2.4190883105
        },
        'kg/m·h': {
            name: 'Kilogram per meter-second-meter',
            convertValue: 1 / 3.6
        }
    }
}

export default converter(viscosity)
