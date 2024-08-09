import Cookies from 'js-cookie'
import HeroSectionHeader from '../../Layouts/HeroSectionLayouts/HeroSectionHeader/HeroSectionHeader'
import HeroSectionActions from '../../Layouts/HeroSectionLayouts/HeroSectionActions/HeroSectionActions'
import HeroSectionInboxCard from '../../Layouts/HeroSectionLayouts/HeroSectionInboxCard/HeroSectionInboxCard'
import HeroSectionGraphicCard from '../../Layouts/HeroSectionLayouts/HeroSectionGraphicCard/HeroSectionGraphicCard'
import useLoader from '../../customHooks/useLoader'
import { useDispatch, useSelector } from 'react-redux'
import { getOrders } from '../../redux/reducers/dashboard/dashboardActions&Thunks'
import { useEffect } from 'react'
import { saveOrdersInfoR, setTotalRevenueReducer } from '../../redux/reducers/dashboard/dashboardSlice'
import './HeroPage.css'

export default function HeroPage () {

  const {isLoading} = useSelector(state => state.dashboard)
  const {loader} = useLoader(isLoading)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getOrders(Cookies.get('token')))
      .then(response => {
        dispatch(saveOrdersInfoR(response.payload.items))
        dispatch(setTotalRevenueReducer(response.payload.items))
      })
      .catch(err => console.error('el error surgio porque...\n', err))
  }, [dispatch])


  return (
    <div className='grid grid-auto-rows grid-cols-3 gap-8 p-4'>
      {loader}
      <HeroSectionHeader />
      <HeroSectionActions />
      <HeroSectionInboxCard />
      <HeroSectionGraphicCard />
    </div>
  )
}
