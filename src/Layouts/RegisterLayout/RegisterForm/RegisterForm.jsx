import { NavLink } from 'react-router-dom'

export default function RegisterForm () {
  return (
    <div
      className='bg-[#F8F7FC] drop-shadow-lg rounded-[20px] max-w-[800px] h-[70%] w-[80%] flex flex-col justify-center items-center'
    >
      <label className='max-w-[400px] form-control'>
        <div className='label'>
          <span className='label-text font-normal text-base text-[#1E1E1E]'>Username</span>
        </div>
        <input
          id='userUsername'
          type='text' className='bg-white input input-bordered border-[#D9D9D9]' placeholder='juan3000_'
        />
      </label>
      <label className='max-w-[400px] form-control'>
        <div className='label'>
          <span className='label-text font-normal text-base text-[#1E1E1E]'>Email</span>
        </div>
        <input
          id='userEmail'
          type='text' className='bg-white input input-bordered border-[#D9D9D9]' placeholder='mailexample@mail.com'
        />
      </label>
      <label className='max-w-[400px] form-control'>
        <div className='label'>
          <span className='label-text font-normal text-base text-[#1E1E1E]'>Password</span>
        </div>
        <input
          id='userPassword'
          type='text' className='bg-white input input-bordered border-[#D9D9D9]' placeholder='************'
        />
      </label>
      <label className='max-w-[400px] form-control'>
        <div className='label'>
          <span className='label-text font-normal text-base text-[#1E1E1E]'>Retype Password</span>
        </div>
        <input
          id='userConfirmPassword'
          type='text' className='bg-white input input-bordered border-[#D9D9D9]' placeholder='************'
        />
      </label>
      <button
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
