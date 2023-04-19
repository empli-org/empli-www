import { Menu } from '@headlessui/react'
import { motion, useReducedMotion } from 'framer-motion'

const topVariants = {
  open: { rotate: 45, y: 7, originX: '16px', originY: '10px' },
  closed: { rotate: 0, y: 0 },
}

const centerVariants = {
  open: { opacity: 0 },
  closed: { opacity: 1 },
}

const bottomVariants = {
  open: { rotate: -45, y: -5, originX: '16px', originY: '22px' },
  closed: { rotate: 0, y: 0 },
}

export default function MobileMenu() {
  const shouldReduceMotion = useReducedMotion()
  const transition = shouldReduceMotion ? { duration: 0 } : {}
  return (
    <Menu>
      {({ open }) => {
        const state = open ? 'open' : 'closed'
        return (
          <>
            <Menu.Button
              aria-controls=""
              className="border-canvas-primary text-fg-muted inline-flex items-center justify-center rounded-lg p-2 transition focus:outline-none"
            >
              <span className="sr-only">Toggle menu</span>
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <motion.rect
                  animate={state}
                  variants={topVariants}
                  transition={transition}
                  x="6"
                  y="9"
                  width="20"
                  height="2"
                  rx="1"
                  fill="currentColor"
                />
                <motion.rect
                  animate={state}
                  variants={centerVariants}
                  transition={transition}
                  x="6"
                  y="15"
                  width="20"
                  height="2"
                  rx="1"
                  fill="currentColor"
                />
                <motion.rect
                  animate={state}
                  variants={bottomVariants}
                  transition={transition}
                  x="6"
                  y="21"
                  width="20"
                  height="2"
                  rx="1"
                  fill="currentColor"
                />
              </svg>
            </Menu.Button>
            {/* HERE GOING ITEMS */}
          </>
        )
      }}
    </Menu>
  )
}
