import React, {useState, useContext, useEffect} from 'react'
import {ModeContext} from '../App'
import ReactIcon from './svg/ReactIcon'

const Footer = () => {

    const {state} = useContext(ModeContext);
    const [currentColor, setCurrentColor] = useState("#8F8F8F");
    
    useEffect(() => {
        if(state!=undefined){
            if(state.mode=='dark'){
                setCurrentColor("#8F8F8F")
            } 
            if(state.mode=='light'){
                setCurrentColor("#000000")
            }
        }
        
    }, [state.mode])

    return (
        <div className='mt-20 md:mt-40'>
            <hr></hr>
            <div className="flex justify-end space-x-5 pr-8 pt-10 md:pr-14 md:space-x-7 h-60 md:h-52">
                <h4 className='font-adam text-black dark:text-dark-text'>Built with React</h4>
                <ReactIcon color={currentColor} />
            </div>
        </div>
    )
}

export default Footer
