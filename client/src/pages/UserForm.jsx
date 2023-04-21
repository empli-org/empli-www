// @ts-nocheck
import { CareerSearch } from '@/components/Search/CareerSearch'
import { CloseIcon } from '@/components/icons/CloseIcon'
import { Container } from '@/components/ui/Container'
import { useState } from 'react'
import { Image } from 'cloudinary-react'
import { useUpload } from '@/hooks/upload'

const inputCls =
  'rounded-md border border-slate-200 p-3 outline-none focus:ring-2'

/* NOTE: esto es solo para la demo */
export default function UserProfileForm() {
  const [skills, setSkills] = useState([])

  const addSkill = item => {
    const found = skills.find(i => i.name === item.name)
    if (found) return
    setSkills([...skills, item])
  }

  return (
    <div>
      <Container>
        <div className="py-12">
          <form
            onSubmit={e => e.preventDefault()}
            className="mx-auto max-w-2xl rounded-lg bg-white px-8 py-12 shadow-lg"
          >
            <h1 className="mb-4 text-xl font-bold">Perfil público</h1>

            <ProfileImageForm />

            <InfoForm />

            <h1 className="my-4 text-xl font-bold">Habilidades</h1>

            <CareerSearch onSelect={item => addSkill(item)} />

            {skills?.length > 0 && (
              <ul className="flex items-center gap-4 py-4 text-sm">
                {skills?.map((item, idx) => (
                  <li
                    className="flex items-center gap-2 rounded-lg bg-slate-300 p-2"
                    key={idx}
                  >
                    <span>{item.name}</span>
                    <button
                      type="button"
                      onClick={() =>
                        setSkills(skills.filter((v, i) => i !== idx))
                      }
                    >
                      <CloseIcon className="h-4 w-4" />
                    </button>
                  </li>
                ))}
              </ul>
            )}

            <h1 className="my-4 text-xl font-bold">Proyectos</h1>

            <AddInputDynamic />

            <h1 className="my-4 text-xl font-bold">Contacto</h1>

            <ContactInfo />

            <div className="py-4">
              <button
                type="submit"
                className="rounded-lg bg-slate-800 px-6 py-4 text-white"
              >
                Guardar
              </button>
            </div>
          </form>
        </div>
      </Container>
    </div>
  )
}

function AddInputDynamic() {
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

function ProfileImageForm() {
  const [file, setFile] = useState(null)
  const { loading, data } = useUpload(file)
  const image = data?.public_id || null

  const handleChange = e => {
    const file = e.target.files[0]
    setFile(file)
  }

  return (
    <div>
      {!loading && image ? (
        <div className="aspect-s w-24 overflow-hidden rounded-lg">
          <Image cloudName="dvzhqzjkm" publicId={image} />
        </div>
      ) : (
        <div className="aspect-square w-24 rounded-lg bg-slate-200" />
      )}
      <input
        accept="image/*"
        type="file"
        name="image"
        onChange={handleChange}
      />
    </div>
  )
}

function InfoForm() {
  return (
    <div>
      <div className="flex flex-col gap-2">
        <label htmlFor="name">Nombre</label>
        <input
          className={inputCls}
          type="text"
          placeholder="Nombre"
          id="name"
          name="name"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="lastname">Apellido</label>
        <input
          className={inputCls}
          type="text"
          placeholder="Apellido"
          id="lastname"
          name="lastname"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="age">Edad</label>
        <input
          className={inputCls}
          type="text"
          placeholder="Edad"
          id="age"
          name="age"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="career">Carrera</label>
        <input
          className={inputCls}
          type="text"
          placeholder="Carrera"
          id="career"
          name="career"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="tuition">Colegiatura</label>
        <input
          className={inputCls}
          type="text"
          placeholder="Numero colegiatura"
          id="tuition"
          name="tuition"
        />
      </div>
    </div>
  )
}

function ProyectForm({ i, removeProject, handleChange }) {
  const id = `pname-${i}`
  return (
    <div className="relative rounded-lg bg-slate-100 p-6 pt-8">
      <button
        onClick={() => removeProject(i)}
        type="button"
        className="absolute right-4 top-4"
      >
        <CloseIcon />
      </button>
      <div className="flex flex-col">
        <label htmlFor={id}>Nombre</label>
        <input
          className={inputCls}
          onChange={handleChange}
          type="text"
          placeholder="Nombre del proyecto"
          name={id}
          id={id}
        />
      </div>
    </div>
  )
}

function ContactInfo() {
  return (
    <>
      <div className="flex flex-col gap-2">
        <label htmlFor="email">Email</label>
        <input
          className={inputCls}
          type="text"
          placeholder="Correo"
          id="email"
          name="email"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="website">Portfolio</label>
        <input
          className={inputCls}
          type="text"
          placeholder="website"
          id="website"
          name="website"
        />
      </div>
    </>
  )
}
