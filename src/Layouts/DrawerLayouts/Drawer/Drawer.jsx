import DrawerFooter from '../DrawerFooter/DrawerFooter'
import DrawerListOptions from '../DrawerListOptions/DrawerListOptions'
import HeroPage from '../../../Pages/HeroPage/HeroPage'
import './Drawer.css'

export default function Drawer () {
  return (
      <div className='drawer lg:drawer-open'>
        <input id='my-drawer-2' type='checkbox' className='drawer-toggle' />
        <div className='drawer-content flex flex-col bg-[#F8F7FC]'>
          <label
            htmlFor='my-drawer-2'
            className='btn btn-primary drawer-button lg:hidden'>
            Menu
          </label>
          <HeroPage />
        </div>
        <div className='drawer-side w-48'>
          <label htmlFor='my-drawer-2' aria-label='close sidebar' className='drawer-overlay' />
          <DrawerListOptions />
          <DrawerFooter />
        </div>
      </div>
  )
}
