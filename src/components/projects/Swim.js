import React from 'react'
import img1 from './images/img_1_1.png';
import img2 from './images/img_1_2.png';

const swim = () => {
    return (
        <div>
            <h3 className='text-center text-md tracking-widest text-yellow-dessert bg-blue-atlantic'>SWIMMING APP</h3>
            <div className='bg-white bg-opacity-50 flex flex-col items-center'>
                <div className='bg-yellow-dessert text-center'>
                    <p>Web app built for swimmers. The app generates custom swimming workouts.</p>
                    <p>The user fills the form according to his/her preferences. Swimming blocks are generated and swimming drills are selected based on user’s input.</p>
                    <p>Overall, this project taught me to work with complex logic.</p>
                </div>
                <div className=' flex justify-start relative w-10/12 rounded-lg overflow-hidden' style={{'marginLeft': '7.5%'}}>
                    <img src={img1} className=' w-8/12 h-auto border-2 border-black rounded-md'></img>
                    <img src={img2} className='absolute left-1/4 w-8/12 h-auto border-2 border-black rounded-md'></img>
                </div>
                <div className='text-center text-yellow-dessert bg-blue-atlantic'>
                    <button>Visit Website</button>
                    <button>See Repo</button>
                </div>
            </div>
        </div>
    )
}

export default swim
