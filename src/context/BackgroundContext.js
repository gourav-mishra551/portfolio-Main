import React, { createContext, useContext, useState } from 'react'

const BackgroundContext = createContext({ isDarkLeft: false })

export const useBackground = () => useContext(BackgroundContext)

export const BackgroundProvider = ({ children }) => {
  const [isDarkLeft, setIsDarkLeft] = useState(false)
  return (
    <BackgroundContext.Provider value={{ isDarkLeft, setIsDarkLeft }}>
      {children}
    </BackgroundContext.Provider>
  )
}
