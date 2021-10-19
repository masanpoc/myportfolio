import React, {useContext, useState, useEffect} from 'react'
import { createPortal } from 'react-dom'
import Close from '../svg/Close'
import {ModeContext} from '../../App'
import { executeScrollForId } from '../../../functions/executeScrollForId'

const Modal = ({isActive}) => {
    const {state} = useContext(ModeContext);
    const [currentColor, setCurrentColor] = useState("#8F8F8F");
    
    useEffect(() => {
        if(state!=undefined){
            if(state.mode=='dark'){
                setCurrentColor("#62F556")
            } 
            if(state.mode=='light'){
                setCurrentColor("#000000")
            }
        }
        
    }, [state.mode])

    return (
        createPortal(
            isActive && <div className=' z-20 fixed bg-light-theme-bblue-o5  dark:bg-black-o5 h-full w-full top-0 left-0 flex flex-col items-start justify-start'>
                <div className='bg-white dark:bg-black flex flex-col justify-start absolute h-full w-4/5 border-r-2 border-light-theme-grey   dark:border-dark-borders'>
                    <div className='flex justify-end'>
                        <button className='pt-4 pr-4'><Close color={currentColor} /></button>
                    </div>
                    <ul className='sticky flex flex-col justify-center items-center
                     text-light-theme-grey dark:text-green-lintern space-y-8 pb-12  text-2xl h-full' >
                    {/* sticky menu */}
                        <li><button onClick={()=>executeScrollForId('about')}>About</button></li>
                        <hr className='w-1/12'></hr>
                        <li><button onClick={()=>executeScrollForId('projects')}>Projects</button></li> 
                        <hr className='w-1/12'></hr>
                        <li><button onClick={()=>executeScrollForId('skills')}>Tech Skills</button></li> 
                        <hr className='w-1/12'></hr>
                        <li><button onClick={()=>executeScrollForId('contact')}>Contact</button></li>           
                    </ul> 
                </div>
            </div>
        , document.getElementById('modal'))
    )
}

export default Modal
