import './HeroSectionHeader.css'
import HeroSectionHeaderInput from '../HeroSectionHeaderInput/HeroSectionHeaderInput'
import HeroSectionHeaderIndicators from '../HeroSectionHeaderIndicators/HeroSectionHeaderIndicators'

export default function HeroSectionHeader () {
  return (
    <div className='grid col-span-3 grid-cols-subgrid'>
      <div
        className='col-start-1 px-8 py-4'
        id='heroSectionHeaderLeft'
      >
        <h5 className='text-black text-xs font-normal'>Total revenue</h5>
        <div className='flex items-center'>
          <h2
            data-cy='revenueText'
            className='text-black text-[28px] font-semibold mr-4'>$9999</h2>
          <svg
            viewBox='0 0 20 20'
            fill='red'
            height='1.5em'
            width='1.5em'
          >
            <path d='M8 9h8l-4 7' />
          </svg>
          <span className='text-red-600 text-[12px]'>-4%</span>
          <svg
            viewBox='0 0 20 20'
            fill='green'
            height='1.5em'
            width='1.5em'
          >
            <path d='M8 15h8l-4-7' />
          </svg>
          <span className='text-green-600 text-[12px]'>4%</span>
        </div>
      </div>
      <HeroSectionHeaderInput />
      <div
        id='heroSectionRight'
        className='flex items-center justify-evenly'
      >
        <HeroSectionHeaderIndicators />
        <div className='avatar'>
          <div className='w-14 rounded-full'>
            <img src='https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp' />
          </div>
        </div>
      </div>
    </div>
  )
}
