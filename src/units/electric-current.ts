import { type ElectricCurrent } from '../types'
import converter from '../converter'

const electricCurrent: ElectricCurrent = {
    baseUnit: 'A',
    units: {
        A: {
            name: 'Ampere',
            convertValue: 1
        },
        mA: {
            name: 'Milliampere',
            convertValue: 0.001 // Conversion factor from A to mA
        },
        μA: {
            name: 'Microampere',
            convertValue: 1e-6 // Conversion factor from A to μA
        },
        nA: {
            name: 'Nanoampere',
            convertValue: 1e-9 // Conversion factor from A to nA
        },
        pA: {
            name: 'Picoampere',
            convertValue: 1e-12 // Conversion factor from A to pA
        }
    }
}

export default converter(electricCurrent)
