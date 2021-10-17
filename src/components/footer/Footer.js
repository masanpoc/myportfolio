import React from 'react'
import ReactIcon from './svg/ReactIcon'

const Footer = () => {

    const currentColor = "#8F8F8F";

    return (
        <div className='mt-20 md:mt-40'>
            <hr></hr>
            <div className="flex justify-end space-x-5 pr-8 pt-10 md:pr-14 md:space-x-7 h-60 md:h-52">
                <h4 className='font-adam'>Built with React</h4>
                <ReactIcon color={currentColor} />
            </div>
        </div>
    )
}

export default Footer
