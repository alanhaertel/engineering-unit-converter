import { type Power } from '../types'
import converter from '../converter'

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
            convertValue: 3.41214 // Conversion factor from W to BTU/h
        },
        'cal/s': {
            name: 'Calorie per second',
            convertValue: 239.006 // Conversion factor from W to cal/s
        }
    }
}

export default converter(power)
