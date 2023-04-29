import { Link } from 'react-router-dom'

export const Button = ({ title, link, color = 'white', background }) => {
  return (
    <Link to={link}>
      <button
        className={`border py-2 px-4 rounded-3xl text-${color} bg-${background} tracking-widest font-quicksand font-ligth 
        uppercase font-bold text-xs border-${color} hover:bg-prussian-blue hover:text-white hover:font-bold 
      transition duration-300 ease-in-out w-full md:w-auto mx-auto md:mx-0`}
      >
        {title}
      </button>
    </Link>
  )
}
