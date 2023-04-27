import { Link } from 'react-router-dom'

export const Button = ({ title, link }) => {
    return (
        <Link to={link}>
            <button className="border border-white py-2 px-4 rounded-3xl text-white uppercase font-bold text-xs hover:bg-gray-500 hover:text-white transition duration-300 ease-in-out w-full md:w-auto mx-auto md:mx-0">
                {title}
            </button>
        </Link>
    )
}
