import { Link } from 'react-router-dom'

export const Button = ({
  title,
  link,
  color = 'white',
  background,
  extend,
  disabled = false,
  onClick = () => {},
}) => {
  return (
    <Link to={link} onClick={onClick}>
      <button
        disabled={disabled}
        className={`rounded-3xl border px-4 py-2 text-${color} ${extend} bg-${background} font-ligth font-quicksand text-xs 
        font-bold uppercase tracking-widest ${
          extend
            ? extend
            : `border-${color} hover:bg-prussian-blue hover:font-bold  hover:text-white`
        } mx-auto transition duration-300 
      ease-in-out  md:mx-0`}
      >
        {title}
      </button>
    </Link>
  )
}
