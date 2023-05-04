import { createApi } from '@reduxjs/toolkit/query/react'
import { endpoints, baseQuery } from '../baseConfig'

const { all } = endpoints.news

export const newsApi = createApi({
  /* 
          El código define un conjunto de endpoints de API para interactuar con 
          recursos relacionados con blog de noticias.
  
      Cada endpoint define un conjunto de operaciones que se pueden realizar sobre el recurso relacionado.
  
      El código utiliza Redux Toolkit y createApi para definir los endpoints y sus respectivas operaciones.
  
      El código también define hooks para acceder fácilmente a los endpoints y operaciones desde otros componentes de la aplicación.
  
      La mayoría de las operaciones incluyen el manejo de headers y otros parámetros de solicitud para autenticación y autorización en el servidor.
          
      El código utiliza los tagTypes para cachear los resultados y mejorar la eficiencia al recuperar datos ya obtenidos. 
      */

  reducerPath: 'newsApi',
  baseQuery,
  tagTypes: ['Posts'],
  endpoints: builder => ({
    // * Endpoints Plan

    getPosts: builder.query({
      query: queryString => `/${all}?${queryString}`,
      providesTags: ['Posts'],
    }),
    getPostById: builder.query({
      query: id => `/${all}/${id}`,
    }),
    createPost: builder.mutation({
      query: body => ({
        url: `/${all}`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Posts'],
    }),
  }),
})

export const {
  useCreatePostMutation,
  useGetPostByIdQuery,
  useGetPostsQuery,
  useLazyGetPostByIdQuery,
  useLazyGetPostsQuery,
} = newsApi
