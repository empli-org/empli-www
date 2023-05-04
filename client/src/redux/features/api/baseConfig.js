// @ts-nocheck
import { fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const TOKEN = import.meta.env.VITE_MP_PUB_KEY

export const headers = {
  'Content-type': 'application/json;',
  Authorization: `Bearer ${TOKEN}`,
}

const BASE_URL = import.meta.env.VITE_API_URL_BASE

//* Creamos una instancia de "fetchBaseQuery" con la URL base de la API
export const baseQuery = fetchBaseQuery({
  baseUrl: 'http://localhost:3001/api' || BASE_URL,
})

// * manejo de endpoint
export const endpoints = {
  jobs: {
    all: 'jobs',
    search: 'search',
    locations: 'locations',
    areas: 'areas',
  },
  talents: {
    all: 'talents',
    careers: 'careers',
    skills: 'skills',
    saved: 'saved',
  },
  categories: 'categories',
  careers: 'careers',
  plans: {
    base: 'payments',
    all: 'plan',
    link: 'link',
    subs: 'subs',
  },
  accounts: {
    base: 'account',
    create: 'create',
    verify: 'verify',
  },
  news: {
    all: 'news',
  },
  companies: {
    all: 'companies',
    favs: 'favs',
  },
}

//* Función para configurar los headers de las peticiones
export const setHeaders = headers => {
  headers['Content-type'] = 'application/json;'
  headers['Authorization'] = `Bearer ${TOKEN}`
  return headers
}
