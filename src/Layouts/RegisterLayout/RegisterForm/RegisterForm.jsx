import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { REGEX } from '../../../utils/constants'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { registerUser } from '../../../redux/reducers/user/actions&Thunks'

export default function RegisterForm () {

  const dispatch = useDispatch()
  // const {isLoading} = useSelector(state => state.user)

  const [userDataObj, setUserDataObj] = useState({
    userFullName: '',
    username: '',
    email: '',
    password: '',
    passwordConfirm: ''
  })
  const [registerBtnActive, setRegisterBtnActive] = useState(true)

  useEffect(() => {
    disableButton(userDataObj)
  }, [userDataObj])

    const disableButton = (objValidate) => {
      let disabled = true
      if (
          objValidate['userFullName'] !== '' &&
          objValidate['username'] !== '' &&
          REGEX.EMAIL.test(objValidate['email']) &&
          REGEX.PASSWORD.test(objValidate['password']) &&
          objValidate['password'] === objValidate['passwordConfirm']
        ) {
        disabled = false
      }
      setRegisterBtnActive(disabled)
    }

    const handleUserDataChange = (evnt) => {
      const { value } = evnt.target
      if (evnt.target.id === 'userFullName') {
        setUserDataObj((prevValUserData) => {
          return { ...prevValUserData, userFullName: value.trim() }
        })
      } else if (evnt.target.id === 'userUsername') {
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
      } else if(evnt.target.id === 'userpasswordConfirm') {
        setUserDataObj((prevValUserData) => {
          return { ...prevValUserData, passwordConfirm: value }
        })
      }
    }

    const createUser = (objCreation) => {
      const bodyBuild = {
        name: objCreation.userFullName,
        username: objCreation.username,
        email: objCreation.email,
        password: objCreation.password,
        passwordConfirm: objCreation.passwordConfirm
      }
      dispatch(registerUser(bodyBuild))
        .then(result => {
          console.log('EL RESULTADO FUE\n', result)
        })
        .catch(e => console.error('error', e))
    }

  return (
    <div
      className='bg-[#F8F7FC] drop-shadow-lg rounded-[20px] max-w-[800px] h-[85%] w-[80%] flex flex-col justify-center items-center'
    >
      <label className='max-w-[400px] form-control'>
        <div className='label'>
          <span className='label-text font-normal text-base text-[#1E1E1E]'>Full Name</span>
        </div>
        <input
          onChange={handleUserDataChange}
          id='userFullName'
          type='text' className='bg-white input input-bordered border-[#D9D9D9]' placeholder='Jhon Doe'
        />
      </label>
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
          id='userpasswordConfirm'
          type='text' className='bg-white input input-bordered border-[#D9D9D9]' placeholder='************'
        />
      </label>
      <button
        onClick={() => createUser(userDataObj)}
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
