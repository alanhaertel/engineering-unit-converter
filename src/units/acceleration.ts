import { type Acceleration } from '../types'
import converter from '../publicConverter'

const acceleration: Acceleration = {
    baseUnit: 'm/s²',
    units: {
        'm/s²': {
            name: 'Meter per Second Squared',
            convertValue: 1
        },
        'km/s²': {
            name: 'Kilometer per Second Squared',
            convertValue: 1e6 // Conversion factor from m/s² to km/s²
        },
        'cm/s²': {
            name: 'Centimeter per Second Squared',
            convertValue: 0.0001 // Conversion factor from m/s² to cm/s²
        },
        g: {
            name: 'Gravity',
            convertValue: 9.80665 // Standard gravity on Earth, in m/s²
        },
        'ft/s²': {
            name: 'Foot per Second Squared',
            convertValue: 0.3048 // Conversion factor from m/s² to ft/s²
        }
    }
}

export default converter(acceleration)
