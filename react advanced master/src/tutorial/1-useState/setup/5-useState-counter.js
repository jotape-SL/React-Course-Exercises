import React, { useState } from 'react';

const UseStateCounter = () => {
  const [value, setValue] = useState(0);
  const complexIncrease = () => {
    setTimeout(() =>{
      setValue((prevState) => {
        return prevState + 1;
      });
    }, 2000);
  };
  return <>
    <section>
      <h1 style={{margin: '3rem 0'}}>regular counter</h1>
      <h1>{value}</h1>
      <button className="btn" onClick={() => setValue(value - 1)}>decrease</button>
      <button className="btn" onClick={() => setValue(0)}>reset</button>
      <button className="btn" onClick={() => setValue(value + 1)}>increase</button>

      <h1 style={{margin: '4rem 0'}}>complex counter</h1>
      <h1>{value}</h1>
      <button className="btn" onClick={complexIncrease}>increase later</button>
    </section>
  </>
};

export default UseStateCounter;
