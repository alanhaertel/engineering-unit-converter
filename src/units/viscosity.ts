import { type Viscosity } from '../types'
import converter from '../publicConverter'

const viscosity: Viscosity = {
    baseUnit: 'cP',
    units: {
        cP: {
            name: 'Centipoise',
            convertValue: 1
        },
        Pas: {
            name: 'Pascal second',
            convertValue: 1 / 0.001
        },
        'lb/fts': {
            name: 'Pound per second-foot',
            convertValue: 1 / 0.000671968994813
        },
        'kg/ms': {
            name: 'Kilogram per meter-second-hour',
            convertValue: 1 / 0.001
        },
        'lb/fth': {
            name: 'Pound per hour-foot',
            convertValue: 1 / 2.4190883105
        },
        'kg/mh': {
            name: 'Kilogram per meter-second-meter',
            convertValue: 1 / 3.6
        }
    }
}

export default converter(viscosity)
