import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import { Button, CardPro } from 'components'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

export const CardBox = ({ data }) => {
  const gruposDeDiez = data.reduce((accumulator, obj, index) => {
    const indexGroup = Math.floor(index / 10)

    if (!accumulator[indexGroup]) {
      accumulator[indexGroup] = []
    }

    accumulator[indexGroup].push(obj)

    return accumulator
  }, [])

  const items = gruposDeDiez[0].map((obj, index) => (
    <div key={index} className="h-50 z-10 flex w-64 flex-auto">
      <CardPro rol={obj.rol} name={obj.name} logo={obj.logo} />
    </div>
  ))

  return (
    <div className="m-5 flex h-4/6 w-10/12 flex-col rounded-3xl bg-gray-900 p-2">
      <div className="m-5 flex flex-col items-end justify-end p-2 text-hint-of-red">
        <div className="text-2xl font-bold">
          <h1 className="text-3xl">Top Profesionales</h1>
        </div>
        <div>
          <span className="font-quicksand font-light">
            Más de <b>+200</b> ofertas por día
          </span>
        </div>
      </div>
      <AliceCarousel
        items={items}
        autoPlay
        disableDotsControls
        autoPlayInterval={1000}
        infinite
        autoWidth
        swipeExtraPadding={2}
        renderPrevButton={() => {
          // @ts-ignore
          return <Button title={<FaArrowLeft />} />
        }}
        renderNextButton={() => {
          // @ts-ignore
          return <Button title={<FaArrowRight />} />
        }}
        mouseTracking
        responsive={{
          820: { items: 4 },
        }}
      />

      <div className="flex w-full p-2 justify-end">
        <Button link="/talents" title="ver mas" />
      </div>
    </div>
  )
}
