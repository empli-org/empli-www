import AliceCarousel from 'react-alice-carousel'
import empresa1 from '@/assets/img/empresa2.webp'
import empresa2 from '@/assets/img/empresa2.webp'
import empresa3 from '@/assets/img/empresa3.webp'
import empresa4 from '@/assets/img/empresa4.webp'

export const SlideCompanies = () => {
  const items = [
    <div key="id" className="my-12 flex justify-between p-5">
      <img src={empresa1} alt="logo" className="h-24 w-52" />
      <img src={empresa2} alt="logo" className="h-24 w-52" />
      <img src={empresa3} alt="logo" className="h-24 w-52" />
      <img src={empresa4} alt="logo" className="h-24 w-52" />
    </div>,
  ]

  return (
    <div>
      <AliceCarousel
        items={items}
        autoPlay
        autoPlayInterval={5000}
        infinite
        autoWidth
        swipeExtraPadding={2}
        disableButtonsControls
        disableDotsControls
        mouseTracking
        responsive={{
          820: { items: 3 },
        }}
      />
    </div>
  )
}
