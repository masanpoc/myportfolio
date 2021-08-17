import React from 'react'
import Swim from './Swim';
import Template from './Template'

const Projects = () => {
    return (
        <div >
            <hr></hr>
            <div className='my-20 flex-col flex space-y-16 '>
                <h2 className='shadow font-medium rounded-md ml-5 px-6 py-2 text-xl text-center text-yellow-dessert bg-blue-atlantic tracking-widest w-min'>PROJECTS</h2>
                <Swim />
                <Template />
            </div>
            
        </div>
    )
}

export default Projects
