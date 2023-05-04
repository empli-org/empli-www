import { Link } from 'react-router-dom'

export const Button = ({
  title,
  link,
  color = 'white',
  background,
  onClick = () => {},
}) => {
  return (
    <Link to={link} onClick={onClick}>
      <button
        className={`rounded-3xl border px-4 py-2 text-${color} bg-${background} font-ligth font-quicksand text-xs 
        font-bold uppercase tracking-widest border-${color} mx-auto transition duration-300 
      ease-in-out hover:bg-prussian-blue hover:font-bold  hover:text-white md:mx-0`}
      >
        {title}
      </button>
    </Link>
  )
}
