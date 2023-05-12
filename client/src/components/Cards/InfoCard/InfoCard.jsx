import { Blob } from './Blob'
import { ReactSVG } from 'react-svg'
import gradient from 'assets/blob/gradient.svg'
export const InfoCard = ({
  image,
  title,
  description,
  imageOnRight = false,
  background,
  extend,
  tExtend,
  pExtend,
  svg,
}) => {
  return (
    <div className={`flex flex-col md:flex-row bg-${background}-200 ${extend}`}>
      <div
        className={`relative w-full md:w-1/2 ${
          !imageOnRight
            ? 'order-last md:order-first'
            : 'order-last md:order-last'
        }`}
      >
        {(image && (
          <img
            src={image}
            alt=""
            className="absolute inset-0 m-auto mx-auto h-80 w-auto"
          />
        )) ||
          (svg && (
            <ReactSVG
              src={svg}
              className="absolute inset-0 m-auto mx-auto h-80 w-auto"
            />
          ))}
        <Blob />
      </div>
      <div
        className={`w-full p-4 md:w-1/2 ${
          !imageOnRight
            ? 'order-first md:order-last'
            : 'order-first md:order-first'
        } flex flex-col items-center justify-center`}
      >
        <h3 className={`mb-10 text-center font-amenable ${tExtend} text-2xl `}>
          {title}
        </h3>
        <p className={`${pExtend} text-justify font-quicksand`}>
          {description}
        </p>
      </div>
    </div>
  )
}
