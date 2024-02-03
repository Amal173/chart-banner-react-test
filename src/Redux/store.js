import { configureStore } from '@reduxjs/toolkit'
import chartReducer from './Slices/ChartSlice'

export const store = configureStore({
  reducer: {
    chart: chartReducer,
  },
})