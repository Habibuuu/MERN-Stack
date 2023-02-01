
import axios from "axios";
import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useSignup = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const { dispatch } = useAuthContext()

    const signup = async (email, password) => {
        const user = { email, password }
        setIsLoading(true)
        setError(null)
        try {
            // save the user to local storage
            const res = await axios.post('/api/user/signup', user)
            console.log(res.data)
            localStorage.setItem('user', JSON.stringify(res.data))

            // update the auth context
            dispatch({type: 'LOGIN', payload: res.data})

            setIsLoading(false)
        } catch (err) {
            setIsLoading(false)
            setError(err.response.data.error)
        }
    }

    return { signup, error, isLoading }
}