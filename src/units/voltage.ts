import converter from '../publicConverter'
import { type Voltage } from '../types'

const voltage: Voltage = {
    baseUnit: 'V',
    // transform: (val) => val * baseValue,
    units: {
        V: {
            name: 'Volt',
            convertValue: 1
        },
        mV: {
            name: 'Millivolt',
            convertValue: 0.001
        },
        kV: {
            name: 'Kilovolt',
            convertValue: 1000
        }
    }

}

export default converter(voltage)
