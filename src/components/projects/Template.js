import React from 'react'

const Template = () => {
    return (
        <div  className='bg-white bg-opacity-50'>
            <h3 className='text-center text-md tracking-widest text-yellow-dessert bg-blue-atlantic'>WEBSITE TEMPLATE</h3>
            <div  className='bg-yellow-dessert text-center'>
                <p>Responsive website template for musicians.</p>
                <p>This website can be used as a template for any local music group. It has a consistent layout & includes animations . It also contains useful elements such as a menu or a carousel. </p>
                <p>This project helped me develop basic programming skills. </p>
            </div>
            <div className='flex flex-col md:flex-row'>
                <div className='border-2 border-black'>
                    img1 & img2
                </div>
                <div  className='border-2 border-grey-highlight'>
                    img3 & img4
                </div>
            </div>
            <div className='text-center text-yellow-dessert bg-blue-atlantic'>
                bttn1 & bttn2
            </div>
        </div>
    )
}

export default Template
