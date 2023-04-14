// @ts-nocheck
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_URL_BASE }),
  tagTypes: ['Jobs', 'Categories', 'Talents', 'Careers'],
  endpoints: builder => ({
    getJobs: builder.query({
      query: () => ({
        url: 'jobs',
        method: 'GET',
        mode: 'cors',
      }),
      providesTags: ['Jobs'],
    }),
    // //transformResponse: res => res.sort((a,b) => b.id - a.id)
    createJobs: builder.mutation({
      query: newJobs => ({
        url: `jobs/`,
        method: 'POST',
        body: newJobs,
        mode: 'cors',
        prepareHeaders: headers => {
          // If we have a token set in state, let's assume that we should be passing it.
          headers.set('Content-type', 'application/json;')
          return headers
        },
      }),
    }),
    updateJobs: builder.mutation({
      query: updateJobs => ({
        url: `jobs/${updateJobs.id}/`,
        method: 'PATCH',
        body: updateJobs,
        mode: 'cors',
        prepareHeaders: headers => {
          // If we have a token set in state, let's assume that we should be passing it.
          headers.set('Content-type', 'application/json;')
          return headers
        },
      }),
    }),
    deleteJobs: builder.mutation({
      query: id => ({
        url: `jobs/${id}/`,
        method: 'DELETE',
        headers: {
          // If we have a token set in state, let's assume that we should be passing it.
          'Content-type': 'application/json; ',
        },
      }),
    }),

    // * Endpoints Talents

    getTalent: builder.query({
      query: () => ({
        url: 'talents',
        method: 'GET',
        mode: 'cors',
      }),
      providesTags: ['Talent'],
    }),
    // //transformResponse: res => res.sort((a,b) => b.id - a.id)
    createTalent: builder.mutation({
      query: newTalent => ({
        url: `talents/`,
        method: 'POST',
        body: newTalent,
        mode: 'cors',
        prepareHeaders: headers => {
          // If we have a token set in state, let's assume that we should be passing it.
          headers.set('Content-type', 'application/json;')
          return headers
        },
      }),
    }),
    updateTalent: builder.mutation({
      query: updateTalent => ({
        url: `talents/${updateTalent.id}/`,
        method: 'PATCH',
        body: updateTalent,
        mode: 'cors',
        prepareHeaders: headers => {
          // If we have a token set in state, let's assume that we should be passing it.
          headers.set('Content-type', 'application/json;')
          return headers
        },
      }),
    }),
    deleteTalent: builder.mutation({
      query: id => ({
        url: `talents/${id}/`,
        method: 'DELETE',
        headers: {
          // If we have a token set in state, let's assume that we should be passing it.
          'Content-type': 'application/json; ',
        },
      }),
    }),

    // * Endpoints Categories

    getCategories: builder.query({
      query: () => ({
        url: 'categories',
        method: 'GET',
        mode: 'cors',
      }),
      providesTags: ['Categories'],
    }),
    // //transformResponse: res => res.sort((a,b) => b.id - a.id)
    createCategories: builder.mutation({
      query: newCategories => ({
        url: `categories/`,
        method: 'POST',
        body: newCategories,
        mode: 'cors',
        prepareHeaders: headers => {
          // If we have a token set in state, let's assume that we should be passing it.
          headers.set('Content-type', 'application/json;')
          return headers
        },
      }),
    }),
    updateCategories: builder.mutation({
      query: updateCategories => ({
        url: `categories/${updateCategories.id}/`,
        method: 'PATCH',
        body: updateCategories,
        mode: 'cors',
        prepareHeaders: headers => {
          // If we have a token set in state, let's assume that we should be passing it.
          headers.set('Content-type', 'application/json;')
          return headers
        },
      }),
    }),
    deleteCategories: builder.mutation({
      query: id => ({
        url: `categories/${id}/`,
        method: 'DELETE',
        headers: {
          // If we have a token set in state, let's assume that we should be passing it.
          'Content-type': 'application/json; ',
        },
      }),
    }),

    // * Endpoints Careers

    getCareers: builder.query({
      query: () => ({
        url: 'careers',
        method: 'GET',
        mode: 'cors',
      }),
      providesTags: ['Careers'],
    }),
    // //transformResponse: res => res.sort((a,b) => b.id - a.id)
    createCareers: builder.mutation({
      query: newCareers => ({
        url: `careers/`,
        method: 'POST',
        body: newCareers,
        mode: 'cors',
        prepareHeaders: headers => {
          // If we have a token set in state, let's assume that we should be passing it.
          headers.set('Content-type', 'application/json;')
          return headers
        },
      }),
    }),
    updateCareers: builder.mutation({
      query: updateCareers => ({
        url: `careers/${updateCareers.id}/`,
        method: 'PATCH',
        body: updateCareers,
        mode: 'cors',
        prepareHeaders: headers => {
          // If we have a token set in state, let's assume that we should be passing it.
          headers.set('Content-type', 'application/json;')
          return headers
        },
      }),
    }),
    deleteCareers: builder.mutation({
      query: id => ({
        url: `careers/${id}/`,
        method: 'DELETE',
        headers: {
          // If we have a token set in state, let's assume that we should be passing it.
          'Content-type': 'application/json; ',
        },
      }),
    }),
  }),
})
export const {
  useGetJobsQuery,
  useCreateJobsMutation,
  useDeleteJobsMutation,
  useUpdateJobsMutation,
  useGetTalentQuery,
  useCreateTalentMutation,
  useDeleteTalentMutation,
  useUpdateTalentMutation,
  useGetCareersQuery,
  useCreateCareersMutation,
  useDeleteCareersMutation,
  useUpdateCareersMutation,
  useGetCategoriesQuery,
  useCreateCategoriesMutation,
  useDeleteCategoriesMutation,
  useUpdateCategoriesMutation,
} = apiSlice
