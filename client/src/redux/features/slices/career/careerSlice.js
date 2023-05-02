import { createApi } from '@reduxjs/toolkit/query/react'
import { endpoints, setHeaders, headers, baseQuery } from '../baseConfig'

export const careerSlice = createApi({
  /* 
          El código define un conjunto de endpoints de API para interactuar con 
          recursos relacionados con carreras.
  
      Cada endpoint define un conjunto de operaciones que se pueden realizar sobre el recurso relacionado.
  
      El código utiliza Redux Toolkit y createApi para definir los endpoints y sus respectivas operaciones.
  
      El código también define hooks para acceder fácilmente a los endpoints y operaciones desde otros componentes de la aplicación.
  
      La mayoría de las operaciones incluyen el manejo de headers y otros parámetros de solicitud para autenticación y autorización en el servidor.
          
      El código utiliza los tagTypes para cachear los resultados y mejorar la eficiencia al recuperar datos ya obtenidos. 
      */

  reducerPath: 'careerApi',
  baseQuery,
  tagTypes: ['Careers'],
  endpoints: builder => ({
    // * Endpoints Careers

    getCareers: builder.query({
      query: () => ({
        url: endpoints.careers,
        method: 'GET',
        mode: 'cors',
      }),
      providesTags: ['Careers'],
    }),
    // //transformResponse: res => res.sort((a,b) => b.id - a.id)
    createCareers: builder.mutation({
      query: newCareers => ({
        url: `${endpoints.careers}/`,
        method: 'POST',
        body: newCareers,
        mode: 'cors',
        prepareHeaders: () => setHeaders(headers),
      }),
    }),
    updateCareers: builder.mutation({
      query: updateCareers => ({
        url: `${endpoints.careers}/${updateCareers.id}/`,
        method: 'PATCH',
        body: updateCareers,
        mode: 'cors',
        prepareHeaders: () => setHeaders(headers),
      }),
    }),
    deleteCareers: builder.mutation({
      query: id => ({
        url: `${endpoints.careers}/${id}/`,
        method: 'DELETE',
        prepareHeaders: () => setHeaders(headers),
      }),
    }),
  }),
})

export const {
  useGetCareersQuery,
  useCreateCareersMutation,
  useDeleteCareersMutation,
  useLazyGetCareersQuery,
  useUpdateCareersMutation,
} = careerSlice
