import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {

  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/40/49'}
          fotoPost={'https://picsum.photos/200/154'}
        />
        <Post
          nomeUsuario={'Bruna'}
          fotoUsuario={'https://picsum.photos/30/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />
        <Post
          nomeUsuario={'Jessica'}
          fotoUsuario={'https://picsum.photos/200/50'}
          fotoPost={'https://picsum.photos/200/130'}
        />
      </MainContainer>
    );
  }
}

export default App;
