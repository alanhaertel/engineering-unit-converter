// speed.ts
import { type Speed } from '../types'
import converter from '../publicConverter'

const speed: Speed = {
    baseUnit: 'm/s',
    units: {
        'm/s': {
            name: 'Meter per second',
            convertValue: 1
        },
        'km/h': {
            name: 'Kilometer per hour',
            convertValue: 0.277778 // Conversion factor from m/s to km/h
        },
        'ft/s': {
            name: 'Foot per second',
            convertValue: 0.3048 // Conversion factor from m/s to ft/s
        },
        'mi/h': {
            name: 'Mile per hour',
            convertValue: 0.44704 // Conversion factor from m/s to mi/h
        },
        knot: {
            name: 'Knot',
            convertValue: 0.514444 // Conversion factor from m/s to knots
        },
        'm/h': {
            name: 'Meter per hour',
            convertValue: 1 / 3600 // Conversion factor from m/s to m/h
        },
        'ft/h': {
            name: 'Foot per hour',
            convertValue: 0.3048 / 3600 // Conversion factor from m/s to ft/h
        }
    }
}
export default converter(speed)
