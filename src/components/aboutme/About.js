import React from 'react'

const About = () => {
    return (
        <div>
            <hr></hr>
            <div className='flex flex-col space-y-12 my-24'>
            <h2 className='font-medium shadow rounded-md ml-5 px-6 py-2 text-xl text-center text-yellow-dessert bg-blue-atlantic tracking-widest' style={{width: 'fit-content'}}>ABOUT ME</h2>
            <div className='bg-white bg-opacity-50 mx-1 rounded-md'>
                <div  className='bg-yellow-dessert shadow-md flex flex-col space-y-4 mb-4 rounded-md py-10 px-4'>
                    <p>My full name is Mario Sancho-Cirer Poczatek, I&#39;m from La Coruña
                    and I&#39;m an engineering graduate pursuing a career in Tech.
                    </p>
                    <p>I&#39;m a creative developer that uses effective communication and logical thinking
                    to solve problems. 
                    </p>
                    <p>Some of my interests include UX Design, functional programming and research. 
                    </p>
                    <p>Finally, I&#39;m a person motivated by working well as part of a team and mentoring and coaching others.</p>
                </div>
            </div>
            </div>
           
           
        </div>
    )
}

export default About
