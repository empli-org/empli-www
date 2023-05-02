import { useState } from 'react'
import { ProyectForm } from './ProyectForm'

export function AddInputDynamic() {
  const [val, setVal] = useState([])
  const handleAdd = () => {
    setVal([...val, []])
  }
  const handleChange = (e, i) => {
    const inputData = [...val]
    inputData[i] = e.target.value
    setVal(inputData)
  }
  return (
    <>
      <button
        className="mb-4 rounded-lg bg-slate-800 px-6 py-4 text-white"
        type="button"
        onClick={handleAdd}
      >
        +
      </button>
      <div className="flex flex-col gap-4">
        {val.map((data, i) => (
          <ProyectForm
            i={i}
            key={i}
            handleChange={handleChange}
            removeProject={() => setVal(val.filter((v, idx) => idx !== i))}
          />
        ))}
      </div>
    </>
  )
}
