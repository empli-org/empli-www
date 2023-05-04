import { WaveCir } from 'components'

export const SectionTitle = ({
  title,
  subtitle,
  textColor,
  imgColor,
  imageOnRight = false,
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
          className={` flex animate-pulse justify-center duration-500 ${
            !imageOnRight
              ? 'order-first md:order-last'
              : 'order-first md:order-first'
          } ${'hidden md:block'}`} /* La clase hidden oculta el componente en pantallas menores a md (768px) */
        >
          <WaveCir color={imgColor} />
        </div>
      </div>
    </>
  )
}
