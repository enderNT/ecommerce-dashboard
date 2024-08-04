import { useSelector } from 'react-redux'
import RegisterForm from '../../Layouts/RegisterLayout/RegisterForm/RegisterForm'
import RegisterHeader from '../../Layouts/RegisterLayout/RegisterHeader/RegisterHeader'
import useLoader from '../../customHooks/useLoader'

export default function RegisterPage () {
  const {isLoading} = useSelector(state => state.user)
  const {loader} = useLoader(isLoading)
  return (
    <div className='bg-white h-screen w-full flex flex-col'>
      <header className='h-[8vh]'>
        <RegisterHeader />
      </header>
      <main
        className='h-[92vh] w-full flex flex-wrap items-center justify-center'
      >
        <RegisterForm />
        {loader}
      </main>
    </div>
  )
}
