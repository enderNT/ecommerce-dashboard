export default function HeroSectionHeaderIndicators () {
  return (
    <>
      <div className='indicator'>
        <span className='indicator-item badge badge-secondary' />
        <div className='grid h-8 w-8 place-items-center'>
          <svg
            className='h-8 w-8'
            viewBox='0 0 24 24'
            fill='#3692EB'
            height='1em'
            width='1em'
          >
            <path
              d='M20 2H4c-1.103 0-2 .894-2 1.992v12.016C2 17.106 2.897 18 4 18h3v4l6.351-4H20c1.103 0 2-.894 2-1.992V3.992A1.998 1.998 0 0020 2z'
            />
          </svg>
        </div>
      </div>
      <div className='indicator'>
        <span className='indicator-item badge badge-secondary' />
        <div className='grid h-8 w-8 place-items-center'>
          <svg
            className='h-8 w-8'
            fill='#3692EB'
            viewBox='0 0 16 16'
            height='1em'
            width='1em'
          >
            <path
              d='M8 16a2 2 0 002-2H6a2 2 0 002 2zm.995-14.901a1 1 0 10-1.99 0A5.002 5.002 0 003 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z'
            />
          </svg>
        </div>
      </div>
    </>
  )
}
