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
        className="absolute z-10 hidden sm:hidden md:block xl:block h-all w-80 rounded-br-2xl"
      />
      <img
        src={dialogue}
        alt="dialogue"
        className="absolute z-10 hidden sm:hidden md:block xl:block mr-56 mt-5 h-72 w-56"
      />
      <img
        src={text}
        alt="text"
        className="absolute z-20 hidden sm:hidden md:block xl:block mr-76 mt-12 h-56 w-32"
      />
      <img
        src={wave}
        alt="wave"
        className="absolute z-10 hidden sm:hidden md:block xl:block mr-80 mt-80 h-auto w-20"
      />
      <img
        src={wave}
        alt="wave"
        className="absolute z-10 hidden sm:hidden md:block xl:block mr-48 mt-14 h-auto w-20"
      />
      <img
        src={circle}
        alt="circle"
        className="absolute z-0 hidden sm:hidden md:block xl:block h-all w-all"
      />
    </div>
  )
}
