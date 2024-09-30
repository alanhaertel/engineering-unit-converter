import { type StandardVolumetricFlow } from '../types'
import converter from '../publicConverter'

const standardVolumetricFlow: StandardVolumetricFlow = {
  baseUnit: 'SCMD',
  units: {
    SCMD: {
      name: 'Standard Cubic Meters per Day',
      convertValue: 1
    },
    SCFD: {
      name: 'Standard Cubic Feet per Day',
      convertValue: (1 / 35.3147) // Conversion factor from SCMD to SCFD
    },
    MSCMD: {
      name: 'Million Standard Cubic Meters per Day',
      convertValue: 1e3 // Conversion factor from SCMD to MSCMD
    },
    MMSCMD: {
      name: 'Million Million Standard Cubic Meters per Day',
      convertValue: 1e6 // Conversion factor from SCMD to MMSCMD
    },
    MSCFD: {
      name: 'Million Standard Cubic Feet per Day',
      convertValue: (1 / 35.3147) * 1e3 // Conversion factor from SCMD to MSCFD
    },
    MMSCFD: {
      name: 'Million Million Standard Cubic Feet per Day',
      convertValue: (1 / 35.3147) * 1e6 // Conversion factor from SCMD to MMSCFD
    },
    'Sm3/h': {
      name: 'Standard Cubic Meter per Hour',
      convertValue: 24 // Conversion factor from SCMD to MMSCFD
    },
    'Sft3/h': {
      name: 'Standard Cubic Feet per Hour',
      convertValue: (1 / 35.3147) * 24 // Conversion factor from SCMD to MMSCFD
    },
  }
}

export default converter(standardVolumetricFlow)
