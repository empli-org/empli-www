import { useEffect, useState } from 'react'

const CLOUD_PRESET = import.meta.env.VITE_CLOUD_PRESET
const CLOUD_URL = import.meta.env.VITE_CLOUD_URL

async function uploadFile(file) {
  const data = new FormData()
  data.append('file', file)
  data.append('upload_preset', CLOUD_PRESET)
  return fetch(CLOUD_URL, {
    method: 'post',
    body: data,
  })
}

export function useUpload(file) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (file) {
      setLoading(true)
      uploadFile(file)
        .then(response => response.json())
        .then(setData)
        .catch(setError)
        .finally(() => setLoading(false))
    }
  }, [file])

  return {
    data,
    loading,
    error,
  }
}
