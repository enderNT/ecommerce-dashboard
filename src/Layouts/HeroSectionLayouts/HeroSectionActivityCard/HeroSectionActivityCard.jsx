export default function HeroSectionActivityCard () {
  return (
    <div
      className='py-6 bg-white shadow-md w-[36vw] grid row-start-4 h-full ml-6 text-black rounded-2xl'
    >
        <div className='mb-8 flex justify-between'>
          <h3 className="mx-8 font-medium text-lg">Recent Activity</h3>
          <a className='mx-8 font-semibold text-sm text-[#3751FF] link link-hover'>View All</a>
        </div>
        <ul className="mt-8">
          <div className='mx-8 flex justify-between'>
            <div className="flex">
              <input
                type='radio'
                name='radio-2'
                className='mx-2 radio radio-primary' defaultChecked />
              <h6 className="mx-4 font-semibold text-sm text-[#252733]">Elemento 1</h6>
            </div>
            <div className='text-white font-semibold text-xs badge badge-warning gap-2'>
              Urgent
            </div>
          </div>
          <div className='divider' />
          <div className='mx-8 flex justify-between'>
            <div className="flex">
              <input
                type='radio'
                name='radio-2'
                className='mx-2 radio radio-primary' />
              <h6 className="mx-4 font-semibold text-sm text-[#252733]">Elemento 2</h6>
            </div>
            <div className='text-white font-semibold text-xs badge badge-warning gap-2'>
              Urgent
            </div>
          </div>
          <div className='divider' />
          <div className='mx-8 flex justify-between'>
            <div className="flex">
              <input
                type='radio'
                name='radio-2'
                className='mx-2 radio radio-primary' />
              <h6 className="mx-4 font-semibold text-sm text-[#252733]">Elemento 3</h6>
            </div>
            <div className='text-white font-semibold text-xs badge badge-warning gap-2'>
              Urgent
            </div>
          </div>
          <div className='divider' />
          <div className='mx-8 flex justify-between'>
            <div className="flex">
              <input
                type='radio'
                name='radio-2'
                className='mx-2 radio radio-primary' />
              <h6 className="mx-4 font-semibold text-sm text-[#252733]">Elemento 4</h6>
            </div>
            <div className='text-white font-semibold text-xs badge badge-warning gap-2'>
              Urgent
            </div>
          </div>
        </ul>
    </div>
  )
}
