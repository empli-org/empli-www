import { Blob } from './Blob'
export const InfoCard = ({
  image,
  title,
  description,
  imageOnRight = false,
}) => {
  return (
    <div className="flex w-full flex-col md:flex-row ">
      <div
        className={`relative w-full md:w-1/2 ${
          !imageOnRight
            ? 'order-last md:order-first'
            : 'order-first md:order-last'
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
            : 'order-last md:order-first'
        } flex flex-col items-center justify-center`}
      >
        <h3 className="amenable mb-10 text-center text-4xl font-bold text-blue-whale">
          {title}
        </h3>
        <p className="quicksand text-justify text-2xl font-semibold text-black">
          {description}
        </p>
      </div>
    </div>
  )
}
