import { useState, useEffect } from 'react'

const getStorageData = (keyName, defaultValue) => {
  const savedItem = localStorage.getItem(keyName)
  const parsedItem = savedItem ? JSON.parse(savedItem) : null
  return parsedItem || defaultValue
}

export const useLocalStorage = (keyName, initialValue) => {
  const [value, setValue] = useState(() => {
    return getStorageData(keyName, initialValue)
  })

  useEffect(() => {
    localStorage.setItem(keyName, JSON.stringify(value))
  }, [keyName, value])

  return [value, setValue]
}
