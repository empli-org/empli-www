import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import roleSliceReducer from '../features/slices/roleSlice'
import { baseApi } from '../features/api/base'

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    roles: roleSliceReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(baseApi.middleware),
})
setupListeners(store.dispatch)
