import React from 'react'
import { Timeline } from 'react-twitter-widgets'
import { motion } from 'framer-motion'

export const TimeLine = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="mx-auto my-8 max-w-2xl"
    >
      <Timeline
        dataSource={{
          sourceType: 'profile',
          screenName: 'thought_true',
        }}
        options={{
          tweetLimit: 5,
          width: '100%',
        }}
      />
    </motion.div>
  )
}
