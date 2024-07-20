export default function DrawerFooter () {
  return (
    <footer className='footer bg-white text-neutral-content px-8 py-6 max-w-80'>
      <nav>
        <h2 className='footer-title text-black font-semibold text-sm'>Custommer Support</h2>
        <p className='text-wrap mb-5 font-medium text-xs text-[#BFBFBF]'>
          Ask your query, place request,
          or important issues. Our support team will contact 24/7 to you
        </p>
        <button className='btn mb-4 text-[#1A6BBA] font-semibold text-xs bg-[#C3DFFA] border-none'>
          <svg
            viewBox='0 0 24 24'
            fill='currentColor'
            height='2em'
            width='2em'
          >
            <path
              d='M12 2C6.486 2 2 6.486 2 12v4.143C2 17.167 2.897 18 4 18h1a1 1 0 001-1v-5.143a1 1 0 00-1-1h-.908C4.648 6.987 7.978 4 12 4s7.352 2.987 7.908 6.857H19a1 1 0 00-1 1V18c0 1.103-.897 2-2 2h-2v-1h-4v3h6c2.206 0 4-1.794 4-4 1.103 0 2-.833 2-1.857V12c0-5.514-4.486-10-10-10z'
            />
          </svg>
          Connect Now
        </button>
        <a
          target='_blank'
          href='https://policies.google.com/terms?hl=en-GB'
          className='link link-hover font-medium text-xs' rel='noreferrer'
        >Terms & Services Privacy Policy
        </a>
      </nav>
    </footer>
  )
}
