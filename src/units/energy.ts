import { type Energy } from '../types'
import converter from '../publicConverter'

const energy: Energy = {
    baseUnit: 'J',
    units: {
        J: {
            name: 'Joule',
            convertValue: 1
        },
        kJ: {
            name: 'Kilojoule',
            convertValue: 1 / 0.001 // Conversion factor from J to kJ
        },
        cal: {
            name: 'Calorie',
            convertValue: 1 / 0.239006 // Conversion factor from J to cal
        },
        kcal: {
            name: 'Kilocalorie',
            convertValue: 1 / 0.000239006 // Conversion factor from J to kcal
        },
        Wh: {
            name: 'Watt-hour',
            convertValue: 1 / 0.000277778 // Conversion factor from J to Wh
        },
        kWh: {
            name: 'Kilowatt-hour',
            convertValue: 1 / 2.77778e-7 // Conversion factor from J to kWh
        },
        BTU: {
            name: 'British Thermal Unit',
            convertValue: 1 / 0.000947817 // Conversion factor from J to BTU
        }
    }
}

export default converter(energy)
