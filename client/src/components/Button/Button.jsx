import { Link } from 'react-router-dom'

// export const Button = ({
//   title,
//   link,
//   color = 'white',
//   background,
//   custom,
//   disabled = false,
//   onClick = () => {},
// }) => {
//   return (
//     <Link to={link} onClick={onClick}>
//       <button
//         disabled={disabled}
//         className={`rounded-3xl border px-4 py-2 text-${color} ${custom} bg-${background} font-ligth font-quicksand text-xs
//         font-bold uppercase tracking-widest ${
//           custom
//             ? custom
//             : `border-${color} hover:bg-prussian-blue hover:font-bold  hover:text-white`
//         } mx-auto transition duration-300
//       ease-in-out  md:mx-0`}
//       >
//         {title}
//       </button>
//     </Link>
//   )
// }

export const Button = ({
  title,
  link,
  white = false,
  custom,
  disabled = false,
  onClick = () => {},
  inverted = true, // Nueva propiedad para el estilo invertido
}) => {
  const textColor = inverted
    ? white
      ? 'white'
      : 'black'
    : white
    ? 'black'
    : 'white'
  const backgroundColor = inverted
    ? white
      ? 'white'
      : 'black'
    : white
    ? 'white'
    : 'black'
  const hoverTextColor = white
    ? inverted
      ? 'black'
      : 'white'
    : inverted
    ? 'white'
    : 'black'
  const hoverBackgroundColor = white ? (inverted ? 'white' : 'black') : 'black'
  const borderColor = white ? 'white' : 'black'

  let buttonStyles = ''

  if (custom) {
    buttonStyles = custom
  } else {
    if (inverted) {
      buttonStyles = `rounded-3xl border border-${borderColor} px-4 py-2 text-${textColor} bg-transparent font-quicksand text-xs font-bold uppercase tracking-widest mx-auto transition duration-300 ease-in-out hover:text-${hoverTextColor} hover:bg-${hoverBackgroundColor}`
    } else {
      buttonStyles = `rounded-3xl border border-${borderColor} px-4 py-2 text-${textColor} bg-${backgroundColor} font-quicksand text-xs font-bold uppercase tracking-widest hover:bg-transparent hover:font-bold hover:text-${hoverTextColor} mx-auto transition duration-300 ease-in-out`
    }
  }

  return (
    <Link to={link} onClick={onClick}>
      <button disabled={disabled} className={buttonStyles}>
        {title}
      </button>
    </Link>
  )
}

// buttonStyles = inverted
//   ? `rounded-3xl border px-4 py-2 border-${borderColor} text-${textColor} bg-transparent font-quicksand text-xs font-bold uppercase tracking-widest mx-auto transition duration-300 ease-in-out hover:border-${borderColor} hover:text-${textHover} hover:bg-${backgroundColor}`
//   : custom
//   ? `rounded-3xl border px-4 py-2 text-${color} ${custom} bg-${background} font-ligth font-quicksand text-xs
//           font-bold uppercase tracking-widest ${
//             custom
//               ? custom
//               : `border-${color} hover:bg-prussian-blue hover:font-bold  hover:text-white`
//           } mx-auto transition duration-300
//         ease-in-out  md:mx-0`
//   : `rounded-3xl border px-4 py-2 text-${textColor} bg-${backgroundColor} ${custom} font-quicksand text-xs font-bold uppercase tracking-widest border-${borderColor} hover:bg-transparent hover:font-bold hover:text-${textColor} mx-auto transition duration-300 ease-in-out`
