import React, {useState, useEffect} from 'react';
import Github from './svg/Github'
import LiveDemo from './svg/LiveDemo'
import Stick from './svg/Stick';

const Project = ({data, width}) => {
    const currentColor = "#8F8F8F";
    const currentColorStick= "#303030"
    

    return (
        <div className='flex flex-col md:flex-row md:space-x-6 mx-5 md:mx-0 relative border-dark-borders border-2'>
            <div id='mask' className=' h-60 overflow-hidden border-b-2 border-dark-borders md:border-b-0 md:border-r-2 md:h-auto md:w-80'  style={{boxShadow: 'inset 0px 0px 0px 200px #0000008c'}}>
                <a href={data.demoLink}
                            rel="noreferrer"
                            target="_blank">
                <img src={data.screenShot} className='h-auto w-full md:h-full' style={{opacity: data.opacity}} />
                </a>
            </div>
            <div className='flex flex-col space-y-6 md:w-9/12 mb-4 py-6 pl-5 pr-3  md:mb-0 md:py-7 md:pl-6 md:pr-5'>
                <h3 className=' text-xl underline mt-3' >{data.appTitle}</h3>
                <div className='flex flex-col space-y-4'>
                    {data.appParagraphs.map(paragraph=>{
                        return (
                            <p key={paragraph.substring(0,5)} className='text-dark-text'>{paragraph}</p>
                        )
                    })}
                </div>
                <h3 className=' text-xl underline'>Tech Stack</h3>
                <ul className='flex flex-wrap'>
                    {data.stackItems.map((item, i)=>{
                        if(i==(data.stackItems.length-1)){
                            return (
                                <li key={item} className='text-dark-text'>{item}</li>
                            )
                        } else {
                            return (
                                <li key={item} className='text-dark-text flex mr-2'>
                                    <span>{item}</span>
                                    <span className='ml-2'>-</span>
                                </li>
                            )   
                        }
                    })}
                </ul>
                <div className='text-center flex justify-between md:justify-start md:space-x-8 w-full pr-3 md:pr-0  pt-2 pb-5'>
                        <a
                            href={data.ghLink}
                            rel="noreferrer"
                            target="_blank"
                            className='bg-dark-borders px-3 py-3 md:text-lg md:px-3 flex flex-row items-center space-x-2 rounded-xl'>
                            <Github color={currentColor} />
                            <span className='text-dark-text text-sm'>See in GitHub</span>
                        </a>

                        <a href={data.demoLink}
                            rel="noreferrer"
                            target="_blank" 
                            className=' bg-dark-borders px-3 py-3 md:text-lg md:px-3 flex flex-row items-center space-x-2 rounded-xl'>
                            <LiveDemo color={currentColor} />
                            <span className='text-dark-text text-sm'>Live Demo</span>
                        </a>
                </div>
            </div>
            {/* up left */}
            <Stick color={currentColorStick} angle={0} coordinate={{top: '0%', left: '0%', translate: width >768 ? ['-75%', '-25%'] : ['-30%', '-30%']}} />
            {/* up right */}
            <Stick color={currentColorStick} angle={90} coordinate={{top: '0%', left: '100%', translate: width >768 ? ['-115%', '-25%'] : ['-70%', '-30%']}} />
            {/* down left */}
            <Stick color={currentColorStick} angle={90} coordinate={{top: '100%', left: '0%', translate: width >768 ? ['-70%', '-70%'] : ['-30%','-70%']}} />
            {/* down right*/}
            <Stick color={currentColorStick} angle={0} coordinate={{top: '100%', left: '100%', translate:width >768 ? ['-120%', '-70%'] : ['-70%','-70%'] }} />
        </div>
    )
}

export default Project
