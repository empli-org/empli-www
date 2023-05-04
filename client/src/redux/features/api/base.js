// @ts-nocheck
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'

const BASE_URL_API = import.meta.env.VITE_API_URL_BASE

export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL_API }),
  tagTypes: ['Favs', 'Saved', 'Posts'],
  endpoints: builder => ({
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
  useCreateAccountMutation,
  useVerifyAccountMutation,
  useGetSavedOffersQuery,
  useSaveOfferMutation,
} = baseApi
