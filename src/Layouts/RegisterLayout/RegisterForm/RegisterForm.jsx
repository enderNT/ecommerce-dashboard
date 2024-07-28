import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { REGEX } from '../../../utils/constants'

export default function RegisterForm () {

  const [userDataObj, setUserDataObj] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  const [registerBtnActive, setRegisterBtnActive] = useState(true)

  useEffect(() => {
    disableButton(userDataObj)
  }, [userDataObj])

    const disableButton = (objValidate) => {
      let disabled = true
      if (
          objValidate['username'] !== '' &&
          REGEX.EMAIL.test(objValidate['email']) &&
          REGEX.PASSWORD.test(objValidate['password']) &&
          objValidate['password'] === objValidate['confirmPassword']
        ) {
          console.log('TODOS LOS CAMPOS DEBEN SER VALIDOS Y ACTIVAR EL BOTON')
        disabled = false
      }
      setRegisterBtnActive(disabled)
    }

    const handleUserDataChange = (evnt) => {
      const { value } = evnt.target
      if (evnt.target.id === 'userUsername') {
        setUserDataObj((prevValUserData) => {
          return { ...prevValUserData, username: value.trim() }
        })
      } else if (evnt.target.id === 'userEmail') {
        setUserDataObj((prevValUserData) => {
          return { ...prevValUserData, email: value.trim() }
        })
      } else if(evnt.target.id === 'userPassword') {
        setUserDataObj((prevValUserData) => {
          return { ...prevValUserData, password: value }
        })
      } else if(evnt.target.id === 'userConfirmPassword') {
        setUserDataObj((prevValUserData) => {
          return { ...prevValUserData, confirmPassword: value }
        })
      }
    }

  return (
    <div
      className='bg-[#F8F7FC] drop-shadow-lg rounded-[20px] max-w-[800px] h-[70%] w-[80%] flex flex-col justify-center items-center'
    >
      <label className='max-w-[400px] form-control'>
        <div className='label'>
          <span className='label-text font-normal text-base text-[#1E1E1E]'>Username</span>
        </div>
        <input
          onChange={handleUserDataChange}
          id='userUsername'
          type='text' className='bg-white input input-bordered border-[#D9D9D9]' placeholder='juan3000_'
        />
      </label>
      <label className='max-w-[400px] form-control'>
        <div className='label'>
          <span className='label-text font-normal text-base text-[#1E1E1E]'>Email</span>
        </div>
        <input
          onChange={handleUserDataChange}
          id='userEmail'
          type='text' className='bg-white input input-bordered border-[#D9D9D9]' placeholder='mailexample@mail.com'
        />
      </label>
      <label className='max-w-[400px] form-control'>
        <div className='label'>
          <span className='label-text font-normal text-base text-[#1E1E1E]'>Password</span>
        </div>
        <input
          onChange={handleUserDataChange}
          id='userPassword'
          type='text' className='bg-white input input-bordered border-[#D9D9D9]' placeholder='************'
        />
      </label>
      <label className='max-w-[400px] form-control'>
        <div className='label'>
          <span className='label-text font-normal text-base text-[#1E1E1E]'>Retype Password</span>
        </div>
        <input
          onChange={handleUserDataChange}
          id='userConfirmPassword'
          type='text' className='bg-white input input-bordered border-[#D9D9D9]' placeholder='************'
        />
      </label>
      <button
        disabled={registerBtnActive ?? null}
        className='my-2 bg-[#2C2C2C] btn btn-active text-[#F5F5F5]'
      >Register
      </button>
      <NavLink
        to='/login'
        className='my-1 link link-primary'
      >
        Do you have an account?.
        <br />
        Login.
      </NavLink>
    </div>
  )
}
