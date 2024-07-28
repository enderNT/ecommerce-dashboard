import { useSelector, useDispatch } from 'react-redux'
import LoginForm from '../../Layouts/LoginLayouts/LoginForm/LoginForm'
import LoginHeader from '../../Layouts/LoginLayouts/LoginHeader/LoginHeader'
import { useEffect } from 'react'
import { setError } from '../../redux/reducers/user/userSlice'

export default function LoginPage () {
  const dispatch = useDispatch()
  const { hasError } = useSelector(state => state.user)
  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(setError())
    }, 3000)
    return () => clearInterval(timer)
  }, [dispatch, hasError])
  return (
    <div className='bg-white h-screen w-full flex flex-col'>
      <header className='h-[8vh]'>
        <LoginHeader />
      </header>
      <main
        className='h-[92vh] w-full flex flex-wrap items-center justify-center'
      >
        <LoginForm />
        {hasError && (<div role='alert' className='max-w-[400px] alert alert-error'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6 shrink-0 stroke-current'
            fill='none'
            viewBox='0 0 24 24'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z'
            />
          </svg>
          <span>Hubo un error</span>
        </div>)}
      </main>
    </div>
  )
}
