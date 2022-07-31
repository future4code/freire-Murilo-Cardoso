import { useEffect } from "react"
import { goToLogin } from "../Routes/coordinator"
import { useNavigate } from "react-router-dom"


const useProtectedPage = () => {

    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (!token){
            goToLogin(navigate)
        }
    }, [navigate])
}

export default useProtectedPage;