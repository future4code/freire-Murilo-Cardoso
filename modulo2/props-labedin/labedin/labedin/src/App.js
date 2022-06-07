import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://media-exp2.licdn.com/dms/image/C4E03AQGaX2aVfmGkkQ/profile-displayphoto-shrink_800_800/0/1521516644371?e=1660176000&v=beta&t=4lvetZ9fe3cwCr4hGnt4KKumXXux1OrUMw4BhVbVGGA" 
          nome="Murilo Abreu Cardoso" 
          descricao="Olá meu nome É Murilo, muito prazer. Gosto muito de uma praia, tocar violão, sou apaixonado por musica, arte e esporte em geral. Já trabalhei como vendedor, fotográfo, desinger e social media. Gosto de trabalhar e agregar se útil a comunidade em que me encontro. "
        />
        
        <ImagemButton 
          imagem="https://w7.pngwing.com/pngs/302/689/png-transparent-logo-plus-and-minus-signs-symbol-symbol-miscellaneous-logo-sign-thumbnail.png" 
          texto="Ver mais"
        />
      </div>
      <div className="email-container">
        <CardPequeno
          imagem="https://www.caceres.mt.leg.br/banco-de-imagens/email.png"  
          email="murilo_mac@hotmail.com"
          campo="email"
        />
        <CardPequeno
          imagem="https://www.jacui.mg.leg.br/imagens/local.png"
          email="rua rua rua abc"
          campo="endereço"
        />
      </div>
      <div className="page-section-container">
        <h2>Experiências profissionais</h2><p></p>
        <CardGrande 
          imagem="https://uploads-ssl.webflow.com/5e790d30d198385b09366d8f/5efbb5055f2478ba2bc322d0_icone_gif.gif" 
          nome="Labenu" 
          descricao="Formando desenvolvedores para o mercado de trabalho!" 
        />
        <CardGrande 
          imagem="https://www.nasa.gov/sites/default/files/thumbnails/image/nasa-logo-web-rgb.png" 
          nome="NASA" 
          descricao="Apontando defeitos." 
        />
      </div>
      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        
        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />
      </div>  

    </div>
  );
}

export default App;
