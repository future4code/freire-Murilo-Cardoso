import React from 'react';
import Header from './components/Header';
import CardPerson from './components/CardPerson';
import ButtonTaste from './components/ButtonTaste';
import Clear from './components/Clear';
import styled from 'styled-components'

const MainApp = styled.div`
    width: 400px;
    height: 600px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 1px solid black;
    border-radius: 5px;
    background-color: white;
    box-shadow: rgb(0 0 0 / 6%) 0px 0px 5px;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
`;

function App() {
  return (
    <MainApp>
      <div>
        <Header/>
      </div>
      <div>
        <CardPerson/>
      </div>
      <div> 
      <ButtonTaste/>
      </div>   
      <Clear/>
    </MainApp>
  );
}

export default App;
