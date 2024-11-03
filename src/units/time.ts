import { type Time } from '../types'
import converter from '../publicConverter'

const time: Time = {
  baseUnit: 'sec',
  units: {
    sec: {
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
    },
    month: {
      name: 'Month',
      convertValue: 86400 * 30 // Conversion factor from seconds to days
    },
    year: {
      name: 'Year',
      convertValue: 86400 * 365 // Conversion factor from seconds to days
    }
  }
}

export default converter(time)
