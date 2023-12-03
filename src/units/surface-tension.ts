import { type SurfaceTension } from '../types'
import converter from '../publicConverter'

const surfaceTension: SurfaceTension = {
    baseUnit: 'N/m',
    units: {
        'N/m': {
            name: 'Newton per Meter',
            convertValue: 1
        },
        'dyn/cm': {
            name: 'Dyne per Centimeter',
            convertValue: 0.001 // Conversion factor from N/m to dyn/cm
        },
        'lbf/ft': {
            name: 'Pound-force per Foot',
            convertValue: 0.3048 // Conversion factor from N/m to lbf/ft
        },
        'mN/m': {
            name: 'Millinewton per Meter',
            convertValue: 0.001 // Conversion factor from N/m to mN/m
        }
    }
}

export default converter(surfaceTension)
