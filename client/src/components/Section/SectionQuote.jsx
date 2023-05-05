export const SectionQuote = ({ size, text }) => {
  return (
    <>
      <div className="w-full p-10">
        <h1
          className={`my-0 py-4 text-center font-quicksand text-5xl font-bold text-blue-whale md:text-6xl xl:text-${size}  `}
        >
          {text}
        </h1>
      </div>
    </>
  )
}
