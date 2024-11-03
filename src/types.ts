export type UnitsValues = {
  name: string
  convertValue: number
  offset?: number
}

export type VoltageUnits = {
  V: UnitsValues
  mV: UnitsValues
  kV: UnitsValues
}

export type Voltage = {
  baseUnit: 'V'
  // transform: (val: number) => number;
  units: VoltageUnits
}

export type MassFlowUnits = {
  'kg/s': UnitsValues
  'kg/h': UnitsValues
  'lb/day': UnitsValues
  'g/s': UnitsValues
  'lb/h': UnitsValues
  'ton/day': UnitsValues
  'oz/min': UnitsValues
  'ton/year': UnitsValues
  'lb/s': UnitsValues
  'kg/day': UnitsValues
}

export type MassFlow = {
  baseUnit: 'kg/s'
  // transform: (val: number) => number;
  units: MassFlowUnits
}

export type VolumetricFlowUnits = {
  'm3/h': UnitsValues
  'm3/day': UnitsValues
  'ft3/h': UnitsValues
  'ft3/day': UnitsValues
  'gal/h': UnitsValues
  'gal/day': UnitsValues
  'm3/s': UnitsValues
  'ft3/s': UnitsValues
  'gal/s': UnitsValues
}

export type VolumetricFlow = {
  baseUnit: 'm3/h'
  units: VolumetricFlowUnits
}

export type DensityUnits = {
  'kg/m3': UnitsValues
  'lb/ft3': UnitsValues
  'g/cm3': UnitsValues
  'kg/ft3': UnitsValues
  'lb/m3': UnitsValues
}

export type Density = {
  baseUnit: 'kg/m3'
  units: DensityUnits
}

export type ViscosityUnits = {
  cP: UnitsValues
  'Pas': UnitsValues
  'lb/fts': UnitsValues
  'kg/mh': UnitsValues
  'lb/fth': UnitsValues
  'kg/ms': UnitsValues
}

export type Viscosity = {
  baseUnit: 'cP'
  units: ViscosityUnits
}

export type LengthUnits = {
  mm: UnitsValues
  km: UnitsValues
  cm: UnitsValues
  m: UnitsValues
  in: UnitsValues
  ft: UnitsValues
  um: UnitsValues
  nm: UnitsValues
}

export type Length = {
  baseUnit: 'm'
  units: LengthUnits
}

export type MassUnits = {
  kg: UnitsValues
  g: UnitsValues
  lb: UnitsValues
  oz: UnitsValues
  ton: UnitsValues
}

export type Mass = {
  baseUnit: 'kg'
  units: MassUnits
}

export type SpeedUnits = {
  'm/s': UnitsValues
  'km/h': UnitsValues
  'ft/s': UnitsValues
  'mi/h': UnitsValues
  'knot': UnitsValues
  'm/h': UnitsValues
  'ft/h': UnitsValues
  'mph': UnitsValues
}

export type Speed = {
  baseUnit: 'm/s'
  units: SpeedUnits
}

export type PowerUnits = {
  'W': UnitsValues
  'kW': UnitsValues
  'hp': UnitsValues
  'BTU/h': UnitsValues
  'cal/s': UnitsValues
}

export type Power = {
  baseUnit: 'W'
  units: PowerUnits
}

export type EnergyUnits = {
  'J': UnitsValues
  'kJ': UnitsValues
  'cal': UnitsValues
  'kcal': UnitsValues
  'Wh': UnitsValues
  'kWh': UnitsValues
  'BTU': UnitsValues
}

export type Energy = {
  baseUnit: 'J'
  units: EnergyUnits
}

export type AreaUnits = {
  'm2': UnitsValues
  'km2': UnitsValues
  'cm2': UnitsValues
  'mm2': UnitsValues
  'sqin': UnitsValues
  'sqft': UnitsValues
  'sqyd': UnitsValues
  'acre': UnitsValues
  'hectare': UnitsValues
}

export type Area = {
  baseUnit: 'm2'
  units: AreaUnits
}

