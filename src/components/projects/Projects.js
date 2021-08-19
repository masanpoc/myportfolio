import React from 'react'
import Swim from './Swim';
import Template from './Template'

const Projects = () => {
    return (
        <div >
            <hr></hr>
            <div className='mt-20 mb-28 md:my-40 md:mx-80 flex-col flex space-y-16 md:space-y-36'>
                <h2 className='shadow font-medium rounded-md ml-5 md:ml-0 px-6 py-2 md:px-8 md:py-3 text-xl md:text-2xl text-center text-yellow-dessert bg-blue-atlantic tracking-widest w-min'>PROJECTS</h2>
                <Swim />
                <Template />
            </div>
            
        </div>
    )
}

export default Projects
