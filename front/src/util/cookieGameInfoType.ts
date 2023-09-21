export interface GameInfoType {
  answer: string
  hasCorrected: boolean
  incorrectedNum: number
  hintNum: number
  hints: HintType[]
}

export interface HintType {
  hint: string
  hintIndex: number
}

export const initialGameInfo: GameInfoType = {
  answer: '',
  hasCorrected: false,
  incorrectedNum: 0,
  hintNum: 0,
  hints: new Array<HintType>(),
} as const

export const initialGameInfoAsString = JSON.stringify(initialGameInfo)
