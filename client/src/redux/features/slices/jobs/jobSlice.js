import { createApi } from '@reduxjs/toolkit/query/react'
import { endpoints, setHeaders, headers, baseQuery } from '../baseConfig'

export const jobSlice = createApi({
  /* 
          El código define un conjunto de endpoints de API para interactuar con 
          recursos relacionados con trabajos.
  
      Cada endpoint define un conjunto de operaciones que se pueden realizar sobre el recurso relacionado.
  
      El código utiliza Redux Toolkit y createApi para definir los endpoints y sus respectivas operaciones.
  
      El código también define hooks para acceder fácilmente a los endpoints y operaciones desde otros componentes de la aplicación.
  
      La mayoría de las operaciones incluyen el manejo de headers y otros parámetros de solicitud para autenticación y autorización en el servidor.
          
      El código utiliza los tagTypes para cachear los resultados y mejorar la eficiencia al recuperar datos ya obtenidos. 
      */
  reducerPath: 'jobsApi',
  baseQuery,
  tagTypes: ['Jobs'],
  endpoints: builder => ({
    //* Endpoints Jobs

    getJobs: builder.query({
      query: () => ({
        url: endpoints.jobs,
        method: 'GET',
        mode: 'cors',
      }),
      providesTags: ['Jobs'],
    }),
    // //transformResponse: res => res.sort((a,b) => b.id - a.id)
    createJobs: builder.mutation({
      query: newJobs => ({
        url: `${endpoints.jobs}/`,
        method: 'POST',
        body: newJobs,
        mode: 'cors',
        prepareHeaders: headers => setHeaders(headers),
      }),
    }),
    updateJobs: builder.mutation({
      query: updateJobs => ({
        url: `${endpoints.jobs}/${updateJobs.id}/`,
        method: 'PATCH',
        body: updateJobs,
        mode: 'cors',
        prepareHeaders: headers => setHeaders(headers),
      }),
    }),
    deleteJobs: builder.mutation({
      query: id => ({
        url: `${endpoints.jobs}/${id}/`,
        method: 'DELETE',
        prepareHeaders: () => setHeaders(headers),
      }),
    }),
  }),
})

export const {
  useCreateJobsMutation,
  useDeleteJobsMutation,
  useGetJobsQuery,
  useLazyGetJobsQuery,
  useUpdateJobsMutation,
} = jobSlice
