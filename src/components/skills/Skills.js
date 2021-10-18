import React, {useRef, useLayoutEffect, useEffect, useState, useContext} from 'react'
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import FunctionalProgramming from './svg/FunctionalProgramming';
import Analytics from './svg/Analytics';
import StateManagement from './svg/StateManagement';
import VersionControl from './svg/VersionControl';
import TestDebugging from './svg/TestDebugging';
import Animation from './svg/Animation';
import ApiIntegration from './svg/ApiIntegration';
import Componentization from './svg/Componentization';
import DataVisualization from './svg/DataVisualization';
import PackageManagement from './svg/PackageManagement';
import Research from './svg/Research';
import Routing from './svg/Routing';
import TechnicalDocumentation from './svg/TechnicalDocumentation';
import UiDesign from './svg/UiDesign';
import UxDesign from './svg/UxDesign';
import WebPerformance from './svg/WebPerformance'
import {ModeContext} from '../App'


gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
    let title = useRef();
    let skillsWrapper = useRef();
    const {state} = useContext(ModeContext);
    const [currentColor, setCurrentColor] = useState("#8F8F8F");
    
    useEffect(() => {
        if(state!=undefined){
            if(state.mode=='dark'){
                setCurrentColor("#8F8F8F")
            } 
            if(state.mode=='light'){
                setCurrentColor("#000000")
            }
        }
        
    }, [state.mode])
    
    useLayoutEffect(() => {
        function fadeIn() {
            if(window.outerWidth>768){
                gsap.from(skillsWrapper, {
                    scrollTrigger: {
                        // scrub: 1, 
                        // markers: true,
                        trigger: title,
                        start: 'bottom+=100 center',
                        end: 'top top'
                    },
                    autoAlpha: 0,
                    duration: 1
                  });
            }
            else {
                console.log(skillsWrapper.childNodes)
                gsap.from(skillsWrapper.childNodes, {
                    scrollTrigger: {
                        // scrub: 1, 
                        // markers: true,
                        trigger: title,
                        start: 'bottom center',
                        end: 'top top'
                    },
                    autoAlpha: 0,
                    duration: 1,
                    stagger:0.1
                });
            }
            
        }
        fadeIn();
    }, [])

    return (
        <div id='skills'>
            <hr></hr>
            <div className='flex flex-col justify-center space-y-16 md:space-y-32 mt-24 md:mt-28 mb-40'>
                
                <h2 ref={el=>(title=el)} className=' w-3/5 mx-auto font-adam px-6 pt-2 pb-4 
                 md:px-8 md:py-3 text-3xl text-center  opacity-90 border-b-2 border-light-theme-grey dark:border-green-lintern' style={{width: 'fit-content'}}>TECH SKILLS</h2>
                
                
                    
                    <div ref={el=>(skillsWrapper=el)} className=' flex flex-col space-y-20 justify-center space-y-4 
                    md:mb-6 md:pt-16 md:pb-0 md:pl-8 md:pr-8 md:border-2 md:bg-light-theme-bblue md:dark:bg-transparent md:border-light-theme-greyWhite md:dark:border-dark-borders
                    md:grid grid-cols-4 md:w-7/12 md:self-center md:space-y-0 font-bold dark:font-normal text-center
                    ' style={{color: currentColor}}>

                        {/* cant loop if want to display svg and change it to light/dark */}
                        <div className='flex flex-col justify-start items-center space-y-3 md:h-44'> 
                            <FunctionalProgramming color={currentColor}/>
                            <h4>Functional Programming</h4>
                        </div>
                        <div className='flex flex-col justify-start items-center space-y-3 md:h-44'>
                            <StateManagement color={currentColor} />
                            <h4>State Management</h4>
                        </div>
                        <div className='flex flex-col justify-start items-center space-y-3 md:h-44'>
                            <VersionControl color={currentColor} />
                            <h4>Version Control</h4>
                        </div>
                        <div className='flex flex-col justify-start items-center space-y-3 md:h-44'>
                            <TestDebugging color={currentColor} />
                            <h4>Testing & Debugging</h4>
                        </div>
                        <div className='flex flex-col justify-start items-center space-y-3 md:h-44'>
                            <ApiIntegration color={currentColor} />
                            <h4>API Integration</h4>
                        </div>
                        <div className='flex flex-col justify-start items-center space-y-3'>
                            <Componentization color={currentColor} />
                            <h4>Componentization</h4>
                        </div>
                        <div className='flex flex-col justify-start items-center space-y-3 md:h-44'>
                            <UxDesign color={currentColor} />
                            <h4>UX Design</h4>
                        </div>
                        <div className='flex flex-col justify-start items-center space-y-3 md:h-44'>
                            <TechnicalDocumentation color={currentColor} />
                            <h4 className='flex flex-col justify-center'>
                                <span>Reading & Writing </span>
                                <span>Technical Documentation</span>
                            </h4>
                        </div>
                        <div className='flex flex-col justify-start items-center space-y-3 md:h-44'>
                            <Animation color={currentColor} />
                            <h4>Animation</h4>
                        </div>
                        <div className='flex flex-col justify-start items-center space-y-3 md:h-44'>
                            <WebPerformance color={currentColor} />
                            <h4>Web Performance</h4>
                        </div>
                        <div className='flex flex-col justify-start items-center space-y-3 md:h-44'>
                            <DataVisualization color={currentColor} />
                            <h4>Data Visualization</h4>
                        </div>
                        <div className='flex flex-col justify-start items-center space-y-3 md:h-44'>
                            <Routing color={currentColor} />
                            <h4>Routing</h4>
                        </div>
                        <div className='flex flex-col justify-start items-center space-y-3 md:h-44'>
                            <UiDesign color={currentColor} bg={state.mode=='dark' ? '#000000' : '#C4DEF5'} />
                            <h4>UI Design</h4>
                        </div>
                        <div className='flex flex-col justify-start items-center space-y-3 md:h-44'>
                            <Analytics color={currentColor} />
                            <h4>Analytics</h4>
                        </div>
                        <div className='flex flex-col justify-start items-center space-y-3 md:h-44'>
                            <Research color={currentColor} />
                            <h4>Research</h4>
                        </div>
                        <div className='flex flex-col justify-start items-center space-y-3 md:h-44'>
                            <PackageManagement color={currentColor} />
                            <h4>Package Management</h4>
                        </div>
                    </div>
            </div>
           
           
        </div>
    )
}

export default Skills
