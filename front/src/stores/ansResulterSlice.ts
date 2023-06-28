import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'

// Define a type for the slice state
interface AnsResulterState {
  incorrectNum: number
  hasCorrected: boolean
}

// Define the initial state using that type
const initialState: AnsResulterState = {
  incorrectNum: 0,
  hasCorrected: false,
}

interface SetResultAnsArg {
  result: boolean
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
  },
})

export const { setResult } = ansResulterSlice.actions

export const selectAnsIncorrectNum = (state: RootState) =>
  state.ansResulter.incorrectNum
export const selectAnsResult = (state: RootState) =>
  state.ansResulter.hasCorrected

export default ansResulterSlice.reducer
