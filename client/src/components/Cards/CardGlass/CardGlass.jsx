import React from 'react'
import { FaDraftingCompass } from 'react-icons/fa'

export const CardGlass = () => {
  return (
    <div className="backdrop-blur-4xl absolute -top-40 right-96 z-50 flex w-4/12 justify-stretch rounded-2xl bg-white bg-opacity-80 px-1 shadow-inner backdrop-filter hover:shadow-inner hover:shadow-gulf-stream">
      <div className="w-1/5">
        <img
          className="w-full rounded-2xl p-2"
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
