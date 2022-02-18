import axios from 'axios';
import React, {useEffect, useState} from 'react';

import './App.css';
import Character from './components/Character';
import styled from 'styled-components';

const Header1 = styled.h1`
    color: red;
    font-size: 100px;
    font-family: cursive;
`;

const App = () => {

 const [peeps,setPeeps] = useState()
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    axios.get('https://swapi.dev/api/people')
    .then(res =>{
      setPeeps(res.data)
    })
    .catch(err => console.log(err))
  },[])
  return (
    <div className="App">
      <Header1 className="Header">Characters</Header1>
      {peeps && peeps.map((el) => (
        <Character key={el.name} name={el.name} birth_year={el.birth_year} films={el.films}/>
      ))}
    </div>
  );
}

export default App;
