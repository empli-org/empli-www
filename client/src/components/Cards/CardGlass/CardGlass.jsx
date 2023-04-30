import React from 'react'
import { FaDraftingCompass } from 'react-icons/fa'

export const CardGlass = () => {
  return (
    <div className="backdrop-blur-4xl absolute -right-96 bottom-20 z-50 flex h-16 w-72 justify-stretch rounded-2xl bg-gulf-stream bg-opacity-40 px-1 shadow-inner backdrop-filter hover:shadow-inner hover:shadow-gulf-stream sm:hidden md:hidden lg:flex">
      <div className="flex w-2/6 items-center">
        <img
          className="w-full overflow-hidden rounded-2xl object-contain p-2"
          src="https://th.bing.com/th/id/R.860c18f42440cb416f97fd5a85bc8305?rik=OkJYS3%2fKcz%2fBtw&pid=ImgRaw&r=0"
          alt="logo"
        />
      </div>

      <div className=" flex w-full flex-col justify-center">
        <div className="flex items-center justify-start gap-x-10">
          <span className="mb-2 flex text-xs font-bold text-black">
            Carlos J. Gonzalez
          </span>
          <span className="animate-pulse rounded-full bg-gulf-stream px-1 text-xs font-semibold text-green-900">
            +80 Match
          </span>
        </div>
        <div className="flex items-center gap-x-2 px-2">
          <FaDraftingCompass />
          <span className="text-sm">Arquitecto</span>
        </div>
      </div>
    </div>
  )
}
