export const dateSortOptions = [
  { label: 'Recientes', value: 'desc' },
  { label: 'Mas antiguos', value: 'asc' },
]

export const experienceSortOptions = [
  { label: 'Mayor experiencia', value: 'asc' },
  { label: 'Menor experiencia', value: 'desc' },
]

export const locationFilterOptions = [
  { label: 'Todos', value: 'all' },
  { label: 'Lima', value: 'lima' },
  { label: 'Trujillo', value: 'trujillo' },
  { label: 'Arequipa', value: 'arequipa' },
  { label: 'Machala', value: 'machala' },
  { label: 'Fortaleza', value: 'fortaleza' },
]

export const queryStringFromObj = obj =>
  Object.keys(obj)
    .map(key => obj[key] && key + '=' + obj[key])
    .join('&')
