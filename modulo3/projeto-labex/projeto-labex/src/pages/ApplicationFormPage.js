import React, { useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom'
/* import { InputApplication } from "../services/styled"; */
/* import { InputApplicationInput } from "../services/styled"; */
import useForm from "../hooks/useForm";
import countryList from "../services/countryList";
import axios from 'axios'

export const ApplicationFormPage = () => {

    const [listTrips, setListTrips] = useState([])

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
        id: ""
      });

        //FUNÇÃO QUE LIMPA OS INPUTS 

    const register = (event) => {
        event.preventDefault();
        console.log("Formulário enviado!", form);
        

        const body = {
            name: form.name,
            age: form.age,
            applicationText: form.applicationText,
            profession: form.profession,
            country: form.country
        }
        axios.post(
            `https://us-central1-labenu-apis.cloudfunctions.net/labeX/:aluno/trips/${form.id}/apply`, body
        )
        .then((res)=>{
            console.log("deu certo!")
        })
        .catch((err)=>{
            console.log("erro!")
        })

        cleanFields();
    }; 

    ///////////\\\\\\\\\\\\

        //FUNÇÃO MAP DOS PAISES 

    const countryListAll = countryList.map(pais => {
        return <option>{pais}</option>
    })

    ///////////\\\\\\\\\\\\


    const getTrip = () => {
        axios.get(
            `https://us-central1-labenu-apis.cloudfunctions.net/labeX/murilo/trips`
        )
        .then((res)=>{
            console.log("deu certo!")
            setListTrips(res.data.trips)
        })
        .catch((err)=>{
            console.log("erro!")
        })
    }

    useEffect(()=>{
        getTrip()
    },[])


    return(
        <div>
            <strong>Inscreva-se para uma viagem</strong>
            <p>Para o usuário se candidatar à viagens, página que vai ter o formulário de inscrição</p>
            <form onSubmit={register}>
                <h1>Inscreva-se para uma viagem</h1>
                <select
                    name={"id"}
                    onChange={onChange}
                    required
                    defaultValue={form.id}
                    >
                    <option>Escolha uma Viagem</option>
                    {listTrips && listTrips.map(trip=>{
                        return ( 
                        <option 
                        key={trip.id} 
                        value={trip.id}>
                        {trip.name}
                        </option>
                        )})}
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
                    name={"age"}
                    value={form.age}
                    onChange={onChange}
                    placeholder="Idade"
                    required //propriedade que exige campo obrigatório
                    type={"number"} //tipo da propriedade input "numero"
                    min={18} //propriedade de "min" que o "number" possui
                />
                <input
                    name={"applicationText"}
                    value={form.applicationText}
                    onChange={onChange}
                    placeholder="Texto de Candidatura"
                    required
                    type={"text"}
                    pattern={"^.{10,}"}
                    title={"O texto deve ter no mínimo 10 caracteres"}
                />
                <input
                    name={"profession"}
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
                <div className="divBotao">
                <button onClick={goToHome}>Voltar</button>
                <button>Enviar</button>
            </div>
            </form>

        </div>
    )
}