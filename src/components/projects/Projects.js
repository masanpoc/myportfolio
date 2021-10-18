import React from 'react'
import {data} from './Data'
import Project from './Project'

const Projects = ({width}) => {
    
    return (
        <div id='projects'>
            <hr></hr>
            <div className='flex flex-col justify-center space-y-20 md:space-y-32 mt-24 md:mt-28 mb-40'>
                
                <h2 className=' w-3/5 mx-auto font-adam px-6 pt-2 pb-4  md:px-8 md:py-3 text-3xl text-center opacity-90 border-b-2 border-light-theme-grey dark:border-green-lintern' style={{width: 'fit-content'}}>PROJECTS</h2>
                <div className='flex flex-col justify-center space-y-32 md:w-7/12 md:mx-auto md:space-y-24' >
                {data.map((projectData, i)=>{
                    if(i==(data.length-1)){
                        return (
                            <Project key={projectData.appTitle.substring(0,5)} data={projectData} width={width}/>
                        )
                    } else {
                        return (
                            <div key={projectData.appTitle.substring(0,5)} className='flex flex-col justify-center space-y-32 md:space-y-24'>
                                <Project data={projectData} width={width} />
                                <hr className=' w-4/12 mx-auto border-light-theme-greyWhite bg-light-theme-greyWhite dark:border-dark-borders dark:bg-dark-borders' style={{borderWidth: '1.5px'}}></hr>
                            </div>
                        )
                    }
                    
                })}
                </div>
            </div>
        </div>    
    )
}

export default Projects
