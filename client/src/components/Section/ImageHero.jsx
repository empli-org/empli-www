// @ts-nocheck
// import { BackGroundTop } from './BackGroundTop'
import wave from 'assets/Landing/wave.svg'
import ob from 'assets/Landing/ob.svg'
import dialogue from 'assets/Landing/dialogue.svg'
import text from 'assets/Landing/text.svg'
import circle from 'assets/Landing/circle.svg'

export const ImageHero = () => {
  return (
    <div className="flex w-11/12 justify-end">
      <img
        src={ob}
        alt="ob"
        className="absolute z-10 hidden h-all w-80 rounded-br-2xl sm:hidden md:block xl:block"
      />
      <img
        src={dialogue}
        alt="dialogue"
        className="absolute z-10 mr-56 mt-5 hidden h-72 w-56 sm:hidden md:block xl:block"
      />
      <img
        src={text}
        alt="text"
        className="absolute z-20 mr-76 mt-12 hidden h-56 w-32 sm:hidden md:block xl:block"
      />
      <img
        src={wave}
        alt="wave"
        className="absolute z-10 mr-80 mt-80 hidden h-auto w-20 sm:hidden md:block xl:block"
      />
      <img
        src={wave}
        alt="wave"
        className="absolute z-10 mr-48 mt-14 hidden h-auto w-20 sm:hidden md:block xl:block"
      />
      <img
        src={circle}
        alt="circle"
        className="absolute z-0 hidden h-all w-all sm:hidden md:block xl:block"
      />
    </div>
  )
}
