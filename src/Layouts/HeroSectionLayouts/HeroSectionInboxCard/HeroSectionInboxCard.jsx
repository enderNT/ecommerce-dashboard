import Cookies from 'js-cookie'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getMessages } from '../../../redux/reducers/dashboard/dashboardActions&Thunks'

export default function HeroSectionInboxCard () {
  
  const {messageItems} = useSelector(state => state.dashboard)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getMessages(Cookies.get('token')))
      .then(response => console.log('los items son', response))
      .catch()
  }, [dispatch])

  const messageTemplate = (messagesList) => {
    console.log('LA LISTA DE MENSAJES AQUI ESTA', messagesList)
    return messagesList.map((message, index) => {
      return (
          <div key={index+1} className='mx-8 mt-6 flex justify-between'>
            <h6 className='font-medium text-sm text-[#252733]'>{message.content}</h6>
            <label className='font-medium text-sm text-[#9FA2B4]'>{message.created}</label>
          </div>
      )
    })
  }

  return (
    <div
      className='py-6 bg-white shadow-md ml-6 w-[36vw] grid row-start-3 text-black rounded-2xl'
    >
      <div className='flex justify-between'>
        <div className='mx-8'>
          <h4 className='font-bold text-lg'>Inbox</h4>
          <label className='font-normal text-xs text-[#9FA2B4]'>Group: </label> <label className='font-normal text-xs text-[#4B506D]'>Support</label>
        </div>
        <a className='mx-8 font-semibold text-sm text-[#3751FF] link link-hover'>View details</a>
      </div>
      <ul>
        {messageTemplate(messageItems)}
        {/* <div className='mx-8 mt-6 flex justify-between'>
          <h6 className='font-medium text-sm text-[#252733]'>Elemento 1</h6>
          <label className='font-medium text-sm text-[#9FA2B4]'>4:39</label>
        </div>
        <div className='divider' />
        <div className='mx-8 flex justify-between'>
          <h6 className='font-medium text-sm text-[#252733]'>Elemento 2</h6>
          <label className='font-medium text-sm text-[#9FA2B4]'>7:39</label>
        </div> */}
      </ul>
    </div>
  )
}
