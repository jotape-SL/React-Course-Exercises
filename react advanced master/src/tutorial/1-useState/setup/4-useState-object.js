import React, { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name:"peter", 
    age:"20", 
    message:"I'm not Spider-Man",
  });
  
  const changeMessage = () =>{
    if (person.message == "I'm not Spider-Man" ){
      setPerson({...person, message: "I'm Peter Parker"});
    }else{
      setPerson({...person, message: "I'm not Spider-Man"});
    }
  }
  return <>
    <h3>{person.name}</h3>
    <h3>{person.age}</h3>
    <h3>{person.message}</h3>
    <button className="btn" onClick={changeMessage}>Who are you then?</button>
  </>
};

export default UseStateObject;
