// @ts-nocheck
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import { Button, CardPro, SectionTitle } from 'components'
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
    <div className="relative flex h-4/6 w-full flex-col rounded-3xl bg-gray-900 p-2">
      <div className="mx-10">
        <SectionTitle
          imageOnRight={true}
          title="Top Talents"
          subtitle="Mas de 200 ofertas profesionales por dia"
          imgColor="#F6F2EC"
          textColor="hint-of-red"
        />
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

      <div className="absolute bottom-2 right-2 flex justify-end p-2 ">
        <Button link="/talents" title="ver mas" />
      </div>
    </div>
  )
}
