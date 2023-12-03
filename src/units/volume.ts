import { type Volume } from '../types'
import converter from '../publicConverter'

const volume: Volume = {
    baseUnit: 'm³',
    units: {
        'm³': {
            name: 'Cubic Meter',
            convertValue: 1
        },
        liter: {
            name: 'Liter',
            convertValue: 0.001 // Conversion factor from m³ to liters
        },
        'cm³': {
            name: 'Cubic Centimeter',
            convertValue: 0.000001 // Conversion factor from m³ to cm³
        },
        'mm³': {
            name: 'Cubic Millimeter',
            convertValue: 1e-9 // Conversion factor from m³ to mm³
        },
        gallon: {
            name: 'Gallon',
            convertValue: 0.00378541 // Conversion factor from m³ to gallons
        },
        quart: {
            name: 'Quart',
            convertValue: 0.000946353 // Conversion factor from m³ to quarts
        }
    }
}

export default converter(volume)
