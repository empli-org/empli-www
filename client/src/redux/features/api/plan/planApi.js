import { createApi } from '@reduxjs/toolkit/query/react'
import { endpoints, setHeaders, headers, baseQuery } from '../baseConfig'

const { all, link, base, subs } = endpoints.plans

export const planApi = createApi({
  /* 
          El código define un conjunto de endpoints de API para interactuar con 
          recursos relacionados con Planes de suscripcion.
  
      Cada endpoint define un conjunto de operaciones que se pueden realizar sobre el recurso relacionado.
  
      El código utiliza Redux Toolkit y createApi para definir los endpoints y sus respectivas operaciones.
  
      El código también define hooks para acceder fácilmente a los endpoints y operaciones desde otros componentes de la aplicación.
  
      La mayoría de las operaciones incluyen el manejo de headers y otros parámetros de solicitud para autenticación y autorización en el servidor.
          
      El código utiliza los tagTypes para cachear los resultados y mejorar la eficiencia al recuperar datos ya obtenidos. 
      */

  reducerPath: 'planApi',
  baseQuery,
  tagTypes: ['Plans'],
  endpoints: builder => ({
    // * Endpoints Plan

    getPlan: builder.query({
      query: () => ({
        url: `${base}/${all}s`,
        method: 'GET',
        mode: 'cors',
      }),
      providesTags: ['Plans'],
    }),
    getFeedbackPlan: builder.query({
      query: payment_id => ({
        url: `${base}/${all}/${subs}/${payment_id}`,
        method: 'GET',
        mode: 'cors',
      }),
      providesTags: ['Plans'],
    }),
    // //transformResponse: res => res.sort((a,b) => b.id - a.id)
    createPlan: builder.mutation({
      query: newPlan => ({
        url: `${base}/${all}/${link}`,
        method: 'POST',
        body: newPlan,
        mode: 'cors',
        prepareHeaders: () => setHeaders(headers),
      }),
    }),
    updatePlan: builder.mutation({
      query: updatePlan => ({
        url: `${base}/${all}/${updatePlan.id}/`,
        method: 'PUT',
        body: updatePlan,
        mode: 'cors',
        prepareHeaders: () => setHeaders(headers),
      }),
    }),
  }),
})

export const {
  useUpdatePlanMutation,
  useCreatePlanMutation,
  useGetPlanQuery,
  useGetFeedbackPlanQuery,
  useLazyGetFeedbackPlanQuery,
  useLazyGetPlanQuery,
} = planApi
