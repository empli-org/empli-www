import { createApi } from '@reduxjs/toolkit/query/react'
import { endpoints, baseQuery } from '../baseConfig'

const { all, favs } = endpoints.companies

export const companyApi = createApi({
  /* 
          El código define un conjunto de endpoints de API para interactuar con 
          recursos relacionados con Empresas.
  
      Cada endpoint define un conjunto de operaciones que se pueden realizar sobre el recurso relacionado.
  
      El código utiliza Redux Toolkit y createApi para definir los endpoints y sus respectivas operaciones.
  
      El código también define hooks para acceder fácilmente a los endpoints y operaciones desde otros componentes de la aplicación.
  
      La mayoría de las operaciones incluyen el manejo de headers y otros parámetros de solicitud para autenticación y autorización en el servidor.
          
      El código utiliza los tagTypes para cachear los resultados y mejorar la eficiencia al recuperar datos ya obtenidos. 
      */

  reducerPath: 'companyApi',
  baseQuery,
  tagTypes: ['Favs'],
  endpoints: builder => ({
    // * Endpoints Plan

    getFavsProfiles: builder.query({
      query: ({ userId, queryString }) =>
        `/${all}/${userId}/${favs}?${queryString}`,
      providesTags: ['Favs'],
    }),
    updateFavProfile: builder.mutation({
      query: ({ userId, ...body }) => ({
        url: `/${all}/${userId}/${favs}`,
        method: 'PUT',
        body,
      }),
      invalidatesTags: ['Favs'],
    }),
    createJobOffer: builder.mutation({
      query: ({ userId, ...body }) => ({
        url: `/companies/${userId}/offers`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Offers'],
    }),
    getCompanyOffers: builder.query({
      query: ({ userId, queryString }) => ({
        url: `/companies/${userId}/offers?${queryString}`,
      }),
      providesTags: ['Offers'],
    }),
  }),
})

export const {
  useCreateJobOfferMutation,
  useGetCompanyOffersQuery,
  useGetFavsProfilesQuery,
  useLazyGetFavsProfilesQuery,
  useUpdateFavProfileMutation,
} = companyApi