export type VolumeUnits = {
  'm3': UnitsValues
  'liter': UnitsValues
  'cm3': UnitsValues
  'mm3': UnitsValues
  'gallon': UnitsValues
  'quart': UnitsValues
}

export type Volume = {
  baseUnit: 'm3'
  units: VolumeUnits
}

export type ForceUnits = {
  'N': UnitsValues
  'dyn': UnitsValues
  'lbf': UnitsValues
  'kgf': UnitsValues
}

export type Force = {
  baseUnit: 'N'
  units: ForceUnits
}

export type TorqueUnits = {
  'N/m': UnitsValues
  'dyn/cm': UnitsValues
  'lbf/ft': UnitsValues
  'mN/m': UnitsValues
  'lbf/in': UnitsValues
  'ozf/in': UnitsValues
}

export type Torque = {
  baseUnit: 'N/m'
  units: TorqueUnits
}

export type TimeUnits = {
  's': UnitsValues
  'min': UnitsValues
  'hr': UnitsValues
  'day': UnitsValues
}

export type Time = {
  baseUnit: 's'
  units: TimeUnits
}

export type ElectricChargeUnits = {
  'C': UnitsValues
  'mC': UnitsValues
  'μC': UnitsValues
  'nC': UnitsValues
  'pC': UnitsValues
}

export type ElectricCharge = {
  baseUnit: 'C'
  units: ElectricChargeUnits
}

export type ElectricCurrentUnits = {
  'A': UnitsValues
  'mA': UnitsValues
  'μA': UnitsValues
  'nA': UnitsValues
  'pA': UnitsValues
}

export type ElectricCurrent = {
  baseUnit: 'A'
  units: ElectricCurrentUnits
}

export type AccelerationUnits = {
  'm/s2': UnitsValues
  'km/s2': UnitsValues
  'cm/s2': UnitsValues
  'ft/s2': UnitsValues
}

export type Acceleration = {
  baseUnit: 'm/s2'
  units: AccelerationUnits
}

export type PressureUnits = {
  'Pa': UnitsValues
  'kPa': UnitsValues
  'MPa': UnitsValues
  'bar': UnitsValues
  'atm': UnitsValues
  'psi': UnitsValues
  'kg/cm2': UnitsValues
  'Pag': UnitsValues
  'kPag': UnitsValues
  'MPag': UnitsValues
  'barg': UnitsValues
  'atmg': UnitsValues
  'psig': UnitsValues
  'kg/cm2g': UnitsValues
}

export type Pressure = {
  baseUnit: 'Pa'
  units: PressureUnits
}

export type PressureManometricUnits = {
  'Pag': UnitsValues
  'kPag': UnitsValues
  'MPag': UnitsValues
  'barg': UnitsValues
  'atmg': UnitsValues
  'psig': UnitsValues
  'kg/cm2g': UnitsValues
}

export type PressureManometric = {
  baseUnit: 'Pag'
  units: PressureManometricUnits
}

export type StandardVolumetricFlowUnits = {
  'SCMD': UnitsValues
  'SCFD': UnitsValues
  'MSCMD': UnitsValues
  'MMSCMD': UnitsValues
  'MSCFD': UnitsValues
  'MMSCFD': UnitsValues
  'Sm3/h': UnitsValues
  'Sft3/h': UnitsValues
}

export type StandardVolumetricFlow = {
  baseUnit: 'SCMD'
  units: StandardVolumetricFlowUnits
}

export type TemperatureUnits = {
  'C': UnitsValues
  'F': UnitsValues
  'K': UnitsValues
}

export type Temperature = {
  baseUnit: 'C'
  units: TemperatureUnits
}

export type Measurement = Voltage | MassFlow | VolumetricFlow | Density | Viscosity | Length | Mass | Speed | Power | Energy | Area | Volume | Force |
  Torque | Time | ElectricCharge | ElectricCurrent | Acceleration | Pressure | PressureManometric | StandardVolumetricFlow | Temperature

export type MeasurementUnits<T extends Measurement> = T extends { units: infer U } ? keyof U : never
