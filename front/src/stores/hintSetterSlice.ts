import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import type { RootState } from './store'

// Define a type for the slice state
interface HintSetterState {
  hints: string[]
  hint_index: number[]
  hint_count: number
}

// Define the initial state using that type
const initialState: HintSetterState = {
  hints: [],
  hint_index: [],
  hint_count: 0,
}

export interface SetHintArg {
  hint: string
  hint_index: number
}

export const hintSetterState = createSlice({
  name: 'hintSetter',
  initialState,
  reducers: {
    setHint: (state, action: PayloadAction<SetHintArg>) => {
      state.hints.push(action.payload.hint)
      state.hint_index.push(action.payload.hint_index)
      state.hint_count++
    },
  },
  // extraReducers: (builder) => {
  //   builder.addCase(setHint.fulfilled, (state, action) => {
  //     state.result.push(action.payload.hint)
  //     state.hint_count++
  //   })
  // },
})

export const { setHint } = hintSetterState.actions

export const selectHints = (state: RootState) => state.hintSetter.hints
export const selectHintIndex = (state: RootState) => state.hintSetter.hint_index
export const selectHintCount = (state: RootState) => state.hintSetter.hint_count

export default hintSetterState.reducer
