// @ts-nocheck
import { fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const TOKEN = import.meta.env.VITE_MP_PUB_KEY

export const headers = {
  'Content-type': 'application/json;',
  Authorization: `Bearer ${TOKEN}`,
}

//* Creamos una instancia de "fetchBaseQuery" con la URL base de la API
export const baseQuery = fetchBaseQuery({
  baseUrl: 'http://localhost:3001/api/' || import.meta.env.VITE_API_URL_BASE,
})

export const endpoints = {
  jobs: 'jobs',
  talents: 'talents',
  categories: 'categories',
  careers: 'careers',
  plan: 'plans',
}
//* Función para configurar los headers de las peticiones
export const setHeaders = headers => {
  headers['Content-type'] = 'application/json;'
  headers['Authorization'] = `Bearer ${TOKEN}`
  return headers
}
