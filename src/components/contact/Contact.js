import React from 'react'
import Location from './svg/Location'

const Contact = () => {

    const currentColor = "#8F8F8F";

    return (
        <div id='contact' className='mt-20 md:mt-40'>
            <hr></hr>
            <div className="flex justify-end space-x-5 pr-8 pt-10 md:pr-14 md:space-x-7 h-60 md:h-52">
                ¡<h2 className=' w-3/5 mx-auto font-adam px-6 pt-2 pb-4  md:px-8 md:py-3 text-3xl text-center text-green-lintern opacity-90 border-b-2 border-green-lintern' style={{width: 'fit-content'}}>Contact</h2>
                <div>
                    {/* map */}
                    <span className='hidden md:block'>La Coruña, Spain</span>
                    <Location className='hidden md:block' color={currentColor}/>
                    {/* info */}
                    <div>
                        <h3 className='font-adam text-green-lintern'>Send me an email:</h3>
                        <h3>marioscp1998@outlook.es</h3>
                        <h3 className='font-adam text-green-lintern'>Connect with me through Linkedn:</h3>
                        <a href='https://www.linkedin.com/in/mario-cirer/' rel="noreferrer"
                            target="_blank">See Linkedn Profile</a>
                        <h4 className='font-adam text-green-lintern'>Open to relocation & remote working</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
