import { useEffect, useState } from 'react'
import { useUpload } from '@/hooks/upload'

export function CVForm() {
  const [file, setFile] = useState(null)
  const { loading, data, error } = useUpload(file)

  useEffect(() => {
    console.log(data)
  }, [data])

  const handleChange = e => {
    const file = e.target.files[0]
    setFile(file)
  }

  return (
    <div>
      {loading ? (
        <p>Cargando...</p>
      ) : data && !loading && !error ? (
        <p>CV Actualizado</p>
      ) : (
        <p>Sube tu cv</p>
      )}
      <input accept=".pdf" type="file" name="cv" onChange={handleChange} />
    </div>
  )
}
