export default function HeroSectionInboxCard () {
  return (
    <div
      className='card bg-white shadow-md ml-6 w-[38vw] grid row-start-3 text-black rounded-2xl'
    >
      <div className='card-body'>
        <div className='flex space-evenly'>
          <div>
            <h6>Inbox</h6>
            <label>Group: Support</label>
          </div>
          <a className='link link-hover'>View details</a>
        </div>
        <ul>
          <p>Elemento 1</p>
          <div className='divider' />
          <p>Elemento 2</p>
        </ul>
      </div>
    </div>
  )
}
