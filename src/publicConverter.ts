import InternalConverter from './internalConverter'
import { type Measurement, type MeasurementUnits } from './types'

class PublicConverter<T extends Measurement> {
    readonly _internalConverter: InternalConverter<T>

    constructor (numerator: number, definitions: T) {
        this._internalConverter = new InternalConverter(numerator, definitions)
    }

    from<U extends MeasurementUnits<T>>(fromUnit: U): IntermediateConverter<T> {
        this._internalConverter.from(fromUnit)
        return new IntermediateConverter(this._internalConverter)
    }
}

class IntermediateConverter<T extends Measurement> {
    constructor (readonly _internalConverter: InternalConverter<T>) {}

    to<U extends MeasurementUnits<T>>(toUnit: U): number {
        return this._internalConverter.to(toUnit)
    }
}

const createConverter = <T extends Measurement>(definitions: T) => (val: number) =>
    new PublicConverter(val, definitions)

export default createConverter
