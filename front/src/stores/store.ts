import { configureStore } from '@reduxjs/toolkit'
import ansResulterReducer from './ansResulterSlice'
import counterReducer from './counterSlice'
import errorCollectorReducer from './errorCollector'
import hintSetterReducer from './hintSetterSlice'

const store = configureStore({
  reducer: {
    hintSetter: hintSetterReducer,
    counter: counterReducer,
    ansResulter: ansResulterReducer,
    errorCollector: errorCollectorReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store
