// area.ts
import { type Area } from '../types'
import converter from '../publicConverter'

const area: Area = {
    baseUnit: 'm2',
    units: {
        m2: {
            name: 'Square Meter',
            convertValue: 1
        },
        km2: {
            name: 'Square Kilometer',
            convertValue: 1 / 1e-6 // Conversion factor from m2 to km2
        },
        cm2: {
            name: 'Square Centimeter',
            convertValue: 1 / 10000 // Conversion factor from m2 to cm2
        },
        mm2: {
            name: 'Square Millimeter',
            convertValue: 1 / 1e+6 // Conversion factor from m2 to mm2
        },
        sqin: {
            name: 'Square Inch',
            convertValue: 1 / 1550.0031 // Conversion factor from m2 to sqin
        },
        sqft: {
            name: 'Square Foot',
            convertValue: 1 / 10.7639 // Conversion factor from m2 to sqft
        },
        sqyd: {
            name: 'Square Yard',
            convertValue: 1 / 1.19599 // Conversion factor from m2 to sqyd
        },
        acre: {
            name: 'Acre',
            convertValue: 1 / 0.000247105 // Conversion factor from m2 to acre
        },
        hectare: {
            name: 'Hectare',
            convertValue: 1 / 1e-4 // Conversion factor from m2 to hectare
        }
    }
}

export default converter(area)
