import { type Density } from '../types'
import converter from '../publicConverter'

const density: Density = {
    baseUnit: 'kg/m3',
    units: {
        'kg/m3': {
            name: 'Kilogram per cubic meter',
            convertValue: 1
        },
        'lb/ft3': {
            name: 'Pound per cubic foot',
            convertValue: 1 / 0.062427962
        },
        'g/cm3': {
            name: 'Gram per cubic centimeter',
            convertValue: 0.001
        },
        'kg/ft3': {
            name: 'Kilogram per cubic foot',
            convertValue: 1 / 0.0283168
        },
        'lb/m3': {
            name: 'Pound per cubic meter',
            convertValue: 1 / 2.20462
        }
    }
}

export default converter(density)
