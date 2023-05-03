import { createApi } from '@reduxjs/toolkit/query/react'
import { endpoints, setHeaders, headers, baseQuery } from '../baseConfig'

export const categoryApi = createApi({
  /* 
          El código define un conjunto de endpoints de API para interactuar con 
          recursos relacionados con categorías.
  
      Cada endpoint define un conjunto de operaciones que se pueden realizar sobre el recurso relacionado.
  
      El código utiliza Redux Toolkit y createApi para definir los endpoints y sus respectivas operaciones.
  
      El código también define hooks para acceder fácilmente a los endpoints y operaciones desde otros componentes de la aplicación.
  
      La mayoría de las operaciones incluyen el manejo de headers y otros parámetros de solicitud para autenticación y autorización en el servidor.
          
      El código utiliza los tagTypes para cachear los resultados y mejorar la eficiencia al recuperar datos ya obtenidos. 
      */

  reducerPath: 'categoryApi',
  baseQuery,
  tagTypes: ['Categories'],
  endpoints: builder => ({
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
        prepareHeaders: () => setHeaders(headers),
      }),
    }),
    updateCategories: builder.mutation({
      query: updateCategories => ({
        url: `${endpoints.categories}/${updateCategories.id}/`,
        method: 'PATCH',
        body: updateCategories,
        mode: 'cors',
        prepareHeaders: () => setHeaders(headers),
      }),
    }),
    deleteCategories: builder.mutation({
      query: id => ({
        url: `${endpoints.categories}/${id}/`,
        method: 'DELETE',
        prepareHeaders: () => setHeaders(headers),
      }),
    }),
  }),
})

export const {
  useCreateCategoriesMutation,
  useDeleteCategoriesMutation,
  useGetCategoriesQuery,
  useLazyGetCategoriesQuery,
  useUpdateCategoriesMutation,
} = categoryApi
