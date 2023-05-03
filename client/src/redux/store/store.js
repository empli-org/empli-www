import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import storage from 'redux-persist/lib/storage'
import roleSliceReducer, { roleSlice } from '../features/slices/rol/roleSlice'
import persistReducer from 'redux-persist/es/persistReducer'
import { accountApi } from '../features/api/account/accountApi'
import { careerApi } from '../features/api/career/careerApi'
import { categoryApi } from '../features/api/category/categoriesApi'
import { jobApi } from '../features/api/jobs/jobApi'
import { planApi } from '../features/api/plan/planApi'
import { talentApi } from '../features/api/talent/talentApi'

const pesistConfig = {
  key: 'root',
  storage,
  whitelist: ['roleState'],
}
const rootReducer = {
  roleState: roleSlice,
}

const localStorage = persistReducer(pesistConfig, rootReducer)
export const store = configureStore({
  reducer: {
    localStorage,
    [accountApi.reducerPath]: accountApi.reducer,
    [careerApi.reducerPath]: careerApi.reducer,
    [categoryApi.reducerPath]: categoryApi.reducer,
    [jobApi.reducerPath]: jobApi.reducer,
    [planApi.reducerPath]: planApi.reducer,
    [talentApi.reducerPath]: talentApi.reducer,
    manageRole: roleSliceReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(
      accountApi.middleware,
      careerApi.middleware,
      categoryApi.middleware,
      jobApi.middleware,
      planApi.middleware,
      talentApi.middleware,
    ),
})
setupListeners(store.dispatch)
