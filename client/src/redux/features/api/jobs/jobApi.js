import { createApi } from '@reduxjs/toolkit/query/react'
import { endpoints, setHeaders, headers, baseQuery } from '../baseConfig'

const { all, search, locations, areas } = endpoints.jobs

export const jobApi = createApi({
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
      query: ({ queryString, page }) => ({
        url: `/${all}?published=true&page=${page}&${queryString}`,
        method: 'GET',
        mode: 'cors',
      }),
      providesTags: ['Jobs'],
    }),
    // //transformResponse: res => res.sort((a,b) => b.id - a.id)
    searchJobs: builder.query({
      query: key => ({
        url: `/${all}/${search}?key=${key}`,
      }),
      providesTags: ['Jobs'],
    }),
    getJobByCode: builder.query({
      query: code => `/${all}/${code}`,
      providesTags: ['Jobs'],
    }),
    getJobLocations: builder.query({
      query: key => `/${all}/${locations}${key ? `?key=${key}` : ''}`,
      providesTags: ['Jobs'],
    }),
    getJobAreas: builder.query({
      query: key => `/${all}/${areas}${key ? `?key=${key}` : ''}`,
      providesTags: ['Jobs'],
    }),
    createJobs: builder.mutation({
      query: newJobs => ({
        url: `${all}/`,
        method: 'POST',
        body: newJobs,
        mode: 'cors',
        prepareHeaders: () => setHeaders(headers),
      }),
    }),
    updateJobs: builder.mutation({
      query: updateJobs => ({
        url: `${all}/${updateJobs.id}/`,
        method: 'PATCH',
        body: updateJobs,
        mode: 'cors',
        prepareHeaders: () => setHeaders(headers),
      }),
    }),
    deleteJobs: builder.mutation({
      query: id => ({
        url: `${all}/${id}/`,
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
  useSearchJobsQuery,
  useGetJobLocationsQuery,
  useGetJobAreasQuery,
  useGetJobByCodeQuery,
  useLazyGetJobsQuery,
  useUpdateJobsMutation,
} = jobApi
