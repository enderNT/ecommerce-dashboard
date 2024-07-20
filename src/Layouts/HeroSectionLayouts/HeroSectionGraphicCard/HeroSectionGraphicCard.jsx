export default function HeroSectionGraphicCard () {
  return (
    <div
      className='card bg-white shadow-md ml-[15vw] grid row-start-3 row-span-2 col-span-2 mr-6'
    >
      <div className='card-title'>Today's trend</div>
      <div className='flex'>
        <p>30 de Septiembre</p>
        <svg
          viewBox='0 0 1024 1024'
          fill='currentColor'
          height='1em'
          width='1em'
        >
          <path
            d='M904 476H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z'
          />
          Today
        </svg>
        <svg
          viewBox='0 0 1024 1024'
          fill='gray'
          height='1em'
          width='1em'
        >
          <path
            d='M904 476H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z'
          />
          Yesterday
        </svg>
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
