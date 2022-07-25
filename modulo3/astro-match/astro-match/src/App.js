import React from 'react';
import styled from 'styled-components'
import MatchCard from './components/MatchCard';
import CardPerson from './components/CardPerson';
import Header from './components/Header'
import { useState } from 'react';


const MainApp = styled.div`
    width: 400px;
    height: 600px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 1px solid black;
    border-radius: 5px;
    background-color: #fffffffd;
    box-shadow: rgb(0 0 0 / 6%) 0px 0px 5px;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
`;

const App = () => {


const [screen, setScreen] = useState("pagina atual")
  
 const ChangeScreen = () => {
  switch (screen) {
      case "pagina atual":
        return <CardPerson/>
      case "match card":
        return <MatchCard/>
      default:
        return <div>erro!</div>
    }
  };
  const goToMatch = () => {
    setScreen("match card")
  } 
  const goToHome = () => {
    setScreen("pagina atual")
  }

  return (
    <MainApp>
      <Header 
        home={goToHome}
        match={goToMatch}/>
      {ChangeScreen()}
{/*       <CardPerson/> */}
{/*       <MatchCard/> */}
    </MainApp>
  );
}

export default App;
