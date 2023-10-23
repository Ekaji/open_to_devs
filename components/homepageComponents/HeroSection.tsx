import React from 'react'

export default function HeroSection() {

    return (
        <div className='flex flex-row border-2 rounded-2xl bg-[#FFF8C9] '>
            <div className='w-1/2 flex flex-col justify-center p-10'>
                <h1 className='text-7xl mb-5 capitalize'>Open to <br /> developers</h1>
                <p className=''> Is a dedicated job website designed exclusively for developers like you.
                    We understand the unique needs and aspirations of developers,
                    and we're here to connect you with top-notch companies actively
                    seeking your skills and expertise.</p>
            </div>
            <div className='w-1/2'>
                <img src="/images/scene 3.png" alt=""/>
            </div>
        </div>
    )
}
