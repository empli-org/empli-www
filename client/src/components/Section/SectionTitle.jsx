/* eslint-disable jsx-a11y/alt-text */
import { WaveCir } from 'components'
import { People4 } from '@/assets/Emplitos/people-4'

export const SectionTitle = ({
  title,
  subtitle,
  textColor,
  imgColor,
  imageOnRight = false,
  image,
  svg = true,
}) => {
  return (
    <>
      <div className="my-10 flex items-center justify-between">
        <div
          className={`flex flex-col p-2           
				${!imageOnRight ? 'order-last md:order-first' : 'order-last md:order-last'}`}
        >
          <div className={`mb-5 text-2xl text-${textColor}`}>
            <h1 className={`font-amenable text-3xl text-${textColor}`}>
              {title}
            </h1>
          </div>
          <div>
            <span className={`font-quicksand text-${textColor}`}>
              {subtitle}
            </span>
          </div>
        </div>
        <div
          className={` flex transition duration-300 ease-in-out animate-fade-in justify-center ${
            !imageOnRight
              ? 'order-first md:order-last'
              : 'order-first md:order-first'
          } ${'hidden md:block'}`} /* La clase hidden oculta el componente en pantallas menores a md (768px) */
        >
          {image ? (
            <img src={image} className="w-60" alt="" />
          ) : svg ? (
            <WaveCir color={imgColor || '#53917b'} />
          ) : (
            <People4 />
          )}
        </div>
      </div>
    </>
  )
}
