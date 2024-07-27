import { NavLink } from 'react-router-dom'
import './LoginForm.css'
import { useEffect, useState } from 'react'
import { loginApiCall } from '../../../utils/api'

export default function LoginForm() {

    const [userDataObj, setUserDataObj] = useState({
        username: "",
        password: ""
    })

    const [loginBtnActive, setLoginBtnActive] = useState(false)

    useEffect(() => {
        disableButton(userDataObj, ['username', 'password'])
    }, [userDataObj])

    const authenticate = async (userDataAuth) => {
        try {
            loginApiCall({
                "identity": userDataAuth.username,
                "password": userDataAuth.password
            })
            console.log('LA RESPUESTA OK FUE', data)
        } catch (error) {
            console.error('EL ERROR FUE',error)
        }
    }

    const handleUserDataChange = (evnt) => {
        const {value} = evnt.target
        if(evnt.target.id === "userUsername") {
            setUserDataObj((prevValUserData) => { 
                return {...prevValUserData, username: value}
            })
        } else if(evnt.target.id === "userPassword"){
            setUserDataObj((prevValUserData) => { 
                return {...prevValUserData, password: value}
            })
        }
    }
    
    /**
     * Validates all fields diferent from empty string in objValidate.
     * Fields is array of fields existing in objValidate
     * @param {Object} objValidate 
     * @param {Array} fields 
     * @returns Validation
     */
    const disableButton = (objValidate, fields) => { // Crear test unitarios
        const validFields = fields.some((val) => objValidate[val] === "")
        setLoginBtnActive(validFields)
    }

    return (
        <div
            className="bg-[#F8F7FC] drop-shadow-lg rounded-[20px] max-w-[800px] h-[70%] w-[80%] flex flex-col justify-center items-center">
            <label className='max-w-[400px] form-control'>
                <div className="label">
                    <span className="label-text font-normal text-base text-[#1E1E1E]">Email</span>
                </div>
                <input
                    id='userUsername'
                    onChange={handleUserDataChange}
                    type='text' className='bg-white input input-bordered border-[#D9D9D9]' placeholder='examplemail@mail.com' />
            </label>
            <label className='max-w-[400px] form-control'>
                <div className="label">
                    <span className="label-text font-normal text-base text-[#1E1E1E]">Password</span>
                </div>
                <input
                    id='userPassword'
                    onChange={handleUserDataChange}
                    type='text' className='bg-white input input-bordered border-[#D9D9D9]' placeholder='************' />
            </label>
            <button
                disabled={loginBtnActive ?? null}
                onClick={() => authenticate(userDataObj)}
                className="my-2 bg-[#2C2C2C] btn btn-active text-[#F5F5F5]">Sign in</button>
            <NavLink
                to="/register"
                className="my-1 link link-primary">
                Do not you have an account yet?.
                <br />
                Create a new.
            </NavLink>
        </div>
    )
}