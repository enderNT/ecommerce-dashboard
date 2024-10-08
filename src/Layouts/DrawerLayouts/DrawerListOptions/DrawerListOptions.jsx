import Cookies from 'js-cookie'
import { Link, useLocation } from "react-router-dom"
import { clasNameActive } from '../../../utils/utils'
import useDrawerListOpts from './useDrawerListOpts.jsx'
import './DrawerListOpts.css'

function DrawerListOptions() {
  const location = useLocation()
  const { validationAct } = useDrawerListOpts()



  return (
    <ul className='menu bg-white min-h-full w-80'>
      {validationAct}
      <Link
        onClick={() => {
          window.localStorage.clear()
          Cookies.remove('token')
        }}
        to='/login'
        className="mx-auto mt-5">
        <div className='mx-auto mt-5'>
          <svg
            viewBox='0 0 1024 1024'
            fill='#2A4178'
            height='5em'
            width='5em'
          >
            <path
              d='M705.6 124.9a8 8 0 00-11.6 7.2v64.2c0 5.5 2.9 10.6 7.5 13.6a352.2 352.2 0 0162.2 49.8c32.7 32.8 58.4 70.9 76.3 113.3a355 355 0 0127.9 138.7c0 48.1-9.4 94.8-27.9 138.7a355.92 355.92 0 01-76.3 113.3 353.06 353.06 0 01-113.2 76.4c-43.8 18.6-90.5 28-138.5 28s-94.7-9.4-138.5-28a353.06 353.06 0 01-113.2-76.4A355.92 355.92 0 01184 650.4a355 355 0 01-27.9-138.7c0-48.1 9.4-94.8 27.9-138.7 17.9-42.4 43.6-80.5 76.3-113.3 19-19 39.8-35.6 62.2-49.8 4.7-2.9 7.5-8.1 7.5-13.6V132c0-6-6.3-9.8-11.6-7.2C178.5 195.2 82 339.3 80 506.3 77.2 745.1 272.5 943.5 511.2 944c239 .5 432.8-193.3 432.8-432.4 0-169.2-97-315.7-238.4-386.7zM480 560h64c4.4 0 8-3.6 8-8V88c0-4.4-3.6-8-8-8h-64c-4.4 0-8 3.6-8 8v464c0 4.4 3.6 8 8 8z'
            />
          </svg>
        </div>
      </Link>
      <button className={clasNameActive(location.pathname, '/dashboard')}>
        <svg
          viewBox='0 0 24 24'
          fill={location.pathname === '/dashboard' ? '#2A4178' : '#A7B7DD'}
          height='1em'
          width='1em'
        >
          <path
            d='M4 13h6a1 1 0 001-1V4a1 1 0 00-1-1H4a1 1 0 00-1 1v8a1 1 0 001 1zm-1 7a1 1 0 001 1h6a1 1 0 001-1v-4a1 1 0 00-1-1H4a1 1 0 00-1 1v4zm10 0a1 1 0 001 1h6a1 1 0 001-1v-7a1 1 0 00-1-1h-6a1 1 0 00-1 1v7zm1-10h6a1 1 0 001-1V4a1 1 0 00-1-1h-6a1 1 0 00-1 1v5a1 1 0 001 1z'
          />
        </svg>
        <Link to='/dashboard'>
          Dashboard
        </Link>
      </button>
      <button className={clasNameActive(location.pathname, '/orders')}>
        <svg
          viewBox='0 0 1024 1024'
          fill={location.pathname === '/orders' ? '#2A4178' : '#A7B7DD'}
          height='1em'
          width='1em'
        >
          <path
            d='M922.9 701.9H327.4l29.9-60.9 496.8-.9c16.8 0 31.2-12 34.2-28.6l68.8-385.1c1.8-10.1-.9-20.5-7.5-28.4a34.99 34.99 0 00-26.6-12.5l-632-2.1-5.4-25.4c-3.4-16.2-18-28-34.6-28H96.5a35.3 35.3 0 100 70.6h125.9L246 312.8l58.1 281.3-74.8 122.1a34.96 34.96 0 00-3 36.8c6 11.9 18.1 19.4 31.5 19.4h62.8a102.43 102.43 0 00-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7h161.1a102.43 102.43 0 00-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7H923c19.4 0 35.3-15.8 35.3-35.3a35.42 35.42 0 00-35.4-35.2zM305.7 253l575.8 1.9-56.4 315.8-452.3.8L305.7 253zm96.9 612.7c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 01-31.6 31.6zm325.1 0c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 01-31.6 31.6z'
          />
        </svg>
        <Link to='/orders'>
          Orders
        </Link>
      </button>
      <button
        id="btnProductsOptionMenu"
        cy-data-test-id="productos"
        className='btn bg-white text-base font-medium border-none mt-11 mx-8'>
        <svg
          fill='#A7B7DD'
          viewBox='0 0 16 16'
          height='1em'
          width='1em'
        >
          <path
            d='M8 1a2 2 0 00-2 2v2H5V3a3 3 0 116 0v2h-1V3a2 2 0 00-2-2zM5 5H3.36a1.5 1.5 0 00-1.483 1.277L.85 13.13A2.5 2.5 0 003.322 16h9.355a2.5 2.5 0 002.473-2.87l-1.028-6.853A1.5 1.5 0 0012.64 5H11v1.5a.5.5 0 01-1 0V5H6v1.5a.5.5 0 01-1 0V5z'
          />
        </svg>
        Products
      </button>
      <button id="btnShippingOptionMenu" className='btn bg-white text-base font-medium border-none mt-11 mx-8'>
        <svg
          viewBox='0 0 24 24'
          fill='#A7B7DD'
          height='1em'
          width='1em'
        >
          <path
            d='M19.15 8a2 2 0 00-1.72-1H15V5a1 1 0 00-1-1H4a2 2 0 00-2 2v10a2 2 0 001 1.73 3.49 3.49 0 007 .27h3.1a3.48 3.48 0 006.9 0 2 2 0 002-2v-3a1.07 1.07 0 00-.14-.52zM15 9h2.43l1.8 3H15zM6.5 19A1.5 1.5 0 118 17.5 1.5 1.5 0 016.5 19zm10 0a1.5 1.5 0 111.5-1.5 1.5 1.5 0 01-1.5 1.5z'
          />
        </svg>
        Shipping
      </button>
      <button id="btnPaymentsOptionsMenu" className='btn bg-white text-base font-medium border-none mt-11 mx-8'>
        <svg
          fill='none'
          stroke='#A7B7DD'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          viewBox='0 0 24 24'
          height='1em'
          width='1em'
        >
          <path d='M3 4 H21 A2 2 0 0 1 23 6 V18 A2 2 0 0 1 21 20 H3 A2 2 0 0 1 1 18 V6 A2 2 0 0 1 3 4 z' />
          <path d='M1 10h22' />
        </svg>
        Payments
      </button>
      <button className={clasNameActive(location.pathname, '/settings')}>
        <svg
          viewBox='0 0 512 512'
          fill={location.pathname === '/settings' ? '#2A4178' : '#A7B7DD'}
          height='1em'
          width='1em'
        >
          <path
            d='M256 176a80 80 0 1080 80 80.24 80.24 0 00-80-80zm172.72 80a165.53 165.53 0 01-1.64 22.34l48.69 38.12a11.59 11.59 0 012.63 14.78l-46.06 79.52a11.64 11.64 0 01-14.14 4.93l-57.25-23a176.56 176.56 0 01-38.82 22.67l-8.56 60.78a11.93 11.93 0 01-11.51 9.86h-92.12a12 12 0 01-11.51-9.53l-8.56-60.78A169.3 169.3 0 01151.05 393L93.8 416a11.64 11.64 0 01-14.14-4.92L33.6 331.57a11.59 11.59 0 012.63-14.78l48.69-38.12A174.58 174.58 0 0183.28 256a165.53 165.53 0 011.64-22.34l-48.69-38.12a11.59 11.59 0 01-2.63-14.78l46.06-79.52a11.64 11.64 0 0114.14-4.93l57.25 23a176.56 176.56 0 0138.82-22.67l8.56-60.78A11.93 11.93 0 01209.94 26h92.12a12 12 0 0111.51 9.53l8.56 60.78A169.3 169.3 0 01361 119l57.2-23a11.64 11.64 0 0114.14 4.92l46.06 79.52a11.59 11.59 0 01-2.63 14.78l-48.69 38.12a174.58 174.58 0 011.64 22.66z'
          />
        </svg>
        <Link to='/settings'>
          Settings
        </Link>
      </button>
    </ul>
  )
}

export default DrawerListOptions
