export const SectionCard = ({ title, image, feat, stx = false }) => {
  let size = stx ? 'cover' : ''
  return (
    <>
      <div className="relative flex mx-5 p-2 flex-col rounded-2xl w-96 bg-white shadow-lg hover:shadow-black-300 hover:shadow-2xl hover:transition-shadow md:w-86">
        <div
          className="w-full h-40 flex items-center justify-center rounded-2xl mb-2"
          style={{ background: `url(${image})`, backgroundSize: size }}
        >
          <h1 className=" text-blue-whale text-center font-quicksand text-xl lg:text-xl font-bold">
            {title}
          </h1>
        </div>
        <div className={`relative flex flex-col item-center rounded-2xl`}>
          <div className=" mt-2 flex justify-center  p-4">
            <p className="flex items-center text-justify text-md font-quicksand text-blue-whale">
              {feat}
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
