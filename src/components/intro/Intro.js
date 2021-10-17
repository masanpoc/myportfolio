import React, {useRef, useContext, useLayoutEffect, useEffect, useState} from 'react'
import { gsap } from "gsap";
import { ModeContext } from '../App';
import face from './png/face.png'
import squareMobile from './png/squareMb.png'
import squareDesktop from './png/squareDt.png'
import { executeScrollForId } from '../../functions/executeScrollForId';
import Burger from './svg/Burger';
import Shape from './svg/Shape';

const Intro = ({width}) => {
    let sayHiMessage = useRef();
    let welcomeMessage = useRef();
    const fadeInTimeline = useRef();
    
    useLayoutEffect(() => {
        function fadeIn() {
            if(window.outerWidth>768){
                fadeInTimeline.current = gsap.timeline()
                fadeInTimeline.current
                .from(sayHiMessage, {
                    autoAlpha: 0,
                    duration: 1,
                    delay: 0.5,
                    xPercent: -10
                })
                // .from(welcomeMessage, {
                //     autoAlpha: 0,
                //     duration: 1,
                //     delay:0.1,
                //     yPercent: 80,
                // })
            }
            else {
                fadeInTimeline.current = gsap.timeline()
                fadeInTimeline.current
                .from(sayHiMessage, {
                    autoAlpha: 0,
                    duration: 1,
                    delay: 0.5,
                    xPercent: -20
                })
                // .from(welcomeMessage, {
                //     autoAlpha: 0,
                //     duration: 1,
                //     delay:0.1,
                //     yPercent: 20,
                // })
            }
        }
        fadeIn();
    }, [])

    const {state, dispatch} = useContext(ModeContext);
    const [darkMode, setDarkMode] = useState(true);

    useEffect(() => {
        if(darkMode){
            dispatch({type: 'DARK', value: 'dark'})
        } else {
            dispatch({type: 'LIGHT', value:'light'})
        }
    }, [darkMode])

    const currentColor = '#434343'
    

    return (
        <div id='about'  className='flex flex-col space-y-52 md:space-y-60 pt-36 md:pt-52 items-center text-blue-atlantic h-screen'>
            {/* change mode svg */}

            {/* heading (mobile or desktop) */}
            {
                width > 768 ?  
                
                <ul className='sticky'>
                {/* sticky menu */}
                    <li><button onClick={()=>executeScrollForId('about')}>About</button></li>
                    <span>|</span>
                    <li><button onClick={()=>executeScrollForId('projects')}>Projects</button></li> 
                    <span>|</span>
                    <li><button onClick={()=>executeScrollForId('skills')}>Tech Skills</button></li> 
                    <span>|</span>
                    <li><button onClick={()=>executeScrollForId('contact')}>Contact</button></li>           
                </ul> 
                
                : <button onClick={()=>undefined}> <Burger /></button>
            }
        {/* <button onClick={()=>{setDarkMode(!darkMode)}} >Change mode</button> */}

            {/* face close to square */}
            <img src={width>768 && face} className='absolute' />
                {/* irregular shape close to square */}
                <div className='absolute w-full'>
                    <Shape color={currentColor} />
                </div>

            {/* text box */}
            <div ref={el=>(sayHiMessage=el)} className='text-3xl flex flex-col justify-center w-10/12 space-y-2 md:pr-80 relative'>
                
                {/* background: black square in png format */}
                <img src={width>768 ? squareDesktop : squareMobile } className='absolute' style={{height: '120%', width: '100%', top: '50%', transform: 'translateY(-52%)'}} />
                {/* content */}
                <h1 className='z-10'>Frontend Developer</h1>
                <div className='flex flex-col space-y-4 z-10'>
                    <p className='text-dark-text'>
                        Hello, Im Mario Sancho, a chemical engineering graduate that decided to take another path and join the Tech community.
                    </p>
                    <p className='text-dark-text'>
                        Currently, Im a creative React developer that uses logical and critical thinking to solve problems. Im a person motivated by 
                        working well as part of a team and mentoring and coaching others.
                    </p>
                    <p className='text-dark-text'>
                        If you are looking for a frontend developer, Im available for work and Im open to work with most up-to-date technologies.
                    </p>
                    <p className='text-dark-text'>
                        Welcome to my portfolio!
                    </p>   
                </div>
                
            </div>
           
        </div>
    )
}

export default Intro
