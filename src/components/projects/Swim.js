import React, {useRef, useLayoutEffect} from 'react'
import img1 from './images/img_1_1.png';
import img2 from './images/img_1_2.png';
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const swim = () => {
    let title = useRef()
    let text = useRef();
    let screen1= useRef();
    let screen2 = useRef();
    let buttons = useRef();
    const swimTimeline = useRef();

    useLayoutEffect(() => {
        function startTimeline() {
            if(window.outerWidth>768){
                swimTimeline.current = gsap.timeline({
                    scrollTrigger: {
                        scrub: 1, 
                        markers: true,
                        trigger: title,
                        // start: 'top center-=50',
                        // end: 'top top'
                    }
                })
                swimTimeline.current
                .from(text, {
                    autoAlpha: 0,
                    duration: 1,
                    delay: 0.5,
                    xPercent: -20
                })
                .from(screen1, {
                    autoAlpha: 0,
                    duration: 1,
                    yPercent: 40,
                })
                .from(screen2, {
                    autoAlpha: 0,
                    duration: 1,
                    yPercent: 40,
                })
                .from(buttons, {
                    autoAlpha: 0,
                    duration: 1,
                    yPercent: 40,
                })
            }
            else {
                gsap.from(text, {
                    scrollTrigger: {
                        // scrub: 1, 
                        // markers: true,
                        trigger: text,
                        start: 'bottom center',
                        end: 'top top'
                    },
                    autoAlpha: 0,
                    duration: 1
                });
                gsap.from(screen1, {
                    scrollTrigger: {
                        // scrub: 1, 
                        // markers: true,
                        trigger: screen1,
                        start: 'bottom center',
                        end: 'top top'
                    },
                    autoAlpha: 0,
                    duration: 1
                });
                gsap.from(screen2, {
                    scrollTrigger: {
                        // scrub: 1, 
                        // markers: true,
                        trigger: screen2,
                        start: 'bottom center',
                        end: 'top top'
                    },
                    autoAlpha: 0,
                    duration: 1
                });
                gsap.from(buttons, {
                    scrollTrigger: {
                        // scrub: 1, 
                        // markers: true,
                        trigger: buttons,
                        start: 'bottom center',
                        end: 'top top'
                    },
                    autoAlpha: 0,
                    duration: 1
                });
            }
        }
        startTimeline()
    }, [])
    
    return (
        <div className='mx-2 md:mx-0'>
            <h3 ref={el=>(title=el)} className='text-center text-base tracking-widest text-yellow-dessert bg-blue-atlantic rounded-t-lg py-2 shadow-md  md:text-xl md:py-3'>SWIMMING APP</h3>
            <div className='bg-white bg-opacity-50 flex flex-col items-center space-y-12 pt-12 pb-20  md:pt-20 md:pb-28 md:space-y-20 rounded-b-lg'>
                <div className='flex flex-col items-center space-y-12 md:flex-row md:space-y-0 md:pr-9 md:pl-12'>
                    <div ref={el=>(text=el)} className='bg-yellow-dessert mx-5 rounded-lg shadow-md md:w-9/12 flex flex-col space-y-4 mb-4 py-6 pl-5 pr-3 md:mr-0 md:mb-0 md:py-7 md:pl-6 md:pr-5'>
                        <p>Web app built for swimmers. The app generates custom swimming workouts.</p>
                        <p>The user fills the form according to his/her preferences. Swimming blocks are generated and swimming drills are selected based on user’s input.</p>
                        <p>Overall, this project taught me to work with complex logic.</p>
                    </div>
                    <div className=' flex justify-start relative w-10/12 rounded-xl overflow-hidden md:h-full md:mt-0' style={{'marginLeft': '7.5%'}}>
                        <img ref={el=>(screen1=el)} src={img1} className=' w-8/12 h-auto border-2 border-black rounded-xl'></img>
                        <img ref={el=>(screen2=el)} src={img2} className='absolute left-1/4 w-8/12 h-auto border-2 border-black rounded-xl'></img>
                    </div>
                </div>
                <div ref={el=>(buttons=el)} className='text-center flex justify-center md:justify-start space-x-12 w-full text-yellow-dessert pt-6'>
                    <button className='md:ml-24 bg-blue-atlantic shadow-md px-5 py-3 rounded-xl md:text-lg md:px-7'>Visit Website</button>
                    <button className='bg-blue-atlantic px-5 py-3 rounded-xl md:text-lg md:px-7'>See Repo</button>
                </div>
            </div>
        </div>
    )
}

export default swim
