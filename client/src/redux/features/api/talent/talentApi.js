import { createApi } from '@reduxjs/toolkit/query/react'
import { endpoints, setHeaders, headers, baseQuery } from '../baseConfig'

const { all, careers, skills, saved } = endpoints.talents

export const talentApi = createApi({
  /* 
      El código define un conjunto de endpoints de API para interactuar con 
      recursos relacionados con talentos

      Cada endpoint define un conjunto de operaciones que se pueden realizar sobre el recurso relacionado.
  
      El código utiliza Redux Toolkit y createApi para definir los endpoints y sus respectivas operaciones.
  
      El código también define hooks para acceder fácilmente a los endpoints y operaciones desde otros componentes de la aplicación.
  
      La mayoría de las operaciones incluyen el manejo de headers y otros parámetros de solicitud para autenticación y autorización en el servidor.
          
      El código utiliza los tagTypes para cachear los resultados y mejorar la eficiencia al recuperar datos ya obtenidos. 
      */

  reducerPath: 'talentApi',
  baseQuery,
  tagTypes: ['Talents', 'Saved'],
  endpoints: builder => ({
    // * Endpoints Talents

    getTalent: builder.query({
      query: ({ queryString }) => ({
        url: ` /${all}?${queryString}`,
        method: 'GET',
        mode: 'cors',
      }),
      providesTags: ['Talents'],
    }),
    // //transformResponse: res => res.sort((a,b) => b.id - a.id)
    searchCareers: builder.query({
      query: key => `/${all}/${careers}${key ? `?key=${key}` : ''}`,
    }),
    searchSkills: builder.query({
      query: key => `/${all}/${skills}${key ? `?key=${key}` : ''}`,
    }),

    getTalentById: builder.query({
      query: id => `/${all}/${id}`,
    }),
    createTalent: builder.mutation({
      query: newTalent => ({
        url: `${all}/`,
        method: 'POST',
        body: newTalent,
        mode: 'cors',
        prepareHeaders: () => setHeaders(headers),
      }),
    }),
    updateTalent: builder.mutation({
      query: updateTalent => ({
        url: `${all}/${updateTalent.id}/`,
        method: 'PUT',
        body: updateTalent,
        mode: 'cors',
        prepareHeaders: () => setHeaders(headers),
      }),
    }),
    deleteTalent: builder.mutation({
      query: id => ({
        url: `${all}/${id}/`,
        method: 'DELETE',
        prepareHeaders: () => setHeaders(headers),
      }),
    }),
    getSavedOffers: builder.query({
      query: ({ userId, queryString }) =>
        `/${all}/${userId}/${saved}${queryString ? `?${queryString}` : ''}`,
      providesTags: ['Saved'],
    }),
    saveOffer: builder.mutation({
      query: ({ userId, ...body }) => ({
        url: `/${all}/${userId}/${saved}`,
        method: 'PUT',
        body,
      }),
      invalidatesTags: ['Saved'],
    }),
  }),
})

export const {
  useUpdateTalentMutation,
  useCreateTalentMutation,
  useDeleteTalentMutation,
  useGetTalentQuery,
  useLazyGetTalentQuery,
  useSearchCareersQuery,
  useSearchSkillsQuery,
  useGetTalentByIdQuery,
  useGetSavedOffersQuery,
  useSaveOfferMutation,
} = talentApi
