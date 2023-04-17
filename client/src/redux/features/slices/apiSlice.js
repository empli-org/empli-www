// @ts-nocheck
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// eslint-disable-next-line no-unused-vars
const headers = {
  'Content-type': 'application/json;',
}

//* Creamos una instancia de "fetchBaseQuery" con la URL base de la API
const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_API_URL_BASE,
})

const endpoints = {
  jobs: 'jobs',
  talents: 'talents',
  categories: 'categories',
  careers: 'careers',
}

//* Función para configurar los headers de las peticiones
const setHeaders = headers => {
  headers['Content-type'] = 'application/json;'
  return headers
}

export const apiSlice = createApi({
  /* 
		El código define un conjunto de endpoints de API para interactuar con 
		recursos relacionados con trabajos, talentos, categorías y carreras.

    Cada endpoint define un conjunto de operaciones que se pueden realizar sobre el recurso relacionado.

    El código utiliza Redux Toolkit y createApi para definir los endpoints y sus respectivas operaciones.

    El código también define hooks para acceder fácilmente a los endpoints y operaciones desde otros componentes de la aplicación.

    La mayoría de las operaciones incluyen el manejo de headers y otros parámetros de solicitud para autenticación y autorización en el servidor.
		
    El código utiliza los tagTypes para cachear los resultados y mejorar la eficiencia al recuperar datos ya obtenidos. 
	*/

  reducerPath: 'api',
  baseQuery,
  tagTypes: ['Jobs', 'Categories', 'Talents', 'Careers'],
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
        headers: headers => setHeaders(headers),
      }),
    }),

    // * Endpoints Talents

    getTalent: builder.query({
      query: () => ({
        url: endpoints.talents,
        method: 'GET',
        mode: 'cors',
      }),
      providesTags: ['Talent'],
    }),
    // //transformResponse: res => res.sort((a,b) => b.id - a.id)
    createTalent: builder.mutation({
      query: newTalent => ({
        url: `${endpoints.talents}/`,
        method: 'POST',
        body: newTalent,
        mode: 'cors',
        prepareHeaders: headers => setHeaders(headers),
      }),
    }),
    updateTalent: builder.mutation({
      query: updateTalent => ({
        url: `${endpoints.talents}/${updateTalent.id}/`,
        method: 'PATCH',
        body: updateTalent,
        mode: 'cors',
        prepareHeaders: headers => setHeaders(headers),
      }),
    }),
    deleteTalent: builder.mutation({
      query: id => ({
        url: `${endpoints.talents}/${id}/`,
        method: 'DELETE',
        headers: headers => setHeaders(headers),
      }),
    }),

    // * Endpoints Categories

    getCategories: builder.query({
      query: () => ({
        url: endpoints.categories,
        method: 'GET',
        mode: 'cors',
      }),
      providesTags: ['Categories'],
    }),
    // //transformResponse: res => res.sort((a,b) => b.id - a.id)
    createCategories: builder.mutation({
      query: newCategories => ({
        url: `${endpoints.categories}/`,
        method: 'POST',
        body: newCategories,
        mode: 'cors',
        prepareHeaders: headers => setHeaders(headers),
      }),
    }),
    updateCategories: builder.mutation({
      query: updateCategories => ({
        url: `${endpoints.categories}/${updateCategories.id}/`,
        method: 'PATCH',
        body: updateCategories,
        mode: 'cors',
        prepareHeaders: headers => setHeaders(headers),
      }),
    }),
    deleteCategories: builder.mutation({
      query: id => ({
        url: `${endpoints.categories}/${id}/`,
        method: 'DELETE',
        headers: headers => setHeaders(headers),
      }),
    }),

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
        prepareHeaders: headers => setHeaders(headers),
      }),
    }),
    updateCareers: builder.mutation({
      query: updateCareers => ({
        url: `${endpoints.careers}/${updateCareers.id}/`,
        method: 'PATCH',
        body: updateCareers,
        mode: 'cors',
        prepareHeaders: headers => setHeaders(headers),
      }),
    }),
    deleteCareers: builder.mutation({
      query: id => ({
        url: `${endpoints.careers}/${id}/`,
        method: 'DELETE',
        headers: headers => setHeaders(headers),
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
