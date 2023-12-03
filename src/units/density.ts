import { type Density } from '../types'
import converter from '../converter'

const density: Density = {
    baseUnit: 'kg/m3',
    units: {
        'kg/m3': {
            name: 'Kilogram per cubic meter',
            convertValue: 1
        },
        'lb/ft3': {
            name: 'Pound per cubic foot',
            convertValue: 0.0160185 // Conversion factor from kg/m3 to lb/ft3
        },
        'g/cm3': {
            name: 'Gram per cubic centimeter',
            convertValue: 0.001 // Conversion factor from kg/m3 to g/cm3
        },
        'kg/ft3': {
            name: 'Kilogram per cubic foot',
            convertValue: 1 / 16.0185 // Conversion factor from lb/ft3 to kg/ft3
        },
        'lb/m3': {
            name: 'Pound per cubic meter',
            convertValue: 0.0160185 / 1000 // Conversion factor from lb/ft³ to lb/m³
        }
    }
}

export default converter(density)
