import { type VolumetricFlow } from '../types'
import converter from '../converter'

const volumetricFlow: VolumetricFlow = {
    baseUnit: 'm3/h',
    units: {
        'm3/h': {
            name: 'Cubic meter per hour',
            convertValue: 1
        },
        'm3/day': {
            name: 'Cubic meter per day',
            convertValue: 1 / 24 // Assuming 1 day = 24 hours
        },
        'ft3/h': {
            name: 'Cubic foot per hour',
            convertValue: 0.0283168 // Conversion factor from cubic meter to cubic foot
        },
        'ft3/day': {
            name: 'Cubic foot per day',
            convertValue: 0.0283168 / 24 // Conversion factor from cubic meter to cubic foot, assuming 1 day = 24 hours
        },
        'gal/h': {
            name: 'Gallon per hour',
            convertValue: 0.00378541 // Conversion factor from cubic meter to gallon
        },
        'gal/day': {
            name: 'Gallon per day',
            convertValue: 0.00378541 / 24 // Conversion factor from cubic meter to gallon, assuming 1 day = 24 hours
        },
        'm3/s': {
            name: 'Cubic meter per second',
            convertValue: 1 / 3600 // Assuming 1 hour = 3600 seconds
        },
        'ft3/s': {
            name: 'Cubic foot per second',
            convertValue: 0.0283168 / 3600 // Conversion factor from cubic meter to cubic foot, assuming 1 hour = 3600 seconds
        },
        'gal/s': {
            name: 'Gallon per second',
            convertValue: 0.00378541 / 3600 // Conversion factor from cubic meter to gallon, assuming 1 hour = 3600 seconds
        }
    }
}

export default converter(volumetricFlow)
