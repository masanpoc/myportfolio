import React from 'react'
import {data} from './Data'
import Project from './Project'

const Projects = () => {
    
    return (
        <div >
            <hr></hr>
            <div className='flex flex-col justify-center space-y-20 md:space-y-20 mt-24 md:mt-28 mb-40'>
                
                <h2 className=' w-3/5 mx-auto font-adam px-6 pt-2 pb-4  md:px-8 md:py-3 text-3xl text-center text-green-lintern opacity-90 border-b-2 border-green-lintern' style={{width: 'fit-content'}}>PROJECTS</h2>
                <div className='flex flex-col justify-center space-y-32 md:space-y-20' >
                {data.map((projectData, i)=>{
                    if(i==(data.length-1)){
                        return (
                            <Project key={projectData.appTitle.substring(0,5)} data={projectData} />
                        )
                    } else {
                        return (
                            <>
                            <Project key={projectData.appTitle.substring(0,5)} data={projectData} />
                            <hr className=' w-4/12 mx-auto border-dark-borders bg-dark-borders' style={{borderWidth: '1.5px'}}></hr>
                            </>
                        )
                    }
                    
                })}
                </div>
            </div>
        </div>    
    )
}

export default Projects
