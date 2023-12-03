import { type MassFlow } from '../types'
import converter from '../converter'

const massFlow: MassFlow = {
    baseUnit: 'kg/s',
    units: {
        'kg/s': {
            name: 'Kilogram per second',
            convertValue: 1
        },
        'kg/h': {
            name: 'Kilogram per hour',
            convertValue: 1 / 3600 // 1 hour = 3600 seconds
        },
        'lb/day': {
            name: 'Pound per day',
            convertValue: 0.000453592 * (1 / 86400) // 1 lb = 0.000453592 kg, 1 day = 86400 seconds
        },
        'g/s': {
            name: 'Gram per second',
            convertValue: 0.001
        },
        'lb/h': {
            name: 'Pound per hour',
            convertValue: 0.000453592
        },
        'ton/day': {
            name: 'Ton per day',
            convertValue: 1000 * (1 / 86400) // 1 ton = 1000 kg
        },
        'oz/min': {
            name: 'Ounce per minute',
            convertValue: 0.0283495 / 60 // 1 oz = 0.0283495 kg, 1 minute = 60 seconds
        },
        'ton/year': {
            name: 'Ton per year', // Adjust the name as needed
            convertValue: 1000 / 86400 / 365 // Assuming 1 ton/year = 1000 kg / 86400 seconds / 365 days
        },
        'lb/s': {
            name: 'Pound per second',
            convertValue: 0.000453592
        },
        'kg/day': {
            name: 'Kilogram per day',
            convertValue: 1 / 86400 // 1 day = 86400 seconds
        }
    }
}

export default converter(massFlow)
