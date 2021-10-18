import React, {useContext, useState, useEffect} from 'react'
import {ModeContext} from '../App';
import Location from './svg/Location'

const Contact = () => {

    const currentColor = "#8F8F8F";
    const {state} = useContext(ModeContext);
    const [currentColors, setCurrentColors] = useState({
        sticks: "#303030",
        svgs: "#8f8f8f" 
    });
    
    useEffect(() => {
        if(state!=undefined){
            if(state.mode=='dark'){
                setCurrentColors({
                    pin: "#62F556",
                    fill: "#8F8F8F",
                    lines: "#000000"
                })
            } 
            if(state.mode=='light'){
                setCurrentColors({
                    pin:"#262626" ,
                    fill: "#B5B4B4",
                    lines: "#353535"
                })
            }
        }
        
    }, [state.mode])

    return (
        <div id='contact'>
            <hr></hr>
            <div className="flex flex-col justify-center space-y-16 md:space-y-24 mt-24 md:mt-28 mb-40 ">
                ¡<h2 className=' w-3/5 mx-auto font-adam px-6 pt-2 pb-4  md:px-8 md:py-3 text-3xl text-center opacity-90 border-b-2 border-light-theme-grey dark:border-green-lintern' style={{width: 'fit-content'}}>Contact</h2>
                <div className='flex flex-col justify-center md:flex-row w-8/12 md:w-full mx-auto '>
                    {/* map */}
                    <div className='relative hidden md:block h-auto border-l-2 border-t-2 bg-light-theme-bblue dark:bg-black 
                    border-b-2 border-light-theme-greyWhite dark:border-dark-borders'
                     style={{width: '36%', paddingLeft: '6%'}}>
                        <span className='hidden md:block md:absolute text-black dark:text-dark-text'
                            style={{bottom: '34%', left: '5%'}}
                        >La Coruña, Spain</span>
                        <Location  colors={currentColors}/>
                    </div>
                    {/* info */}
                    <div className='flex flex-col justify-center space-y-20
                       md:px-12
                     md:space-y-20 border-0 md:border-2 border-light-theme-greyWhite dark:border-dark-borders'>
                        <div className='flex flex-col space-y-16 md:space-y-10'>
                            <div className='flex flex-col space-y-2 md:space-y-2'>
                                <h3 className='font-adam underline'>Send me an email:</h3>
                                <a className='text-black dark:text-dark-text underline font-lato font-bold' href="mailto: marioscp1998@outlook.es">marioscp1998@outlook.es</a>
                            </div>

                            <div className='flex flex-col space-y-4 md:space-y-4'>
                                <h3 className='font-adam underline '>Connect with me through Linkedin:</h3>
                                <a href='https://www.linkedin.com/in/mario-cirer/' rel="noreferrer"
                                    target="_blank" 
                                    className='font-lato text-black dark:text-dark-text bg-light-theme-bblue dark:bg-dark-borders 
                                    px-4 py-2 rounded-md w-full md:w-max text-center shadow-md dark:shadow-none'
                                    >See Linkedin Profile</a>
                            </div>
                        </div>
                        
                        
                        <h3 className='font-adam'>*Open to relocation & remote working</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
