import React from "react";
import {useNavigate} from 'react-router-dom'
/* import { InputApplication } from "../services/styled"; */
/* import { InputApplicationInput } from "../services/styled"; */
import useForm from "../hooks/useForm";
import countryList from "../services/countryList";


export const ApplicationFormPage = () => {



    const navigate = useNavigate()

    //FUNÇÃO PARA ROTA DE PAGINA 

    const goToHome = () => {
        navigate (-1)
    }

    ///////////\\\\\\\\\\\\

    const { form, onChange, cleanFields } = useForm({
        name: "",
        age: "",
        applicationText: "",
        profession: "",
        country: "",
        trip: "",
      });

        //FUNÇÃO QUE LIMPA OS INPUTS 

     const register = (event) => {
        event.preventDefault();
        console.log("Formulário enviado!", form);
        cleanFields();
      }; 

        //FUNÇÃO MAP DOS PAISES 

      const countryListAll = countryList.map(pais => {
        return <option>{pais}</option>
     })

    return(
        <div>
            <strong>Inscreva-se para uma viagem</strong>
            <p>Para o usuário se candidatar à viagens, página que vai ter o formulário de inscrição</p>
            <form onSubmit={register}>
                <h1>Inscreva-se para uma viagem</h1>
                <select
                    name={"trip"}
                    value={form.trip}
                    onChange={onChange}
                    required>
                    <option>Escolha uma Viagem</option>
                    <option></option>
                </select>
                <input
                    name={"nome"}
                    value={form.nome}
                    onChange={onChange}
                    placeholder="Nome"
                    required
                    pattern={"^.{5,}"}
                    title={"O nome deve ter no mínimo 5 letras"}
                />
                <input
                    name={"idade"}
                    value={form.age}
                    onChange={onChange}
                    placeholder="Idade"
                    required //propriedade que exige campo obrigatório
                    type={"number"} //tipo da propriedade input "numero"
                    min={18} //propriedade de "min" que o "number" possui
                />
                <input
                    name={"texto"}
                    value={form.applicationText}
                    onChange={onChange}
                    placeholder="Texto de Candidatura"
                    required
                    type={"text"}
                    pattern={"^.{10,}"}
                    title={"O texto deve ter no mínimo 10 caracteres"}
                />
                <input
                    name={"profissão"}
                    value={form.profession}
                    onChange={onChange}
                    placeholder="Profissão"
                    required
                    type={"text"}
                    pattern={"^.{10,}"}
                    title={"O texto deve ter no mínimo 10 caracteres"}
                />
                <select
                    name={"country"}
                    value={form.country}
                    required
                    onChange={onChange}>
                    <option>Escolha um Pais</option>
                    {countryListAll}
                </select>
            </form>
            <div className="divBotao">
                <button onClick={goToHome}>Voltar</button>
                <button>Enviar</button>
            </div>
        </div>
    )
}