export default function HeroSectionActions () {
  return (
    <div className="grid col-span-3 grid-cols-subgrid mx-6">
      <div className='bg-white card bg-base-100 shadow-xl'>
        <div className='card-body'>
          <h2 className='card-title'>Shippend orders</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className='card-actions justify-end'>
            <button className='btn btn-primary'>Buy Now</button>
          </div>
        </div>
      </div>
      <div className='bg-white card bg-base-100 shadow-xl'>
        <div className='card-body'>
          <h2 className='card-title'>Pendding orders</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className='card-actions justify-end'>
            <button className='btn btn-primary'>Buy Now</button>
          </div>
        </div>
      </div>
      <div className='bg-white card bg-base-100 shadow-xl'>
        <div className='card-body'>
          <h2 className='card-title'>New orders</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className='card-actions justify-end'>
            <button className='btn btn-primary'>Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  )
}
