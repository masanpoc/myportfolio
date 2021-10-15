import React from 'react'

const Stick = ({color, angle, coordinate}) => {
    return (
        <div style={{top: coordinate.top, left: coordinate.left}} className='absolute'>
            
        <svg width="52" height="51" viewBox="0 0 52 51" fill="none" transform={`rotate(${angle})`} xmlns="http://www.w3.org/2000/svg">
            <path d="M49 3L3 48" stroke={color} strokeWidth="7"/>
        </svg>
        </div>
    )
}

export default Stick


