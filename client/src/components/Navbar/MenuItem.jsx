import { Popover, Transition } from '@headlessui/react'
import { Fragment, createContext, useContext, useRef } from 'react'

const MenuContext = createContext({ close })

export const useMenuContext = () => useContext(MenuContext)

export function MenuItem({ label, children }) {
  const buttonRef = useRef(null)
  const timeoutDuration = 200
  let timeout

  const closePopover = () => {
    return buttonRef.current?.dispatchEvent(
      new KeyboardEvent('keydown', {
        key: 'Escape',
        bubbles: true,
        cancelable: true,
      }),
    )
  }

  const onMouseEnter = open => {
    clearTimeout(timeout)
    if (open) return
    return buttonRef.current?.click()
  }

  const onMouseLeave = open => {
    if (!open) return
    timeout = setTimeout(() => closePopover(), timeoutDuration)
  }

  return (
    <Popover className="relative">
      {({ open, close }) => (
        <MenuContext.Provider value={{ close }}>
          <Popover.Button
            ref={buttonRef}
            className={`
                ${open ? '' : 'text-opacity-90'}
                group inline-flex items-center rounded-md py-2 text-sm text-gray-700 hover:text-opacity-100 focus:outline-none`}
            onMouseEnter={onMouseEnter.bind(null, open)}
            onMouseLeave={onMouseLeave.bind(null, open)}
          >
            <span className="uppercase font-bold tracking-widest">{label}</span>
          </Popover.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel
              className="absolute left-1/2 z-[999] mt-3 w-screen max-w-sm -translate-x-16 transform px-4 sm:px-0 lg:max-w-lg"
              onMouseEnter={onMouseEnter.bind(null, open)}
              onMouseLeave={onMouseLeave.bind(null, open)}
            >
              <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                {children}
              </div>
            </Popover.Panel>
          </Transition>
        </MenuContext.Provider>
      )}
    </Popover>
  )
}

function MenuItemBody({ children }) {
  return (
    <div className="relative grid grid-cols-1 gap-8 bg-[#fbfbfb] p-7">
      {children}
    </div>
  )
}

MenuItem.Body = MenuItemBody
