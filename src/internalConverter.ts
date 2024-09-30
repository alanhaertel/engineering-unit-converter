import { type Measurement, type MeasurementUnits } from './types'

class InternalConverter<T extends Measurement> {
  readonly _definitions: T
  readonly _val: number
  private _fromUnit: MeasurementUnits<T> | null = null

  constructor(numerator: number, _definitions: T) {
    this._definitions = _definitions
    this._val = numerator
  }

  from<U extends MeasurementUnits<T>>(fromUnit: U): InternalConverter<T> {
    this._checkUnit(fromUnit)
    this._fromUnit = fromUnit
    return this
  }

  to<U extends MeasurementUnits<T>>(toUnit: U): number {
    if (!this._fromUnit) {
      throw new Error('Please specify the "from" unit using the from() method before calling to().')
    }
    this._checkUnit(toUnit)

    const fromValue = this._getUnit(this._fromUnit)
    const toValue = this._getUnit(toUnit)

    // Handle additive conversions
    let result = this._val

    // If the 'from' unit has an offset, subtract it before converting
    if (fromValue.offset !== 0) {
      result -= fromValue.offset
    }

    // Perform the multiplicative conversion
    result = result * fromValue.convertValue / toValue.convertValue

    // If the 'to' unit has an offset, add it after converting
    if (toValue.offset !== 0) {
      result += toValue.offset
    }

    return result
  }


  private _getUnit(unit: MeasurementUnits<T>): { convertValue: number, offset: number } {
    const unitInfo = this._definitions.units[unit] as { convertValue: number, offset?: number }
    const offset = unitInfo.offset ?? 0 // Default to 0 if offset is undefined
    return { convertValue: unitInfo.convertValue, offset }
  }


  private _checkUnit(unit: MeasurementUnits<T>): void {
    const availableUnits = Object.keys(this._definitions.units) as Array<MeasurementUnits<T>>

    if (!availableUnits.includes(unit)) {
      throw new Error(`Invalid unit "${unit}". Available units: ${availableUnits.join(', ')}`)
    }
  }
}

export default InternalConverter
