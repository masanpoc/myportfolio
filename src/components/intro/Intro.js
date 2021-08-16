import React from 'react'

const Intro = () => {
    return (
        <div className='flex flex-col space-y-52 md:space-y-60 pt-36 md:pt-52 items-center text-blue-atlantic' style={{height: '100vh'}}>
            <div className='text-3xl flex flex-col space-y-2 md:pr-80'>
                <h1>Hey,</h1>
                <h1>I&#39;m Mario Sancho.</h1>
            </div>
            <div className='font-semibold text-3xl text-center tracking-widest flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-4 md:text-4xl'>
                <h1>WELCOME</h1>  
                <h1>TO</h1>
                <h1 className='md:flex md:flex-row md:space-x-4'><span>MY</span> <span>PORTFOLIO</span></h1>
            </div>
        </div>
    )
}

export default Intro
