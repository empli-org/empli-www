// @ts-nocheck
import AliceCarousel from 'react-alice-carousel'
import empresa1 from 'assets/img/empresa.webp'
import empresa2 from 'assets/img/empresa2.webp'
import empresa3 from 'assets/img/empresa3.webp'
import empresa4 from 'assets/img/empresa4.webp'
import { SectionQuote } from '../Section/SectionQuote'

export const SlideCompanies = ({textQuote, textColorQuote , sizeQuote}) => {
  const items = [
    <div key="id" className="my-12 flex justify-between p-5">
      <img src={empresa1} alt="logo" className="mx-3 h-24 w-52" />
      <img src={empresa2} alt="logo" className="mx-3 h-24 w-52" />
      <img src={empresa3} alt="logo" className="mx-3 h-24 w-52" />
      <img src={empresa4} alt="logo" className="mx-3 h-24 w-52" />
    </div>,
  ]

  return (
    <div className=" flex flex-col">
      <div className="my-10">
        <SectionQuote text={textQuote} textColor={textColorQuote} size={sizeQuote}/>
      </div>
      <div>
        <AliceCarousel
          items={items}
          autoPlay
          infinite
          autoWidth
          swipeExtraPadding={2}
          disableButtonsControls
          disableDotsControls
          mouseTracking
          responsive={{
            820: { items: 4 },
          }}
          animationType="slide"
          animationDuration={8000}
          animationEasingFunction="ease-in-out"
        />
      </div>
    </div>
  )
}
