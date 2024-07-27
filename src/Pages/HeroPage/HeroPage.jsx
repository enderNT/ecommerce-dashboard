import Cookies from 'js-cookie'
import HeroSectionHeader from '../../Layouts/HeroSectionLayouts/HeroSectionHeader/HeroSectionHeader'
import HeroSectionActions from '../../Layouts/HeroSectionLayouts/HeroSectionActions/HeroSectionActions'
import HeroSectionInboxCard from '../../Layouts/HeroSectionLayouts/HeroSectionInboxCard/HeroSectionInboxCard'
import HeroSectionActivityCard from '../../Layouts/HeroSectionLayouts/HeroSectionActivityCard/HeroSectionActivityCard'
import HeroSectionGraphicCard from '../../Layouts/HeroSectionLayouts/HeroSectionGraphicCard/HeroSectionGraphicCard'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import './HeroPage.css'

export default function HeroPage () {
  const {isAuthenticated, userData} = useSelector(state => state.user)
  const hasData = Boolean(userData)

  console.log(hasData, !Cookies.get('token'), isAuthenticated)

  if(!hasData || !Cookies.get('token')) {
    console.log('DEBERIA IRSE DE AQUI')
    Cookies.remove('token')
    return <Navigate to='/login' replace={true} />
  }
  
  if(isAuthenticated) {
    console.log('DEBERIA DE QUEDARSE AQUI EN DASHBOARD')
    return (
      <div className='grid grid-auto-rows grid-cols-3 gap-8 p-4'>
        <HeroSectionHeader />
        <HeroSectionActions />
        <HeroSectionInboxCard />
        <HeroSectionActivityCard />
        <HeroSectionGraphicCard />
      </div>
    )
  }
}
