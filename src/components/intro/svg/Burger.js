import React from 'react'

const Burger = ({color, bg}) => {
    return (
        
<svg width="46" height="47" viewBox="0 0 46 47" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="46" height="47" rx="8" fill={bg}/>
<rect x="8" y="12" width="31" height="4" fill={color} fillOpacity="0.88"/>
<rect x="8" y="22" width="31" height="4" fill={color} fillOpacity="0.88"/>
<rect x="8" y="32" width="31" height="4" fill={color} fillOpacity="0.88"/>
</svg>

    )
}

export default Burger

