import { type Length } from '../types'
import converter from '../publicConverter'

const length: Length = {
    baseUnit: 'm',
    units: {
        m: {
            name: 'Meter',
            convertValue: 1
        },
        mm: {
            name: 'Millimeter',
            convertValue: 0.001 // Conversion factor from m to mm
        },
        cm: {
            name: 'Centimeter',
            convertValue: 0.01 // Conversion factor from m to cm
        },
        in: {
            name: 'Inch',
            convertValue: 0.0254 // Conversion factor from m to inch
        },
        ft: {
            name: 'Foot',
            convertValue: 0.3048 // Conversion factor from m to ft
        }
    }
}

export default converter(length)
