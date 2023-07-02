import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'

// Define a type for the slice state
interface AnsResulterState {
  incorrectNum: number
  hasCorrected: boolean
  isCorrectModalClose: boolean
}

// Define the initial state using that type
const initialState: AnsResulterState = {
  incorrectNum: 0,
  hasCorrected: false,
  isCorrectModalClose: false,
}

interface SetResultAnsArg {
  result: boolean
}
interface SetIsCorrectModalCloseArg {
  isCorrectModalClose: boolean
}

export const ansResulterSlice = createSlice({
  name: 'ansResulter',
  initialState,
  reducers: {
    setResult: (state, action: PayloadAction<SetResultAnsArg>) => {
      if (!state.hasCorrected) {
        if (!action.payload.result) {
          state.incorrectNum++
        }
        state.hasCorrected = action.payload.result
      }
    },
    setIsCorrectModalClose: (
      state,
      action: PayloadAction<SetIsCorrectModalCloseArg>
    ) => {
      state.isCorrectModalClose = action.payload.isCorrectModalClose
    },
  },
})

export const { setResult, setIsCorrectModalClose } = ansResulterSlice.actions

export const selectAnsIncorrectNum = (state: RootState) =>
  state.ansResulter.incorrectNum
export const selectHasCorrected = (state: RootState) =>
  state.ansResulter.hasCorrected

export const selectIsCorrectModalClose = (state: RootState) =>
  state.ansResulter.isCorrectModalClose

export default ansResulterSlice.reducer
