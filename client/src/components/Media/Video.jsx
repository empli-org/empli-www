import React, { useRef } from 'react'
import { motion } from 'framer-motion'

export const Video = ({ src }) => {
  const videoRef = useRef(null)

  const handlePlay = () => {
    videoRef.current.play()
  }

  const handlePause = () => {
    videoRef.current.pause()
  }

  return (
    <div
      className="relative h-0 w-full overflow-hidden"
      style={{ paddingBottom: '56.25%' }}
    >
      <motion.video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <source src={src} type="video/mp4" />
      </motion.video>
      <div className="absolute bottom-0 flex w-full justify-center">
        <motion.button
          className="m-4 rounded-full bg-black px-6 py-2 font-semibold text-white hover:bg-gray-800"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handlePlay}
        >
          Play
        </motion.button>
        <motion.button
          className="m-4 rounded-full bg-black px-6 py-2 font-semibold text-white hover:bg-gray-800"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handlePause}
        >
          Pause
        </motion.button>
      </div>
    </div>
  )
}
