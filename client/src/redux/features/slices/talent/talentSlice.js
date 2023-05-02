import { createApi } from '@reduxjs/toolkit/query/react'
import { endpoints, setHeaders, headers, baseQuery } from '../baseConfig'
export const talentSlice = createApi({
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
  tagTypes: ['Talents'],
  endpoints: builder => ({
    // * Endpoints Talents

    getTalent: builder.query({
      query: () => ({
        url: endpoints.talents,
        method: 'GET',
        mode: 'cors',
      }),
      providesTags: ['Talents'],
    }),
    // //transformResponse: res => res.sort((a,b) => b.id - a.id)
    createTalent: builder.mutation({
      query: newTalent => ({
        url: `${endpoints.talents}/`,
        method: 'POST',
        body: newTalent,
        mode: 'cors',
        prepareHeaders: () => setHeaders(headers),
      }),
    }),
    updateTalent: builder.mutation({
      query: updateTalent => ({
        url: `${endpoints.talents}/${updateTalent.id}/`,
        method: 'PATCH',
        body: updateTalent,
        mode: 'cors',
        prepareHeaders: () => setHeaders(headers),
      }),
    }),
    deleteTalent: builder.mutation({
      query: id => ({
        url: `${endpoints.talents}/${id}/`,
        method: 'DELETE',
        prepareHeaders: () => setHeaders(headers),
      }),
    }),
  }),
})

export const {
  useUpdateTalentMutation,
  useCreateTalentMutation,
  useDeleteTalentMutation,
  useGetTalentQuery,
  useLazyGetTalentQuery,
} = talentSlice
