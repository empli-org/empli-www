import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'

const BASE_URL_API = import.meta.env.VITE_API_URL_BASE

export const jobsApi = createApi({
  reducerPath: 'jobsApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL_API }),
  endpoints: builder => ({
    getJobs: builder.query({
      query: key => `/jobs${key ? `?key=${key}` : ''}`,
    }),
    searchJobs: builder.query({
      query: key => `/jobs/search?key=${key}`,
    }),
    getJobByCode: builder.query({
      query: code => `/jobs/${code}`,
    }),
    getJobLocations: builder.query({
      query: key => `/jobs/locations${key ? `?key=${key}` : ''}`,
    }),
    getJobAreas: builder.query({
      query: key => `/jobs/areas${key ? `?key=${key}` : ''}`,
    }),
  }),
})

export const {
  useGetJobsQuery,
  useGetJobByCodeQuery,
  useSearchJobsQuery,
  useGetJobLocationsQuery,
  useGetJobAreasQuery,
} = jobsApi
