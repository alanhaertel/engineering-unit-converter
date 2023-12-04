import { type Power } from '../types'
import converter from '../publicConverter'

const power: Power = {
    baseUnit: 'W',
    units: {
        W: {
            name: 'Watt',
            convertValue: 1
        },
        kW: {
            name: 'Kilowatt',
            convertValue: 1000 // Conversion factor from W to kW
        },
        hp: {
            name: 'Horsepower',
            convertValue: 745.7 // Conversion factor from W to hp
        },
        'BTU/h': {
            name: 'British Thermal Unit per hour',
            convertValue: 1 / 3.41214 // Conversion factor from W to BTU/h
        },
        'cal/s': {
            name: 'Calorie per second',
            convertValue: 1 / 0.23884589662749595 // Conversion factor from W to cal/s
        }
    }
}

export default converter(power)
