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
            convertValue: 0.277778
        },
        'ft/s': {
            name: 'Foot per second',
            convertValue: 0.3048
        },
        'mi/h': {
            name: 'Mile per hour',
            convertValue: 0.44704
        },
        knot: {
            name: 'Knot',
            convertValue: 0.514444
        },
        'm/h': {
            name: 'Meter per hour',
            convertValue: 1 / 3600
        },
        'ft/h': {
            name: 'Foot per hour',
            convertValue: 1 / 11811
        }
    }
}
export default converter(speed)
