import { CareerSearch, CloseIcon, Container } from 'components'
import { useState } from 'react'
import { CVForm } from './CVForm'
import { ContactInfo } from './ContactInfo'
import { InfoForm } from './InfoForm'
import { ProfileImageForm } from './ProfileImageForm'
import { AddInputDynamic } from './AddInputDynamic'

/* NOTE: esto es solo para la demo */

export function UserProfileForm() {
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

            <h1 className="my-4 text-xl font-bold">Curriculum Vitae</h1>

            <CVForm />

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
