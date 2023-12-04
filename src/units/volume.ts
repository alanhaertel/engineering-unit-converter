import { type Volume } from '../types'
import converter from '../publicConverter'

const volume: Volume = {
    baseUnit: 'm3',
    units: {
        m3: {
            name: 'Cubic Meter',
            convertValue: 1
        },
        liter: {
            name: 'Liter',
            convertValue: 0.001
        },
        cm3: {
            name: 'Cubic Centimeter',
            convertValue: 1e-6
        },
        mm3: {
            name: 'Cubic Millimeter',
            convertValue: 1e-9
        },
        gallon: {
            name: 'Gallon',
            convertValue: 0.00454609
        },
        quart: {
            name: 'Quart',
            convertValue: 1 / 879.877
        }
    }
}

export default converter(volume)
