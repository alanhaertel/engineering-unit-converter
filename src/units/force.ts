import { type Force } from '../types'
import converter from '../publicConverter'

const force: Force = {
    baseUnit: 'N',
    units: {
        N: {
            name: 'Newton',
            convertValue: 1
        },
        dyn: {
            name: 'Dyne',
            convertValue: 0.00001 // Conversion factor from N to dyn
        },
        lbf: {
            name: 'Pound-force',
            convertValue: 4.44822 // Conversion factor from N to lbf
        },
        kgf: {
            name: 'Kilogram-force',
            convertValue: 9.80665 // Conversion factor from N to kgf
        }
    }
}

export default converter(force)
