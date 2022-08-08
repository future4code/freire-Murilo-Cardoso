import { useEffect } from "react"
import { useState } from "react"
import axios from "axios"

    

    export const useRequestData = () => {

        const [listTrips, setListTrips] = useState([])

        const getTripData = () => { axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/murilo/trips")
        
        .then((response)=>{
            setListTrips(response.data.trips)
            console.log(response.data)
        })
        .catch((err)=>{
            console.log(err.message)
        });
    }
        useEffect(() => {
            getTripData()
        },[])

        return listTrips
    }

