import { Link } from 'react-router-dom'
import { useMenuContext } from './MenuItem'

const contact = [
  {
    name: 'Sobre nosotros',
    description: 'Descubre lo que somos como nuestros servicios',
    to: '/about',
    icon: InfoCircle,
  },
  {
    name: 'Contacto',
    description: 'Encuentra la forma de mantenernos conectados',
    to: '/contact',
    icon: EnvelopeIcon,
  },
]

const community = [
  {
    name: 'Noticias',
    description: 'Mantente actualizado con todo lo nuevo',
    to: '/news',
    icon: NewspaperIcon,
  },
  {
    name: 'Media',
    description: 'Encuentra todo nuestro último contenido multimedia',
    to: '/media',
    icon: PlayCircleIcon,
  },
]

export function CommunityItems() {
  const { close } = useMenuContext()
  return (
    <div className="grid grid-cols-1 gap-6">
      {community.map(item => (
        <Link
          onClick={() => close()}
          key={item.name}
          to={item.to}
          className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
        >
          <div className="flex h-10 w-10 shrink-0 items-center justify-center text-white sm:h-12 sm:w-12">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-fog/50 text-blue-whale sm:h-12 sm:w-12">
              {item.icon ? <item.icon aria-hidden="true" /> : null}
            </span>
          </div>
          <div className="ml-4">
            <p className="text-sm font-medium text-gray-900">{item.name}</p>
            <p className="text-sm text-gray-500">{item.description}</p>
          </div>
        </Link>
      ))}
    </div>
  )
}

export function ContactItems() {
  const { close } = useMenuContext()
  return (
    <div className="grid grid-cols-1 gap-6">
      {contact.map(item => (
        <Link
          onClick={() => close()}
          key={item.name}
          to={item.to}
          className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
        >
          <div className="flex h-10 w-10 shrink-0 items-center justify-center text-white sm:h-12 sm:w-12">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-fog/50 text-blue-whale sm:h-12 sm:w-12">
              {item.icon ? <item.icon aria-hidden="true" /> : null}
            </span>
          </div>
          <div className="ml-4">
            <p className="text-sm font-medium text-gray-900">{item.name}</p>
            <p className="text-sm text-gray-500">{item.description}</p>
          </div>
        </Link>
      ))}
    </div>
  )
}

function PlayCircleIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="h-5 w-5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z"
      />
    </svg>
  )
}

function NewspaperIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="h-5 w-5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"
      />
    </svg>
  )
}

function EnvelopeIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="h-5 w-5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
      />
    </svg>
  )
}

function InfoCircle() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="h-5 w-5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
      />
    </svg>
  )
}
