import { useState } from 'react'

export const useLocalStorage = (key, defaultValue) => {
  const [storageValue, setStorageValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : defaultValue
    } catch (error) {
      console.log(error)
    }
  })

  const setValue = value => {
    try {
      setStorageValue(value)
      window.localStorage.setItem(key, JSON.stringify(value))
    } catch (error) {
      console.log(error)
    }
  }

  return [storageValue, setValue]
}
