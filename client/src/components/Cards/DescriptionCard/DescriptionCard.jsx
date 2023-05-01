// import { info } from '../../pages/info'
import { Projects } from '@/components/Projects/Projects'
import { Biography } from '../../Biografy/Biography'
import { Tags } from '../../Tags/Tags'
import { useState } from 'react'
import clsx from 'clsx'

const sections = [
  {
    name: 'Biografia',
    component: <Biography />,
  },
  {
    name: 'Habilidades',
    component: <Tags />,
  },
  {
    name: 'Proyectos',
    component: <Projects />,
  },
]

export const DescriptionCard = () => {
  //The local initial state is Biografia
  const [section, setSection] = useState(sections[0])

  return (
    <div className="m-2 flex w-full max-w-full justify-between gap-x-2 rounded-lg border border-white bg-white p-2">
      <div className="flex w-full max-w-full flex-col items-center">
        <div className="m-2 flex w-full items-center justify-around">
          {sections.map((s, idx) => (
            <button key={idx} onClick={() => setSection(sections[idx])}>
              <h2
                className={clsx(
                  'hover:easeout rounded-full border border-white p-3 text-xl font-bold duration-500 hover:bg-gulf-stream hover:bg-opacity-60 hover:underline hover:underline-offset-2 hover:shadow-sm hover:shadow-gray-500 focus:outline-none',
                  section.name === s.name && 'bg-gulf-stream underline',
                )}
              >
                {s.name}
              </h2>
            </button>
          ))}
        </div>
        <div className="py-4">{section?.component}</div>
      </div>
    </div>
  )
}
