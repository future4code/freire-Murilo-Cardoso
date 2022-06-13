import React from "react";


function Etapa3() {
    return (
      <div>
        <h3>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h3>
        <p>5. Por que você não terminou um curso de graduação?</p>
        <input></input>
        <p>2. Você fez algum curso complementar?</p>
        <label for="curso"> Curso:  </label>
	      <select id="curso" name="curso">
		    <option value="Curso1">Nenhum</option>
		    <option value="Curso2">Curso Técnico</option>
		    <option value="Curso3">Curso de inglês</option>
        </select>
      </div>
    );
  }
  
  export default Etapa3;