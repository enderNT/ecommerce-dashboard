export default function HeroSectionActions () {
  return (
    <div className='grid col-span-3 grid-cols-subgrid mx-6 text-white'>
      <div className='bg-gradient-to-r from-[#6BAAFC] to-[#305FEC] rounded-2xl'>
        <div className='card-body'>
          <h2 className='text-lg font-semibold'>Shippend orders</h2>
          <h2 className='text-6xl font-bold text-right'>67</h2>
        </div>
      </div>
      <div className='bg-gradient-to-r from-[#EF5E7A] to-[#D35385] rounded-2xl'>
        <div className='card-body'>
          <h2 className='text-lg font-semibold'>Pendding orders</h2>
          <h2 className='text-6xl font-bold text-right'>09</h2>
        </div>
      </div>
      <div className='bg-gradient-to-r from-[#D623FE] to-[#A530F2] rounded-2xl'>
        <div className='card-body'>
          <h2 className='text-lg font-semibold'>New orders</h2>
          <h2 className='text-6xl font-bold text-right'>35</h2>
        </div>
      </div>
    </div>
  )
}
