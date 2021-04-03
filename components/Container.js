import React from 'react'

const Container = ({ children }) => {
  return (
    <div class="relative">
      <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">{children}</div>
    </div>
  )
}

export default Container
