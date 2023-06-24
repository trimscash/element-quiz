import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { RootState } from './store'
import axios from 'axios'
import constant from '../util/const'
import { HintQuery } from '../util/apiQueryType'

// Define a type for the slice state
interface HintGetterState {
  result: string[]
  hint_count: number
}

// Define the initial state using that type
const initialState: HintGetterState = {
  result: [],
  hint_count: 0,
}

export const getTodayHint = createAsyncThunk<any, { hint: number }>(
  'hintGetter/fetchHint',
  async (arg) => {
    const response = await axios.get(constant.TODAY_HINT_URL, {
      params: { hint_index: arg.hint } as HintQuery,
    })
    return response.data
  }
)

export const hintGetterSlice = createSlice({
  name: 'hintGetter',
  initialState,
  reducers: {
    // getNextHint: (state) => {},
  },
  extraReducers: (builder) => {
    builder.addCase(getTodayHint.fulfilled, (state, action) => {
      state.result.push(action.payload.hint)
      state.hint_count++
    })
  },
})

// export const { getNextHint } = hintGetterSlice.actions

export const selectHints = (state: RootState) => state.hintGetter.result
export const selectHintCount = (state: RootState) => state.hintGetter.hint_count

export default hintGetterSlice.reducer
