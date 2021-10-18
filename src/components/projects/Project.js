import React, {useState, useEffect, useContext} from 'react';
import Github from './svg/Github'
import LiveDemo from './svg/LiveDemo'
import Stick from './svg/Stick';
import {ModeContext} from '../App';

const Project = ({data, width}) => {
    const {state} = useContext(ModeContext);
    const [currentColors, setCurrentColors] = useState({
        sticks: "#303030",
        svgs: "#8f8f8f" 
    });
    
    useEffect(() => {
        if(state!=undefined){
            if(state.mode=='dark'){
                setCurrentColors({
                    sticks: "#303030",
                    svgs: "#8f8f8f" 
                })
            } 
            if(state.mode=='light'){
                setCurrentColors({
                    sticks: "#C4DEF5",
                    svgs: "#000000"
                })
            }
        }
        
    }, [state.mode])

    return (
        <div className='flex flex-col md:flex-row md:space-x-6 mx-5 md:mx-0 relative border-light-theme-greyWhite dark:border-dark-borders border-2'>
            <div id='mask' className=' h-60 overflow-hidden border-b-2  border-light-theme-greyWhite dark:border-dark-borders md:border-b-0 md:border-r-2 md:h-auto md:w-80'  style={state.mode=='dark' ? {boxShadow: 'inset 0px 0px 0px 200px #0000008c'} : {boxShadow: 'inset 0px 0px 0px 200px #3b82f680'}}>
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
                            <p key={paragraph.substring(0,5)} className='text-black dark:text-dark-text'>{paragraph}</p>
                        )
                    })}
                </div>
                <h3 className=' text-xl underline'>Tech Stack</h3>
                <ul className='flex flex-wrap'>
                    {data.stackItems.map((item, i)=>{
                        if(i==(data.stackItems.length-1)){
                            return (
                                <li key={item} className='text-black dark:text-dark-text'>{item}</li>
                            )
                        } else {
                            return (
                                <li key={item} className='text-black dark:text-dark-text flex mr-2'>
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
                            className=' bg-light-theme-bblue dark:bg-dark-borders px-3 py-3 md:text-lg md:px-3 flex flex-row items-center space-x-2 rounded-xl'>
                            <Github color={currentColors.svgs} />
                            <span className='text-black dark:text-dark-text text-sm'>See in GitHub</span>
                        </a>

                        <a href={data.demoLink}
                            rel="noreferrer"
                            target="_blank" 
                            className=' bg-light-theme-bblue dark:bg-dark-borders px-3 py-3 md:text-lg md:px-3 flex flex-row items-center space-x-2 rounded-xl'>
                            <LiveDemo color={currentColors.svgs} />
                            <span className='text-black dark:text-dark-text text-sm'>Live Demo</span>
                        </a>
                </div>
            </div>
            {/* up left */}
            <Stick color={currentColors.sticks} angle={0} coordinate={{top: '0%', left: '0%', translate: width >768 ? ['-75%', '-25%'] : ['-30%', '-30%']}} />
            {/* up right */}
            <Stick color={currentColors.sticks} angle={90} coordinate={{top: '0%', left: '100%', translate: width >768 ? ['-115%', '-25%'] : ['-70%', '-30%']}} />
            {/* down left */}
            <Stick color={currentColors.sticks} angle={90} coordinate={{top: '100%', left: '0%', translate: width >768 ? ['-70%', '-70%'] : ['-30%','-70%']}} />
            {/* down right*/}
            <Stick color={currentColors.sticks} angle={0} coordinate={{top: '100%', left: '100%', translate:width >768 ? ['-120%', '-70%'] : ['-70%','-70%'] }} />
        </div>
    )
}

export default Project
