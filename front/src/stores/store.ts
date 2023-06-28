import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterSlice'
import hintGetterReducer from './hintGetterSlice'
import ansResulterReducer from './ansResulterSlice'
import errorCollectorReducer from './errorCollector'

const store = configureStore({
  reducer: {
    hintGetter: hintGetterReducer,
    counter: counterReducer,
    ansResulter: ansResulterReducer,
    errorCollector: errorCollectorReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store
