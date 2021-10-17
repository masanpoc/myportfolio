import React, {useRef, useLayoutEffect} from 'react'
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


gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
    let title = useRef();
    let skillsWrapper = useRef();
    const currentColor = "#8F8F8F";
    
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
                
                <h2 ref={el=>(title=el)} className=' w-3/5 mx-auto font-adam px-6 pt-2 pb-4  md:px-8 md:py-3 text-3xl text-center text-green-lintern opacity-90 border-b-2 border-green-lintern' style={{width: 'fit-content'}}>TECH SKILLS</h2>
                
                
                    
                    <div ref={el=>(skillsWrapper=el)} className=' flex flex-col space-y-20 justify-center space-y-4 
                    md:mb-6 md:pt-16 md:pb-0 md:pl-8 md:pr-8 md:border-2 md:border-dark-borders
                    md:grid grid-cols-4 md:w-7/12 md:self-center md:space-y-0
                    '>

                        {/* cant loop if want to display svg and change it to light/dark */}
                        <div className='flex flex-col justify-start items-center space-y-3 md:h-44'>
                            <FunctionalProgramming color={currentColor}/>
                            <h4 style={{color:currentColor}} className='text-center'>Functional Programming</h4>
                        </div>
                        <div className='flex flex-col justify-start items-center space-y-3 md:h-44'>
                            <StateManagement color={currentColor} />
                            <h4 style={{color: currentColor}} className='text-center'>State Management</h4>
                        </div>
                        <div className='flex flex-col justify-start items-center space-y-3 md:h-44'>
                            <VersionControl color={currentColor} />
                            <h4 style={{color:currentColor}} className='text-center'>Version Control</h4>
                        </div>
                        <div className='flex flex-col justify-start items-center space-y-3 md:h-44'>
                            <TestDebugging color={currentColor} />
                            <h4 style={{color:currentColor}} className='text-center'>Testing & Debugging</h4>
                        </div>
                        <div className='flex flex-col justify-start items-center space-y-3 md:h-44'>
                            <ApiIntegration color={currentColor} />
                            <h4 style={{color:currentColor}} className='text-center'>API Integration</h4>
                        </div>
                        <div className='flex flex-col justify-start items-center space-y-3'>
                            <Componentization color={currentColor} />
                            <h4 style={{color:currentColor}} className='text-center'>Componentization</h4>
                        </div>
                        <div className='flex flex-col justify-start items-center space-y-3 md:h-44'>
                            <UxDesign color={currentColor} />
                            <h4 style={{color:currentColor}} className='text-center'>UX Design</h4>
                        </div>
                        <div className='flex flex-col justify-start items-center space-y-3 md:h-44'>
                            <TechnicalDocumentation color={currentColor} />
                            <h4 style={{color:currentColor}} className='flex flex-col justify-center'>
                                <span className='text-center'>Reading & Writing </span>
                                <span className='text-center'>Technical Documentation</span>
                            </h4>
                        </div>
                        <div className='flex flex-col justify-start items-center space-y-3 md:h-44'>
                            <Animation color={currentColor} />
                            <h4 style={{color:currentColor}} className='text-center'>Animation</h4>
                        </div>
                        <div className='flex flex-col justify-start items-center space-y-3 md:h-44'>
                            <WebPerformance color={currentColor} />
                            <h4 style={{color:currentColor}} className='text-center'>Web Performance</h4>
                        </div>
                        <div className='flex flex-col justify-start items-center space-y-3 md:h-44'>
                            <DataVisualization color={currentColor} />
                            <h4 style={{color:currentColor}} className='text-center'>Data Visualization</h4>
                        </div>
                        <div className='flex flex-col justify-start items-center space-y-3 md:h-44'>
                            <Routing color={currentColor} />
                            <h4 style={{color:currentColor}} className='text-center'>Routing</h4>
                        </div>
                        <div className='flex flex-col justify-start items-center space-y-3 md:h-44'>
                            <UiDesign color={currentColor} />
                            <h4 style={{color:currentColor}} className='text-center'>UI Design</h4>
                        </div>
                        <div className='flex flex-col justify-start items-center space-y-3 md:h-44'>
                            <Analytics color={currentColor} />
                            <h4 style={{color:currentColor}} className='text-center'>Analytics</h4>
                        </div>
                        <div className='flex flex-col justify-start items-center space-y-3 md:h-44'>
                            <Research color={currentColor} />
                            <h4 style={{color:currentColor}} className='text-center'>Research</h4>
                        </div>
                        <div className='flex flex-col justify-start items-center space-y-3 md:h-44'>
                            <PackageManagement color={currentColor} />
                            <h4 style={{color:currentColor}} className='text-center'>Package Management</h4>
                        </div>
                    </div>
            </div>
           
           
        </div>
    )
}

export default Skills
