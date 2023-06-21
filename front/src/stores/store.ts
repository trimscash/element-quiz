import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterSlice'
import roulleterReducer from './roulleterSlice'
import hintGetterReducer from './hintGetterSlice'

const store = configureStore({
  reducer: {
    hintGetter: hintGetterReducer,
    counter: counterReducer,
    roulleter: roulleterReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store
