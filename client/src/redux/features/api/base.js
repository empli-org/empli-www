import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'

const BASE_URL_API = import.meta.env.VITE_API_URL_BASE

export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL_API }),
  endpoints: builder => ({
    getJobs: builder.query({
      query: ({ queryString, page }) => `/jobs?page=${page}&${queryString}`,
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
    searchCareers: builder.query({
      query: key => `/talents/careers${key ? `?key=${key}` : ''}`,
    }),
    searchSkills: builder.query({
      query: key => `/talents/skills${key ? `?key=${key}` : ''}`,
    }),
    getAllTalents: builder.query({
      query: ({ key, page }) =>
        `/talents?page=${page}${key ? `&key=${key}` : ''}`,
    }),
    getTalentById: builder.query({
      query: id => `/talents/${id}`,
    }),
    createAccount: builder.mutation({
      query: body => ({
        url: '/account/create',
        method: 'POST',
        body,
      }),
    }),
    verifyAccount: builder.mutation({
      query: body => ({
        url: '/account/verify',
        method: 'POST',
        body,
      }),
    }),
  }),
})

export const {
  useGetJobsQuery,
  useGetJobByCodeQuery,
  useSearchJobsQuery,
  useGetJobLocationsQuery,
  useGetJobAreasQuery,
  useSearchCareersQuery,
  useSearchSkillsQuery,
  useGetAllTalentsQuery,
  useLazyGetAllTalentsQuery,
  useGetTalentByIdQuery,
  useCreateAccountMutation,
  useVerifyAccountMutation,
} = baseApi
