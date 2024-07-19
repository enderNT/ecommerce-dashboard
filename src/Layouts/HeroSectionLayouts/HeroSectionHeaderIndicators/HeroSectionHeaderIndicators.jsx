export default function HeroSectionHeaderIndicators () {
  return (
    <>
      <div className='indicator'>
        <span className='indicator-item badge badge-secondary' />
        <div className='grid h-8 w-8 place-items-center'>
          <svg
            className='h-8 w-8'
            viewBox='0 0 24 24'
            fill='currentColor'
            height='1em'
            width='1em'
          >
            <path
              d='M20 2H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h3v3.767L13.277 18H20c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm0 14h-7.277L9 18.233V16H4V4h16v12z'
            />
          </svg>
        </div>
      </div>
      <div className='indicator'>
        <span className='indicator-item badge badge-secondary' />
        <div className='grid h-8 w-8 place-items-center'>
          <svg
            className='h-8 w-8'
            viewBox='0 0 1024 1024'
            fill='currentColor'
            height='1em'
            width='1em'
          >
            <path
              d='M816 768h-24V428c0-141.1-104.3-257.7-240-277.1V112c0-22.1-17.9-40-40-40s-40 17.9-40 40v38.9c-135.7 19.4-240 136-240 277.1v340h-24c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h216c0 61.8 50.2 112 112 112s112-50.2 112-112h216c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM512 888c-26.5 0-48-21.5-48-48h96c0 26.5-21.5 48-48 48zM304 768V428c0-55.6 21.6-107.8 60.9-147.1S456.4 220 512 220c55.6 0 107.8 21.6 147.1 60.9S720 372.4 720 428v340H304z'
            />
          </svg>
        </div>
      </div>
    </>
  )
}
