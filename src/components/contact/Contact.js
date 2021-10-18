import React from 'react'
import Location from './svg/Location'

const Contact = () => {

    const currentColor = "#8F8F8F";

    return (
        <div id='contact'>
            <hr></hr>
            <div className="flex flex-col justify-center space-y-16 md:space-y-24 mt-24 md:mt-28 mb-40 ">
                ¡<h2 className=' w-3/5 mx-auto font-adam px-6 pt-2 pb-4  md:px-8 md:py-3 text-3xl text-center text-green-lintern opacity-90 border-b-2 border-green-lintern' style={{width: 'fit-content'}}>Contact</h2>
                <div className='flex flex-col justify-center md:flex-row w-8/12 md:w-full mx-auto '>
                    {/* map */}
                    <div className='relative hidden md:block h-auto border-l-2 border-t-2 border-b-2 border-dark-borders'
                     style={{width: '36%', paddingLeft: '6%'}}>
                        <span className='hidden md:block md:absolute text-dark-text'
                            style={{bottom: '34%', left: '5%'}}
                        >La Coruña, Spain</span>
                        <Location  color={currentColor}/>
                    </div>
                    {/* info */}
                    <div className='flex flex-col justify-center space-y-20
                       md:px-12
                     md:space-y-20 border-0 md:border-2 border-dark-borders'>
                        <div className='flex flex-col space-y-16 md:space-y-10'>
                            <div className='flex flex-col space-y-2 md:space-y-2'>
                                <h3 className='font-adam text-green-lintern underline'>Send me an email:</h3>
                                <a className='text-dark-text underline font-lato font-bold' href="mailto: marioscp1998@outlook.es">marioscp1998@outlook.es</a>
                            </div>

                            <div className='flex flex-col space-y-4 md:space-y-4'>
                                <h3 className='font-adam text-green-lintern underline '>Connect with me through Linkedin:</h3>
                                <a href='https://www.linkedin.com/in/mario-cirer/' rel="noreferrer"
                                    target="_blank" 
                                    className='font-lato text-dark-text bg-dark-borders 
                                    px-4 py-2 rounded-md w-full md:w-max text-center'
                                    >See Linkedin Profile</a>
                            </div>
                        </div>
                        
                        
                        <h4 className='font-adam text-green-lintern'>*Open to relocation & remote working</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
