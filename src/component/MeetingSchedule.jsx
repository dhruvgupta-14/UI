import {  ArrowLeft, ArrowRight, Calendar, ChevronDown, Video } from 'lucide-react'
import React from 'react'

const MeetingSchedule = () => {
  return (
    <div className='w-[600px] border rounded-lg px-3 py-3  shadow-md shadow-gray-300'>
      <div className='flex justify-between items-center px-4 bg-gray-100 border rounded-lg py-4'>
        <div className='flex justify-evenly px-2 items-center'>
          <Calendar></Calendar>
          <p className='text-black font-bold'>Monday,3 December 2024</p>
          <ChevronDown className='px-1'></ChevronDown>
        </div>
        <div className='flex justify-evenly px-2 items-center' >
          <ArrowLeft></ArrowLeft>
          <ArrowRight></ArrowRight>
        </div>
      </div>
      <div className='flex py-2 px-4 border-b-2'>
       <div className='flex flex-col items-center border-r-2 border-green-500 px-2 py-1'>
         <p className='text-black text-[20px] font-semibold'>11:30 AM</p>
         <p className='text-grey-100 font-normal text-[12px]'>11:30 AM</p>
       </div>
       <div className='flex flex-col  py-1 px-3'>
        <div className='flex items-center'>
          <p className='text-grey-100 pr-2'>Live</p>
          <Video className='text-red-600 '></Video>
        </div>
        <div className='font-bold text-[20px]'>UX Webinar</div>
       </div>
      </div>
      <div className='flex py-2 px-4 border-b-2'>
       <div className='flex flex-col items-center border-r-2 border-green-500 px-2 py-1'>
         <p className='text-black text-[20px] font-semibold'>11:30 AM</p>
         <p className='text-grey-100 font-normal text-[12px]'>11:30 AM</p>
       </div>
       <div className='flex flex-col py-1 px-3'>
        <div className='flex items-center'>
        <p className='text-grey-100 pr-2'>Upcoming</p>
        <Video className='text-blue-600 '></Video>
        </div>
        <div className='font-bold text-[20px]'>My First Webinar</div>
       </div>
      </div>
      <div className='flex py-2 px-4 border-b-2'>
       <div className='flex flex-col items-center border-r-2 border-green-500 px-2 py-1'>
         <p className='text-black text-[20px] font-semibold'>11:30 AM</p>
         <p className='text-grey-100 font-normal text-[12px]'>11:30 AM</p>
       </div>
       <div className='flex flex-col py-1 px-3'>
        <div className='flex items-center'>
        <p className='text-grey-100 pr-2'>Upcoming</p>
        <Video className='text-blue-600 '></Video>
        </div>
        <div className='font-bold text-[20px]'>Important Webinar</div>
       </div>
      </div>
      <div className='flex py-2 px-4 border-b-2'>
       <div className='flex flex-col items-center border-r-2 border-green-500 px-2 py-1'>
         <p className='text-black text-[20px] font-semibold'>11:30 AM</p>
         <p className='text-grey-100 font-normal text-[12px]'>11:30 AM</p>
       </div>
       <div className='flex flex-col py-1 px-3'>
        <div className='flex items-center'>
          <p className='text-grey-100 pr-2'>Upcoming</p>
          <Video className='text-blue-600 '></Video>
        </div>
        <div className='font-bold text-[20px]'>Webinar 1</div>
       </div>
      </div>
      
    </div>
  )
}

export default MeetingSchedule