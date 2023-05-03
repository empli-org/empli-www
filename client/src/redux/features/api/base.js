import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'

const BASE_URL_API = import.meta.env.VITE_API_URL_BASE

export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL_API }),
  tagTypes: ['Favs', 'Saved', 'Posts'],
  endpoints: builder => ({
    getPosts: builder.query({
      query: queryString => `/news?${queryString}`,
      providesTags: ['Posts'],
    }),
    getPostById: builder.query({
      query: id => `/news/${id}`,
    }),
    createPost: builder.mutation({
      query: body => ({
        url: '/news',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Posts'],
    }),
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
      query: ({ queryString }) => `/talents?${queryString}`,
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
    getSavedOffers: builder.query({
      query: ({ userId, queryString }) =>
        `/talents/${userId}/saved${queryString ? `?${queryString}` : ''}`,
      providesTags: ['Saved'],
    }),
    saveOffer: builder.mutation({
      query: ({ userId, ...body }) => ({
        url: `/talents/${userId}/saved`,
        method: 'PUT',
        body,
      }),
      invalidatesTags: ['Saved'],
    }),
    getFavsProfiles: builder.query({
      query: ({ userId, queryString }) =>
        `/companies/${userId}/favs?${queryString}`,
      providesTags: ['Favs'],
    }),
    favProfile: builder.mutation({
      query: ({ userId, ...body }) => ({
        url: `/companies/${userId}/favs`,
        method: 'PUT',
        body,
      }),
      invalidatesTags: ['Favs'],
    }),
  }),
})

export const {
  useGetFavsProfilesQuery,
  useFavProfileMutation,
  useGetPostsQuery,
  useGetPostByIdQuery,
  useCreatePostMutation,
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
  useGetSavedOffersQuery,
  useSaveOfferMutation,
} = baseApi
