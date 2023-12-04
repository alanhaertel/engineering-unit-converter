import { type Acceleration } from '../types'
import converter from '../publicConverter'

const acceleration: Acceleration = {
    baseUnit: 'm/s2',
    units: {
        'm/s2': {
            name: 'Meter per Second Squared',
            convertValue: 1
        },
        'km/s2': {
            name: 'Kilometer per Second Squared',
            convertValue: 1000
        },
        'cm/s2': {
            name: 'Centimeter per Second Squared',
            convertValue: 1 / 100
        },
        'ft/s2': {
            name: 'Foot per Second Squared',
            convertValue: 1 / 3.28084
        }
    }
}

export default converter(acceleration)
