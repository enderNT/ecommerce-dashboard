export default function HeroSectionGraphicCard () {
  return (
    <div
      className='py-6 bg-white shadow-md ml-[15vw] grid row-start-3 row-span-2 col-span-2 mr-6'
    >
      <h6 className='text-[#252733] font-bold text-lg w-full mx-6'>Today's trends</h6>
      <div className='flex'>
        <h6 className="font-normal text-xs text-[#9FA2B4]">30 de Septiembre</h6>
        <svg
          viewBox='0 0 1024 1024'
          fill='#3751FF'
          height='1em'
          width='1em'
        >
          <path
            d='M904 476H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z'
          />
        </svg>
        <span className="font-semibold text-xs text-[#9FA2B4]">Today</span>
        <svg
          viewBox='0 0 1024 1024'
          fill='#DFE0EB'
          height='1em'
          width='1em'
        >
          <path
            d='M904 476H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z'
          />
        </svg>
        <span className="font-semibold text-xs text-[#9FA2B4]">Yesterday</span>
      </div>
      <div className='container'>
        <img
          src='https://png.pngtree.com/element_our/20190529/ourmid/pngtree-ppt-data-analysis-line-chart-png-free-map-image_1187995.jpg'
          alt='graphic'
        />
      </div>
    </div>
  )
}
