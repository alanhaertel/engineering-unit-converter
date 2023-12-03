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
            convertValue: 0.001 // Conversion factor from cP to Pa·s
        },
        'lb·ft/s·h': {
            name: 'Pound-foot per second-hour',
            convertValue: 2.41909e-7 // Conversion factor from cP to lb·ft/s·h
        },
        'kg/m·s·h': {
            name: 'Kilogram per meter-second-hour',
            convertValue: 0.001 / 3600 // Conversion factor from cP to kg/m·s·h
        },
        'lb·ft/s·ft': {
            name: 'Pound-foot per second-foot',
            convertValue: 2.41909e-7 / 3600 // Conversion factor from cP to lb·ft/s·ft
        },
        'kg/m·s·m': {
            name: 'Kilogram per meter-second-meter',
            convertValue: 0.001 / 3600 / 3600 // Conversion factor from cP to kg/m·s·m
        }
    }
}

export default converter(viscosity)
