import React from 'react'

export default function Display() {
  return (
    <>
    <div className='z-99 grid grid-cols-xx shadow-lg bg-white rounded-2xl p-2 m-14  w-3/4'>
        <div className='flex flex-col text-center justify-center    '>
            <p className='text-grey text-gray-400 font-semibold text-xs'>IP Address</p>
            <p id='ip' className='text-lg text-black font-semibold'>&nbsp;</p>
        </div>
        <div className='flex flex-col text-center justify-center'>
            <p className='text-grey text-gray-400 font-semibold text-xs'>Location</p>
            <p id='loc' className='text-lg text-black font-semibold'>&nbsp;</p>
        </div>
        <div className='flex flex-col text-center justify-center'>
            <p className='text-grey text-gray-400 font-semibold text-xs'>Timezone</p>
            <p id='time' className='text-lg text-black font-semibold'>&nbsp;</p>
        </div>
        <div className='flex flex-col text-center justify-center'>
            <p className='text-grey text-gray-400 font-semibold text-xs'>ISP</p>
            <p id='isp' className='text-lg text-black font-semibold'>&nbsp;</p>
        </div>
    </div>
    </>
  )
}
