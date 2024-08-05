import Cookies from 'js-cookie'
import { useDispatch } from "react-redux"
import { setUserData } from "../../../redux/reducers/user/userSlice"
import { Navigate } from "react-router-dom"
import { useState, useEffect } from "react"

export default function useDrawerListOpts() {
    const dispatch = useDispatch()
    const [validationAct, setValidationAct] = useState(null)

    useEffect(() => {
        const userNickname = window.localStorage.getItem('userNickname')
        const userEmail = window.localStorage.getItem('userEmail')
        const userName = window.localStorage.getItem('userName')
        const token = Cookies.get('token')

        if (!userNickname || !userEmail || !userName || !token) {
            Cookies.remove('token')
            setValidationAct(<Navigate to='/login' replace />)
        } else {
            dispatch(setUserData({
                name: userNickname,
                username: userEmail,
                email: userName,
                avatar: window.localStorage.getItem('userAvatar') ?? ''
            }))
            setValidationAct(null)
        }
        (() => setValidationAct(null))
    }, [dispatch])

    return { validationAct }
}
