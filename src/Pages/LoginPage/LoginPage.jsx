import { useSelector } from 'react-redux'
import LoginForm from '../../Layouts/LoginLayouts/LoginForm/LoginForm'
import LoginHeader from '../../Layouts/LoginLayouts/LoginHeader/LoginHeader'
import useLoader from '../../customHooks/useLoader'

export default function LoginPage () {

  const {isLoading} = useSelector(state => state.user)
  const {loader} = useLoader(isLoading)

  return (
    <div className='bg-white h-screen w-full flex flex-col'>
      <header className='h-[8vh]'>
        <LoginHeader />
      </header>
      <main
        className='h-[92vh] w-full flex flex-wrap items-center justify-center'
        >
        <LoginForm />
        {loader}
      </main>
    </div>
  )
}
