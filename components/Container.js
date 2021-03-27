import React from 'react'

const Container = ({ children }) => {
  return (
    <div className="max-w-5xl flex flex-col mx-auto items-center justify-between flex-1">
      {children}
    </div>
  )
}

export default Container
