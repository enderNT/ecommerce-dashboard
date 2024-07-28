import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { REGEX } from '../../../utils/constants'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { registerUser } from '../../../redux/reducers/user/actions&Thunks'

export default function RegisterForm () {

  const dispatch = useDispatch()

  const [userDataObj, setUserDataObj] = useState({
    userFullName: '',
    username: '',
    email: '',
    password: '',
    passwordConfirm: ''
  })
  const [registerBtnActive, setRegisterBtnActive] = useState(true)
  const [isError, setIsError] = useState(false)
  const [invalidFields, setInvalidFields] = useState({
    email: false, password: false,
    passwordConfirm: false
  })

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
          const hasId = !!result.payload.id;
          setIsError(!hasId);
          console.log('EL RESULTADO FUE\n', result);
          if (hasId) {
            console.log('HUBO RESULTADO Y FUE:', result.payload);
          }
        })
        .catch(e => console.error('error', e))
    }

    const validateFields = (evnt) => {
      const {value, id} = evnt.target
      if (id === "userEmail" && value !== "") {
        setInvalidFields((preValue) => {
          return {...preValue, email: !REGEX.EMAIL.test(value)}
        })
      } else if (id === "userPassword" && value !== "") {
        setInvalidFields((preValue) => {
          return {...preValue, password: !REGEX.PASSWORD.test(value)}
        })
      } else if (id === "userpasswordConfirm" && value !== "") {
        setInvalidFields((preValue) => {
          return {...preValue, passwordConfirm: !(userDataObj.password === value)}
        })
      } 
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
          onBlur={validateFields}
          onChange={handleUserDataChange}
          id='userEmail'
          type='text' className='bg-white input input-bordered border-[#D9D9D9]' placeholder='mailexample@mail.com'
        />
      </label>
      {invalidFields.email && <span className='text-xs font-normal'>Must be a valid email</span>}
      <label className='max-w-[400px] form-control'>
        <div className='label'>
          <span className='label-text font-normal text-base text-[#1E1E1E]'>Password</span>
        </div>
        <input
          onBlur={validateFields}
          onChange={handleUserDataChange}
          id='userPassword'
          type='text' className='bg-white input input-bordered border-[#D9D9D9]' placeholder='************'
        />
      </label>
      {invalidFields.password && <span className='text-xs font-normal'>
        Your password must have at least 8 characters and a maximum of 32
        <br/>
        - Lowercase
        - Uppercase
        - Numbers.
        </span>}
      <label className='max-w-[400px] form-control'>
        <div className='label'>
          <span className='label-text font-normal text-base text-[#1E1E1E]'>Retype Password</span>
        </div>
        <input
          onBlur={validateFields}
          onChange={handleUserDataChange}
          id='userpasswordConfirm'
          type='text' className='bg-white input input-bordered border-[#D9D9D9]' placeholder='************'
        />
      </label>
      {invalidFields.passwordConfirm && <span className='text-xs font-normal'>
        Both passwords must be valid and the same.
        </span>}
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
      {isError && <span>Hubo un error</span>}
    </div>
  )
}
