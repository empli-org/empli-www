import { CardPro } from '../Cards/CardPro/CardPro'
import imagen from '../../assets/emplitos-24.svg'
import { Podcast } from './Podcast'

export const ContainerMedia = () => {
  const link = [
    'https://open.spotify.com/embed/playlist/377JKfxwDSFNVi0bf1H53i?utm_source=generator&theme=0',
    'https://open.spotify.com/embed/playlist/377JKfxwDSFNVi0bf1H53i?utm_source=generator&theme=0',
  ]
  return (
    <div className="h-11/12 flex--wrap m-5 flex w-11/12 justify-center bg-hint-of-red bg-opacity-10 p-5">
      <label>Url</label>
      <input type="text" placeholder="" name="url" />
      <CardPro rol="" name="Videos" logo={imagen} />
      <CardPro rol="" name="Podcast" logo={imagen} />
      <CardPro rol="" name="Reels" logo={imagen} />
      {link.map((item, index) => {
        return (
          <select key={index}>
            <option>
              <Podcast linkShare={item} />
            </option>
          </select>
        )
      })}
    </div>
  )
}
