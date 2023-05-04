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
        className={`relative w-full md:w-1/2 ${
          !imageOnRight
            ? 'order-last md:order-first'
            : 'order-last md:order-last'
        }`}
      >
        <img
          src={image}
          alt=""
          className="absolute inset-0 m-auto mx-auto h-80 w-auto"
        />
        <Blob />
      </div>
      <div
        className={`w-full p-4 md:w-1/2 ${
          !imageOnRight
            ? 'order-first md:order-last'
            : 'order-first md:order-first'
        } flex flex-col items-center justify-center`}
      >
        <h3 className="mb-10 text-center font-amenable text-2xl font-bold">
          {title}
        </h3>
        <p className="text-justify font-quicksand">{description}</p>
      </div>
    </div>
  )
}
