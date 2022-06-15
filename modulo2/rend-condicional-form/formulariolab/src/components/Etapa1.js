import React from "react";

function Etapa1() {
    return (
      <div>
        <h3>ETAPA 1 - DADOS GERAIS</h3>
        <p>1. Qual o seu nome?</p>
        <input></input>
        <p>2. Qual sua idade?</p>
        <input></input>
        <p>3. Qual seu email?</p>
        <input></input>
        <p>4. Qual a sua escolaridade?</p>
	      <select id="escolaridade" name="escolaridade">
		      <option value="EnsinoMIncompleto">Ensino médio Incompleto</option>
		      <option value="EnsinoMCompleto">Ensino Medio Completo</option>
		      <option value="EnsinoSIncompleto">Ensino Superior Incompleto </option>
          <option value="EnsinoSCompleto">Ensino Superior Completo </option>
	      </select>
      </div>
    );
  }
  
  export default Etapa1;