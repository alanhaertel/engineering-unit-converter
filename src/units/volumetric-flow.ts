import { type VolumetricFlow } from '../types'
import converter from '../publicConverter'

const volumetricFlow: VolumetricFlow = {
    baseUnit: 'm3/h',
    units: {
        'm3/h': {
            name: 'Cubic meter per hour',
            convertValue: 1
        },
        'm3/day': {
            name: 'Cubic meter per day',
            convertValue: 1 / 24
        },
        'ft3/h': {
            name: 'Cubic foot per hour',
            convertValue: 0.0283168
        },
        'ft3/day': {
            name: 'Cubic foot per day',
            convertValue: 0.0283168 / 24
        },
        'gal/h': {
            name: 'Gallon per hour',
            convertValue: 0.00378541
        },
        'gal/day': {
            name: 'Gallon per day',
            convertValue: 0.00378541 / 24
        },
        'm3/s': {
            name: 'Cubic meter per second',
            convertValue: 3600
        },
        'ft3/s': {
            name: 'Cubic foot per second',
            convertValue: 1 / 0.00980963
        },
        'gal/s': {
            name: 'Gallon per second',
            convertValue: 0.00378541 * 3600
        }
    }
}

export default converter(volumetricFlow)
