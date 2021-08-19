import React, {useRef, useLayoutEffect} from 'react'
import { gsap } from "gsap";


const Intro = () => {
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
                .from(welcomeMessage, {
                    autoAlpha: 0,
                    duration: 1,
                    delay:0.1,
                    yPercent: 80,
                })
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
                .from(welcomeMessage, {
                    autoAlpha: 0,
                    duration: 1,
                    delay:0.1,
                    yPercent: 20,
                })
            }
        }
        fadeIn();
    }, [])

    

    return (
        <div  className='flex flex-col space-y-52 md:space-y-60 pt-36 md:pt-52 items-center text-blue-atlantic h-screen'>
            <div ref={el=>(sayHiMessage=el)} className='text-3xl flex flex-col space-y-2 md:pr-80'>
                <h1 >Hey,</h1>
                <h1>I&#39;m Mario Sancho.</h1>
            </div>
            <div ref={el=>(welcomeMessage=el)} className='font-semibold text-3xl text-center tracking-widest flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-4 md:text-4xl'>
                <h1>WELCOME</h1>  
                <h1>TO</h1>
                <h1 className='md:flex md:flex-row md:space-x-4'><span>MY</span> <span>PORTFOLIO</span></h1>
            </div>
        </div>
    )
}

export default Intro
