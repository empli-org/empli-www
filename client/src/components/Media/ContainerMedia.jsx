import { CardPro } from '../Cards/CardPro/CardPro'
import imagen from '../../assets/emplitos-24.svg'
import { Podcast } from './Podcast'

export const ContainerMedia = () => {
  return (
    <div className="h-11/12 flex--wrap m-5 flex w-11/12 justify-center bg-hint-of-red bg-opacity-10 p-5">
      <CardPro rol="" name="Videos" logo={imagen} />
      <CardPro rol="" name="Podcast" logo={imagen} />
      <CardPro rol="" name="Reels" logo={imagen} />
      <Podcast />
    </div>
  )
}
