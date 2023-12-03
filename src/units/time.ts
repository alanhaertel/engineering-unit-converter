import { type Time } from '../types'
import converter from '../converter'

const time: Time = {
    baseUnit: 's',
    units: {
        s: {
            name: 'Second',
            convertValue: 1
        },
        min: {
            name: 'Minute',
            convertValue: 60 // Conversion factor from seconds to minutes
        },
        hr: {
            name: 'Hour',
            convertValue: 3600 // Conversion factor from seconds to hours
        },
        day: {
            name: 'Day',
            convertValue: 86400 // Conversion factor from seconds to days
        }
    }
}

export default converter(time)
