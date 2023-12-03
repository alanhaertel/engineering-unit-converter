import { type PressureManometric } from '../types'
import converter from '../publicConverter'

const pressureManometric: PressureManometric = {
    baseUnit: 'Pa',
    units: {
        Pag: {
            name: 'Pascal',
            convertValue: 1
        },
        kPag: {
            name: 'Kilopascal',
            convertValue: 1000 // Conversion factor from Pa to kPa
        },
        MPag: {
            name: 'Megapascal',
            convertValue: 1e6 // Conversion factor from Pa to MPa
        },
        barg: {
            name: 'Bar',
            convertValue: 1e5 // Conversion factor from Pa to Bar
        },
        atmg: {
            name: 'Atmosphere',
            convertValue: 101325 // Standard atmospheric pressure in Pa
        },
        psig: {
            name: 'Pound per Square Inch',
            convertValue: 6894.76 // Conversion factor from Pa to psi
        },
        'kg/cm2g': {
            name: 'Kilogram per Square Centimeter',
            convertValue: 98066.5 // Conversion factor from Pa to kg/cm²
        }
    }
}

export default converter(pressureManometric)
