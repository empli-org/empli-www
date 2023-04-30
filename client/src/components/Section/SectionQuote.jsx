export const SectionQuote = ({ size, text }) => {
  return (
    <>
      <div className="p-10 w-full">
        <h1
          className={`font-quicksand text-center py-4 my-0 text-blue-whale font-bold text-5xl md:text-6xl xl:text-${size}  `}
        >
          {text}
        </h1>
      </div>
    </>
  )
}
