import React, {useRef, useLayoutEffect} from 'react'
import img1 from './images/img_2_1_1.png';
import img2 from './images/img_2_1_2.png';
import img3 from './images/img_2_2_1.png';
import img4 from './images/img_2_2_2.png';
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Template = () => {

    const width = window.innerWidth;

    let title = useRef()
    let text = useRef();
    let screen1= useRef();
    let screen2 = useRef();
    let screen3= useRef();
    let screen4 = useRef();
    let buttons = useRef();
    const swimTimeline = useRef();

    useLayoutEffect(() => {

        function startTimeline() {
            if(width>768){
                swimTimeline.current = gsap.timeline({
                    scrollTrigger: {
                        // markers: true,
                        trigger: title,
                        start: 'bottom center',
                        end: 'top top'
                    }
                })
                swimTimeline.current
                .from(text, {
                    autoAlpha: 0,
                    duration: 1,
                    yPercent: 30
                })
                .from(screen1, {
                    autoAlpha: 0,
                    duration: 1,
                    xPercent: -30,
                })
                .from(screen2, {
                    autoAlpha: 0,
                    duration: 1,
                    xPercent: -30,
                })
                .from(screen3, {
                    autoAlpha: 0,
                    duration: 1,
                    xPercent: 30,
                })
                .from(screen4, {
                    autoAlpha: 0,
                    duration: 1,
                    xPercent: 30,
                })
                .from(buttons, {
                    autoAlpha: 0,
                    duration: 1
                })
            }
            else {
                gsap.from(text, {
                    scrollTrigger: {
                        // scrub: true, 
                        // markers: true,
                        trigger: text,
                        start: 'top center+=100',
                        end: 'top top',
                        // onEnter: ()=>console.log('enter')
                    },
                    autoAlpha: 0,
                    duration: 1,
                });
                gsap.from(screen1, {
                    scrollTrigger: {
                        // scrub: 1, 
                        // markers: true,
                        trigger: screen1,
                        start: 'top center+=100',
                        end: 'top top'
                    },
                    autoAlpha: 0,
                    xPercent: -20,
                    duration: 1
                });
                gsap.from(screen2, {
                    scrollTrigger: {
                        // scrub: 1, 
                        // markers: true,
                        trigger: screen2,
                        start: 'top center+=100',
                        end: 'top top'
                    },
                    autoAlpha: 0,
                    xPercent: -20,
                    delay:1,
                    duration: 1
                });
                gsap.from(screen3, {
                    scrollTrigger: {
                        // scrub: 1, 
                        // markers: true,
                        trigger: screen3,
                        start: 'top center+=100',
                        end: 'top top'
                    },
                    autoAlpha: 0,
                    xPercent: 20,
                    duration: 1
                });
                gsap.from(screen4, {
                    scrollTrigger: {
                        // scrub: 1, 
                        // markers: true,
                        trigger: screen4,
                        start: 'top center+=100',
                        end: 'top top'
                    },
                    autoAlpha: 0,
                    xPercent: 20,
                    delay:1,
                    duration: 1
                });
                gsap.from(buttons, {
                    scrollTrigger: {
                        // scrub: 1, 
                        // markers: true,
                        trigger: buttons,
                        start: 'top center+=100',
                        end: 'top top'
                    },
                    autoAlpha: 0,
                    duration: 1
                });
            }
        }
        startTimeline();
        
    }, [])

    return (
        <div className='mx-2 pt-20 md:mx-0'>
            <h3 ref={el=>(title=el)} className='text-center text-base tracking-widest text-yellow-dessert bg-blue-atlantic rounded-t-lg py-2 shadow-md md:text-xl md:py-3'>WEBSITE TEMPLATE</h3>
            <div className='bg-white bg-opacity-50 flex flex-col items-center space-y-12 pt-12 pb-20 md:pt-20 md:pb-28 md:space-y-20 rounded-b-lg'>
                <div ref={el=>(text=el)} className='bg-yellow-dessert mx-5 md:mr-20 md:ml-24 rounded-lg shadow-md flex flex-col space-y-4 mb-4 py-6 pl-5 pr-3 md:py-8 md:pr-6 md:pl-8'>
                    <p>Responsive website template developed for musicians.</p>
                    <p>This website can be used as a template for any type of music group. It has a consistent layout & includes animations . It also contains useful elements such as a menu or a carousel. </p>
                    <p>This project helped me develop basic programming skills. </p>
                </div>
                <div className='flex flex-col space-y-16 md:flex-row md:space-y-0 md:justify-center'>
                    <div className=' flex justify-start relative w-10/12 rounded-xl overflow-hidden' style={{'marginLeft': '8.5%'}}>
                        <img ref={el=>(screen1=el)} src={img1} className=' w-9/12 h-auto border-2 border-black rounded-xl'></img>
                        <img ref={el=>(screen2=el)} src={img2} className='absolute left-1/4 w-9/12 h-auto border-2 border-black rounded-xl'></img>
                    </div>
                    <div className=' flex justify-start relative w-10/12 rounded-xl overflow-hidden md:mr-20' style={{'marginLeft': '8.5%'}}>
                        <img ref={el=>(screen3=el)} src={img3} className=' w-9/12 h-auto border-2 border-grey-highlight rounded-xl'></img>
                        <img ref={el=>(screen4=el)} src={img4} className='absolute left-1/4 w-9/12 h-auto border-2 border-grey-highlight rounded-xl'></img>
                    </div>
                </div>
                <div ref={el=>(buttons=el)} className='text-center flex justify-center md:justify-start space-x-12 w-full text-yellow-dessert pt-6'>
                        <button className=' md:ml-24 bg-blue-atlantic shadow-md px-5 py-3 rounded-xl md:text-lg md:px-7'>Visit Website</button>
                        <button className='bg-blue-atlantic px-5 py-3 rounded-xl  md:text-lg md:px-7'>See Repo</button>
                </div>
            </div>
        </div>
    )
}

export default Template
