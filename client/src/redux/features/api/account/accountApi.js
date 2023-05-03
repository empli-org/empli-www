import { createApi } from '@reduxjs/toolkit/query/react'
import { endpoints, baseQuery } from '../baseConfig'

const { base, create, verify } = endpoints.accounts

export const accountApi = createApi({
  /* 
          El código define un conjunto de endpoints de API para interactuar con 
          recursos relacionados con Planes de suscripcion.
  
      Cada endpoint define un conjunto de operaciones que se pueden realizar sobre el recurso relacionado.
  
      El código utiliza Redux Toolkit y createApi para definir los endpoints y sus respectivas operaciones.
  
      El código también define hooks para acceder fácilmente a los endpoints y operaciones desde otros componentes de la aplicación.
  
      La mayoría de las operaciones incluyen el manejo de headers y otros parámetros de solicitud para autenticación y autorización en el servidor.
          
      El código utiliza los tagTypes para cachear los resultados y mejorar la eficiencia al recuperar datos ya obtenidos. 
      */

  reducerPath: 'accountApi',
  baseQuery,
  tagTypes: ['Account'],
  endpoints: builder => ({
    // * Endpoints Plan

    createAccount: builder.mutation({
      query: body => ({
        url: `/${base}/${create}`,
        method: 'POST',
        body,
      }),
    }),
    verifyAccount: builder.mutation({
      query: body => ({
        url: `/${base}/${verify}`,
        method: 'POST',
        body,
      }),
    }),
  }),
})

export const { useCreateAccountMutation, useVerifyAccountMutation } = accountApi
