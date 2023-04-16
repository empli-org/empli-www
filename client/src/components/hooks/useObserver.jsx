import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

const useIntersectionObserver = ({
  threshold = 0.5,
  rootMargin = '0px',
  animationDuration = 0.5,
  staggerChildren = 0.1,
  easing = 'easeInOut',
  direction = 'right',
  x = 50,
  fade = true,
} = {}) => {
  const [inView, setInView] = useState(false)
  const ref = useRef()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
        }
      },
      {
        rootMargin,
        threshold,
      },
    )
    observer.observe(ref.current)

    return () => {
      observer.disconnect()
    }
  }, [threshold, rootMargin])

  const variants = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: animationDuration,
        type: 'spring',
        ease: easing,
        when: 'beforeChildren',
        staggerChildren,
        delayChildren: staggerChildren,
      },
    },
    hidden: {
      opacity: 0,
      x: direction === 'left' ? -x : x,
    },
  }

  const animation = fade
    ? {
        initial: 'hidden',
        animate: inView ? 'visible' : 'hidden',
      }
    : {
        initial: { x: direction === 'left' ? -x : x },
        animate: inView ? { x: 0 } : { x: direction === 'left' ? -x : x },
        transition: {
          duration: animationDuration,
          type: 'spring',
          ease: easing,
        },
      }

  const AnimatedComponent = ({ children, ...rest }) => (
    <motion.div ref={ref} variants={variants} {...animation} {...rest}>
      {children}
    </motion.div>
  )

  return AnimatedComponent
}

export default useIntersectionObserver
