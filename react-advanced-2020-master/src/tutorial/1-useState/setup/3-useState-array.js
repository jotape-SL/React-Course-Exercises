import React from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data)
  const removeItem = (id) => {
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
    setBotaoReD("restore people")
  };
  const [BotaoReD, setBotaoReD] = React.useState("delete people");
  const efeitoReD = () => {
    if(BotaoReD === "restore people"){
      setBotaoReD("delete people")
      setPeople([...data])
    }else{
      setBotaoReD("restore people")
      setPeople([])
    }
  }

  return(
    <>
      {people.map(({id, name}) =>{
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        );
      })}
      <button className='btn' onClick={() => efeitoReD()}>
        {BotaoReD}
      </button>
    </>
  );
};

export default UseStateArray;
