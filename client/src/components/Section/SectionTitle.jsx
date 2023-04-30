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
      <div className="flex items-center justify-between my-10">
        <div
          className={`flex flex-col p-2           
				${!imageOnRight ? 'order-last md:order-first' : 'order-last md:order-last'}`}
        >
          <div className={`text-2xl mb-5 text-${textColor} font-bold`}>
            <h1 className={`text-3xl text-${textColor}`}>{title}</h1>
          </div>
          <div>
            <span className={`font-quicksand text-${textColor}`}>
              {subtitle}
            </span>
          </div>
        </div>
        <div
          className={` flex justify-center animate-pulse duration-500 ${
            !imageOnRight
              ? 'order-first md:order-last'
              : 'order-first md:order-first'
          }`}
        >
          <WaveCir color={imgColor} />
        </div>
      </div>
    </>
  )
}
