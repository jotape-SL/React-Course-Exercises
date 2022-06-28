import React from 'react'

const ErrorExample = () => {
  let title = 'all you zombies!'
  const handleClick = () => {
    title = 'all you not zombies!'
  }
  return (
    <>
      <h2>{title}</h2>
      <button type='button' className='btn' onClick={handleClick}>
        change the title
      </button>
    </>
  )
}

// function ErrorExample(){

// }

export default ErrorExample
