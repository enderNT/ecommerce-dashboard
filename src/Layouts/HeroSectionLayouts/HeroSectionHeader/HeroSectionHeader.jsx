import './HeroSectionHeader.css'
import HeroSectionHeaderInput from '../HeroSectionHeaderInput/HeroSectionHeaderInput'
import HeroSectionHeaderIndicators from '../HeroSectionHeaderIndicators/HeroSectionHeaderIndicators'

export default function HeroSectionHeader () {
  return (
    <div className='flex'>
      <div id='heroSectionHeaderLeft'>
        <label>Total revenue</label>
        <h2>$9999</h2>
        <label>-4%</label> <label>4%</label>
      </div>
      <HeroSectionHeaderInput />
      <div id='heroSectionRight'>
        <HeroSectionHeaderIndicators />
        <div className='avatar'>
          <div className='w-12 rounded-full'>
            <img src='https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp' />
          </div>
        </div>
      </div>
    </div>
  )
}
