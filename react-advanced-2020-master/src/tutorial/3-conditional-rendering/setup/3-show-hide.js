import React, { useState, useEffect } from 'react';

const ShowHide = () => {
  const [show, setShow] = useState(false);
  return <>
    <buttton className="btn" onClick={() => setShow(!show)}>show/hide</buttton>
    {show && <Item/>}
  </>;
};

const Item = () => {
  const [size, setSize] = useState(window.innerWidth);
  const checkSise = () => {
    setSize(window.innerWidth);
  }

  useEffect (() => {
    window.addEventListener('resize', checkSise);
    return () => {
      window.removeEventListener('resize', checkSise)
    }
  },[]);

  return (
  <div style={{marginTop: '2rem'}}>
    <h1>window</h1>
    <h2>size: {size} Px</h2>
  </div>
  );
}

export default ShowHide;
