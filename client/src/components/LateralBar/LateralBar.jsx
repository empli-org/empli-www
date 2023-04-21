import { FaWhatsapp } from 'react-icons/fa'
import { FiMail, FiInstagram, FiLinkedin } from 'react-icons/fi'
import { Link } from 'react-router-dom'

export const LateralBar = () => {
  return (
    <div className="rounde flex w-10 flex-col items-center justify-center overflow-hidden text-gray-400">
      <li className="z-20 flex w-full list-none flex-col items-start justify-stretch">
        <ul className="relative flex items-center justify-end gap-x-1 break-words rounded-lg p-4 text-xl text-blue-whale hover:bg-hint-of-red hover:font-bold hover:text-gulf-stream md:w-8/12 lg:w-fit">
          <Link className="flex w-full items-center justify-start" to="">
            <FaWhatsapp />
          </Link>
        </ul>
        <ul className="flex items-center justify-center gap-x-1 break-words rounded-lg p-4 text-xl text-blue-whale hover:bg-hint-of-red hover:font-bold hover:text-gulf-stream md:w-8/12 lg:w-fit">
          <Link
            className="flex items-center justify-center"
            to="mailto:santykpo11@gmail.com"
          >
            <FiMail />
          </Link>
        </ul>
        <ul className="flex items-center justify-center gap-x-1 break-words rounded-lg p-4 text-xl text-blue-whale hover:bg-hint-of-red hover:font-bold hover:text-gulf-stream md:w-8/12 lg:w-fit">
          <Link
            className="flex items-center justify-center gap-x-1"
            to="https://www.linkedin.com/company/empli/"
          >
            <FiLinkedin />
          </Link>
        </ul>
        <ul className="flex items-center justify-center gap-x-1 break-words rounded-lg p-4 text-xl text-blue-whale hover:bg-hint-of-red hover:font-bold hover:text-gulf-stream md:w-8/12 lg:w-fit">
          <Link
            className="flex items-center justify-center gap-x-1"
            to="https://www.instagram.com/empli_org/"
          >
            <FiInstagram />
          </Link>
        </ul>
      </li>
    </div>
  )
}
