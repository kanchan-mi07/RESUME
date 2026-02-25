import { configureStore} from '@reduxjs/toolkit'
import authReducer from './features/autoSlice'
export const store = configureStore({
  reducer: {
    auth: authReducer
  }
})