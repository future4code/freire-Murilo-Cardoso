import { useEffect } from "react"
import { goToFeed } from "../Routes/coordinator"
import { useNavigate } from "react-router-dom"


const useUnprotectedPage = () => {

    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token){
            goToFeed(navigate)
        }
    }, [navigate])
}

export default useUnprotectedPage;