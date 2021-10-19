import React, {useRef, useContext, useLayoutEffect, useEffect, useState} from 'react'
import { gsap } from "gsap";
import { ModeContext } from '../App';
import face from './png/face.png'
import squareMobile from './png/squareMb.png'
import squareDesktop from './png/squareDt.png'
import squareLightMobile from './png/squareMbLight.png';
import squareLightDesktop from './png/squareDtLight.png'
import { executeScrollForId } from '../../functions/executeScrollForId';
import Burger from './svg/Burger';
import Shape from './svg/Shape';
import Moon from './svg/Moon';
import Sun from './svg/Sun';
import Modal from './subcomponents/Modal';

const Intro = ({width}) => {
    let shapeRef = useRef();
    let squareRef = useRef();
    let picRef = useRef();
    let navBarAndModeRef = useRef();
    const fadeInTimeline = useRef();
    
    useLayoutEffect(() => {
        function fadeIn() {
            if(window.outerWidth>768){
                fadeInTimeline.current = gsap.timeline()
                fadeInTimeline.current
                .from(squareRef, {
                    autoAlpha: 0,
                    duration: 1.5,
                    delay: 0.5,
                    xPercent: 50
                })
                .from(shapeRef, {
                    autoAlpha: 0,
                    duration: 1,
                    scale: 0,
                    ease: "bounce.out"
                }, '<1')
                .from(picRef, {
                    autoAlpha: 0,
                    yPercent: 20,
                    duration: 1
                })
                .from(navBarAndModeRef, {
                    autoAlpha: 0,
                    duration: 1
                })
            }
            else {
                fadeInTimeline.current = gsap.timeline()
                fadeInTimeline.current
                .from(squareRef, {
                    autoAlpha: 0,
                    duration: 1,
                    delay: 0.5,
                    yPercent: 20
                })
                .from(shapeRef, {
                    autoAlpha: 0,
                    duration: 1,
                }, '<')
                .from(navBarAndModeRef, {
                    autoAlpha: 0,
                    duration: 1
                }, '<')
            }
        }
        fadeIn();
    }, [])

    const {state, dispatch} = useContext(ModeContext);
    const [darkMode, setDarkMode] = useState(true);
    const [currentColor, setCurrentColor] = useState('#434343');
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        // + animation
        if(darkMode){
            dispatch({type: 'DARK', value: 'dark'});
            document.documentElement.classList.add('dark');
            setCurrentColor('#434343');
        } else {
            dispatch({type: 'LIGHT', value:'light'});
            document.documentElement.classList.remove('dark');
            setCurrentColor('#C4DEF5');
        }
    }, [darkMode])

    function handleClick() {
        setIsActive(!isActive);
    }
    

    return (
        <div className='flex flex-col items-center space-y-28 pb-40 min-h-screen relative md:overflow-x-hidden'>
            <div ref={(el)=>(navBarAndModeRef=el)} className='flex flex-row w-full 
            
            items-center justify-between px-8 py-8 md:px-12 md:pt-4 md:pb-8 border-b-2 md:border-b-0 border-light-theme-grey dark:border-green-lintern border-opacity-90'>
                {/* navbar (mobile), keeping in mind order */}
                {width<=768 && <div onClick={handleClick}> 
                    <button onClick={handleClick}>
                        <Burger color={state.mode=='dark' ? '#62F556' : '#000000'} bg={state.mode=='dark' ? "#4B4B4B" : "#C4DEF5"} />
                    </button>
                    <Modal isActive={isActive} />
                </div>}
                {/* change mode svg */}
                <button onClick={()=>{setDarkMode(!darkMode)}} className='md:pt-4'>
                    {state.mode=='dark' ? <Moon /> : <Sun />}
                </button>
                {/* navbar (desktop) */}
                {
                    width > 768 &&  
                    
                    <ul className='sticky flex flex-row text-light-theme-grey dark:text-green-lintern space-x-8 text-xl'>
                    {/* sticky menu */}
                        <li><button onClick={()=>executeScrollForId('about')}>About</button></li>
                        <span>|</span>
                        <li><button onClick={()=>executeScrollForId('projects')}>Projects</button></li> 
                        <span>|</span>
                        <li><button onClick={()=>executeScrollForId('skills')}>Tech Skills</button></li> 
                        <span>|</span>
                        <li><button onClick={()=>executeScrollForId('contact')}>Contact</button></li>           
                    </ul> 
                    
                    
                }
                
                
            </div>
            
            {/* irregular shape close to square */}
            <div ref={(el)=>(shapeRef=el)} id='about' className='absolute' style={width>768 ? {width: '100vw', height: '70vh', top: '0%', transform: 'translateX(-20%)'} : {width: '100vw', height: '85vh', top: '4%', transform: 'translateX(0%)'}} >
                    <Shape color={currentColor} />
            </div>
            {/* face close to square */}
            {width>768 && <img ref={(el)=>(picRef=el)} src={face} className='absolute' style={{width: '385px', transform: 'translateX(-70%)'}} />}
            
            
            {/* text box */}
            <div ref={el=>(squareRef=el)} className='text-3xl flex flex-col justify-center w-10/12 space-y-2 md:pr-80 relative'
             style={width>768 ? {position: 'absolute', top: '0', transform: 'translate(30%, 40%)'} : {}}>
                
                

                {/* background: black square in png format */}
                <img    src={width>768 ? (darkMode ? squareDesktop : squareLightDesktop) : (darkMode ? squareMobile : squareLightMobile) } className='absolute' style={width>768 ? {height: '125%', width: '62%', top: '54%', left: '2%', transform: 'translateY(-52%)'} : {height: '120%', width: '100%', top: '50%', transform: 'translateY(-52%)'}} />
                {/* content */}
                <h1 className='z-10' style={{padding: '2% 0 0 10%'}} >Frontend Developer</h1>
                <div className='flex flex-col space-y-4 z-10' style={width>768 ? {padding: '2% 10% 0 10%', maxWidth: '55vw'} :{padding: '5% 10% 0 10%'}} >
                    <p className='text-black dark:text-dark-text'>
                        Hello, I&#39;m Mario Sancho, a chemical engineering graduate that decided to take another path and join the Tech community.
                    </p>
                    <p className='text-black dark:text-dark-text'>
                        Currently, I&#39;m a <span className='font-bold dark:font-normal dark:text-green-lintern'> creative React developer</span> that uses logical and critical thinking to solve problems. I&#39;m a person motivated by 
                        working well as part of a team and mentoring and coaching others.
                    </p>
                    <p className='text-black dark:text-dark-text'>
                        If you are looking for a frontend developer, I&#39;m <span className=' font-bold dark:font-normal dark:font dark:text-green-lintern'> available for work </span> and I&#39;m open to work with most up-to-date technologies.
                    </p>
                    <p className='text-black dark:text-dark-text'>
                        Welcome to my portfolio!
                    </p>   
                </div>
                
            </div>
           
        </div>
    )
}

export default Intro
