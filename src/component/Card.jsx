import React from 'react'
import image from   "../assets/UrbanMinimalist.jpeg"
const Card = () => {
  return (
    <div className='w-[200px] h-[360px] bg-[#fff] border-2 shadow-sm shadow-grey-100 flex flex-col items-center py-8 px-6 rounded-lg mt-[-20px]'>
       <img src={image} alt="" className='w-[80px] rounded-lg mt-2' />
       <h1 className='font-bold mt-5 text-[20px]'>Robert Allen</h1>
       <p className='text-grey-100 mt-3'>robert123@gmail.com</p>
       <p className='text-grey-100'>1234567890</p>
       <div className='text-grey-100 mt-3'>Delhi,India</div>
    </div>
  )
}

export default Card