import './LoginForm.css'

export default function LoginForm() {
    return (
        <div
            className="bg-[#F8F7FC] drop-shadow-lg rounded-[20px] max-w-[800px] h-[70%] w-[80%] flex flex-col justify-center items-center">
            <label className='max-w-[400px] form-control'>
                <div className="label">
                    <span className="label-text font-normal text-base text-[#1E1E1E]">Email</span>
                </div>
                <input type='text' className='bg-white input input-bordered border-[#D9D9D9]' placeholder='examplemail@mail.com' />
            </label>
            <label className='max-w-[400px] form-control'>
                <div className="label">
                    <span className="label-text font-normal text-base text-[#1E1E1E]">Password</span>
                </div>
                <input type='text' className='bg-white input input-bordered border-[#D9D9D9]' placeholder='************' />
            </label>
        </div>
    )
}