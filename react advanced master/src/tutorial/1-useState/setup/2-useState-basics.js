import React, { useState } from 'react';

const UseStateBasics = () => {
  const [text, setText] = useState('all you zombies!');
  const handleClick = () => {
    if (text == 'all you zombies!'){
      setText('all you people!');
    }else{
      setText('all you zombies!')
    }
  }
  return <>
    <h1>{text}</h1>
    <button type='button' className='btn' onClick={handleClick}>Change title</button>
  </>
};

export default UseStateBasics;
