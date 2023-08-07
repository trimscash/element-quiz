import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ErrorTypesType } from '../util/errorTypes'
import type { RootState } from './store'

// Define a type for the slice state
interface ErrorCollectorState {
  errors: number[]
}

// Define the initial state using that type
const initialState: ErrorCollectorState = {
  errors: [] as number[],
}

export interface ErrorCollectorArg {
  error: ErrorTypesType
}

export const errorCollectorSlice = createSlice({
  name: 'errorCollector',
  initialState,
  reducers: {
    pushError: (state, action: PayloadAction<ErrorCollectorArg>) => {
      state.errors.push(action.payload.error)
    },
  },
})

export const { pushError } = errorCollectorSlice.actions

export const selectErrors = (state: RootState) => state.errorCollector.errors

export default errorCollectorSlice.reducer
