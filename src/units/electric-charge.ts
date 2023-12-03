import { type ElectricCharge } from '../types'
import converter from '../publicConverter'

const electricCharge: ElectricCharge = {
    baseUnit: 'C',
    units: {
        C: {
            name: 'Coulomb',
            convertValue: 1
        },
        mC: {
            name: 'MilliCoulomb',
            convertValue: 0.001 // Conversion factor from C to mC
        },
        μC: {
            name: 'MicroCoulomb',
            convertValue: 1e-6 // Conversion factor from C to μC
        },
        nC: {
            name: 'NanoCoulomb',
            convertValue: 1e-9 // Conversion factor from C to nC
        },
        pC: {
            name: 'PicoCoulomb',
            convertValue: 1e-12 // Conversion factor from C to pC
        }
    }
}

export default converter(electricCharge)
