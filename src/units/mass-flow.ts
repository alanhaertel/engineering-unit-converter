import { type MassFlow } from '../types'
import converter from '../publicConverter'

const massFlow: MassFlow = {
    baseUnit: 'kg/s',
    units: {
        'kg/s': {
            name: 'Kilogram per second',
            convertValue: 1
        },
        'kg/h': {
            name: 'Kilogram per hour',
            convertValue: 1 / 3600
        },
        'lb/day': {
            name: 'Pound per day',
            convertValue: 1 / 190479
        },
        'g/s': {
            name: 'Gram per second',
            convertValue: 0.001
        },
        'lb/h': {
            name: 'Pound per hour',
            convertValue: 1 / (190479 / 24)
        },
        'ton/day': {
            name: 'Ton per day',
            convertValue: 1 / (34762.5 / 365)
        },
        'oz/min': {
            name: 'Ounce per minute',
            convertValue: 1 / 2116.4394433764
        },
        'ton/year': {
            name: 'Ton per year',
            convertValue: 1 / 34762.5
        },
        'lb/s': {
            name: 'Pound per second',
            convertValue: 1 / (190479 / 86400)
        },
        'kg/day': {
            name: 'Kilogram per day',
            convertValue: 1 / 86400 // 1 day = 86400 seconds
        }
    }
}

export default converter(massFlow)
