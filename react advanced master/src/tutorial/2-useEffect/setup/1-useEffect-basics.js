import React, { useState, useEffect } from 'react'
// by default runs after every re-render
// cleanup function
// second parameter, the condition to call useEffect
// linha 14 o segundo paramentro do useEffect, se deixar os colchetes vazios so ira chamar a funcao uma vez na redenizacao inicial

const UseEffectBasics = () => {
  const [value, setValue] = useState(0)
  useEffect(() => {
    console.log('call useEffect')
    if (value >= 1) {
      document.title = `Suco de Abacaxota(${value})`
    }
  }, [value])
  console.log('render component')
  return (
    <>
      <h1>{value}</h1>
      <button className='btn' onClick={() => setValue(value + 1)}>
        Dont click me
      </button>
    </>
  )
}

export default UseEffectBasics
