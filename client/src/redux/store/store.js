/* eslint-disable no-unused-vars */
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import storage from 'redux-persist/lib/storage'
import roleSliceReducer, { roleSlice } from '../features/slices/role/roleSlice'
import persistReducer from 'redux-persist/es/persistReducer'
import { accountApi } from '../features/api/account/accountApi'
import { careerApi } from '../features/api/career/careerApi'
import { categoryApi } from '../features/api/category/categoriesApi'
import { jobApi } from '../features/api/jobs/jobApi'
import { planApi } from '../features/api/plan/planApi'
import { talentApi } from '../features/api/talent/talentApi'
import { companyApi } from '../features/api/company/companyApi'
import { newsApi } from '../features/api/news/newsApi'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['roleState'],
}

const rootReducer = combineReducers({
  roleState: roleSliceReducer,
  [accountApi.reducerPath]: accountApi.reducer,
  [careerApi.reducerPath]: careerApi.reducer,
  [categoryApi.reducerPath]: categoryApi.reducer,
  [jobApi.reducerPath]: jobApi.reducer,
  [planApi.reducerPath]: planApi.reducer,
  [talentApi.reducerPath]: talentApi.reducer,
  [companyApi.reducerPath]: companyApi.reducer,
  [newsApi.reducerPath]: newsApi.reducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(
      accountApi.middleware,
      careerApi.middleware,
      categoryApi.middleware,
      jobApi.middleware,
      planApi.middleware,
      talentApi.middleware,
      companyApi.middleware,
      newsApi.middleware,
    ),
})

setupListeners(store.dispatch)
