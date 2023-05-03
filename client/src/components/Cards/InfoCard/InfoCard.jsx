import { Blob } from './Blob'
export const InfoCard = ({
  image,
  title,
  description,
  imageOnRight = false,
  background,
}) => {
  return (
    <div className={`flex flex-col md:flex-row bg-${background}-200`}>
      <div
        className={`w-full md:w-1/2 relative ${
          !imageOnRight
            ? 'order-last md:order-first'
            : 'order-last md:order-last'
        }`}
      >
        <img
          src={image}
          alt=""
          className="w-auto h-80 mx-auto absolute inset-0 m-auto"
        />
        <Blob />
      </div>
      <div
        className={`w-full md:w-1/2 p-4 ${
          !imageOnRight
            ? 'order-first md:order-last'
            : 'order-first md:order-first'
        } flex flex-col justify-center items-center`}
      >
        <h3 className="font-amenable text-2xl font-bold text-center mb-10">
          {title}
        </h3>
        <p className="text-justify font-quicksand">{description}</p>
      </div>
    </div>
  )
}
