const errorTypes = {
  NoMoreHint: 0,
  Incorrect: 1,
} as const

export type ErrorTypesType = (typeof errorTypes)[keyof typeof errorTypes]

export default errorTypes
