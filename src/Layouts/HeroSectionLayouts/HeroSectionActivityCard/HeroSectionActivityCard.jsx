import { useSelector } from "react-redux"

export default function HeroSectionActivityCard () {

  const {orderItems} = useSelector(state => state.dashboard)

  

  const ordersListTemplate = (ordersList) => {
    const ordersListCopy = ordersList.length > 3 ? ordersList.slice(0,3) : ordersList
    return ordersListCopy.map((order, index) => {
      return (
        <div key={index} className='mx-8 mb-4 flex justify-between'>
          <div className='flex'>
            <h6 className='mx-4 font-semibold text-sm text-[#252733]'>$ {order.amount}</h6>
            <h6 className='mx-4 font-semibold text-sm text-[#252733]'>
              <strong>Total items:</strong> {order.number_items}</h6>
          </div>
          <div className='text-white font-semibold text-xs badge badge-warning gap-2'>
            {order.status}
          </div>
        </div>
      )
    })
  }

  return (
    <div
      className='py-6 bg-white shadow-md w-[36vw] grid row-start-4 h-full ml-6 text-black rounded-2xl'
    >
      <div className='mb-8 flex justify-between'>
        <h3 className='mx-8 font-medium text-lg'>Recent Activity</h3>
        <a className='mx-8 font-semibold text-sm text-[#3751FF] link link-hover'>View All</a>
      </div>
      <ul className='mt-8'>
        {ordersListTemplate(orderItems)}
      </ul>
    </div>
  )
}
