import Cookies from 'js-cookie'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getMessages } from '../../../redux/reducers/dashboard/dashboardActions&Thunks'

export default function HeroSectionInboxCard () {
  
  const {messageItems} = useSelector(state => state.dashboard)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getMessages(Cookies.get('token')))
      .then(response => response)
      .catch()
  }, [dispatch])

  const formatMessageTimeStamp = (time) => {
    const result = []
    const splited = time.split(':')
    splited.forEach((element, index) => {
      if(index === 0 || index === 1) result.push(element)
    })
  return result.join(':')
  }

  const messageTemplate = (messagesList) => {
    return messagesList.map((message, index) => {
      return (
        <div key={index+1}>
          <div className='mx-8 my-4 flex justify-between'>
            <h6 className='font-medium text-sm text-[#252733]'>{message.content}</h6>
            <label className='font-medium text-sm text-[#9FA2B4]'>{formatMessageTimeStamp(message.created)}</label>
          </div>
          {index+1 !== messagesList.length && <div className="divider"></div>}
        </div>
      )
    })
  }

  return (
    <div
      className='py-6 bg-white shadow-md ml-6 w-[36vw] grid row-start-3 row-span-2 text-black rounded-2xl'
    >
      <div className='flex justify-between mb-4'>
        <div className='mx-8'>
          <h4 className='font-bold text-lg'>Inbox</h4>
          <label className='font-normal text-xs text-[#9FA2B4]'>Group: </label> <label className='font-normal text-xs text-[#4B506D]'>Support</label>
        </div>
        <a className='mx-8 font-semibold text-sm text-[#3751FF] link link-hover'>View details</a>
      </div>
      <ul>
        {messageTemplate(messageItems)}
      </ul>
    </div>
  )
}
