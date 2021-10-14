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
    let aboutTitle = useRef();
    let aboutText = useRef();
    const currentColor = "#8F8F8F";
    
    useLayoutEffect(() => {
        function fadeIn() {
            if(window.outerWidth>768){
                gsap.from(aboutText, {
                    scrollTrigger: {
                        // scrub: 1, 
                        // markers: true,
                        trigger: aboutTitle,
                        start: 'bottom+=100 center',
                        end: 'top top'
                    },
                    autoAlpha: 0,
                    duration: 1
                  });
            }
            else {
                gsap.from(aboutText, {
                    scrollTrigger: {
                        // scrub: 1, 
                        // markers: true,
                        trigger: aboutTitle,
                        start: 'bottom center',
                        end: 'top top'
                    },
                    autoAlpha: 0,
                    duration: 1
                });
            }
            
        }
        fadeIn();
    }, [])

    return (
        <div  className='md:h-screen'>
            <hr></hr>
            <div className='flex flex-col justify-center space-y-12 md:space-y-28 my-24 md:mx-80 md:mt-40'>
                <h2 ref={el=>(aboutTitle=el)} className='font-medium shadow rounded-md ml-5 md:ml-0 px-6 py-2 md:px-8 md:py-3 text-xl md:text-2xl text-center text-yellow-dessert bg-blue-atlantic tracking-widest' style={{width: 'fit-content'}}>ABOUT ME</h2>
                <div className='bg-white bg-opacity-50 mx-2 md:mx-0 rounded-md'>
                    <div ref={el=>(aboutText=el)} className='bg-yellow-dessert shadow-md flex flex-col space-y-4 mb-4 md:mb-6 rounded-md py-10 pl-5 pr-3 md:py-10 md:pl-10 md:pr-8'>
                        <p>My full name is Mario Sancho-Cirer Poczatek, I&#39;m from La Coruña
                        and I&#39;m an engineering graduate pursuing a career in Tech.
                        </p>
                        <p>I&#39;m a creative developer that uses effective communication and logical thinking
                        to solve problems. 
                        </p>
                        <p>Some of my interests include UX Design, functional programming and research. 
                        </p>
                        <p>Finally, I&#39;m a person motivated by working well as part of a team and mentoring and coaching others.</p>
                    </div>
                    <div>

                        <div>
                        <FunctionalProgramming color={currentColor} />
                            <h3>Functional Programming</h3>
                        </div>
                        <div>
                        <StateManagement color={currentColor} />
                            <h3>State Management</h3>
                        </div>
                        <div>
                        <VersionControl color={currentColor} />
                            <h3>Version Control</h3>
                        </div>
                        <div>
                        <TestDebugging color={currentColor} />
                            <h3>Testing & Debugging</h3>
                        </div>
                        <div>
                        <ApiIntegration color={currentColor} />
                            <h3>API Integration</h3>
                        </div>
                        <div>
                        <Componentization color={currentColor} />
                            <h3>Componentization</h3>
                        </div>
                        <div>
                        <UxDesign color={currentColor} />
                            <h3>UX Design</h3>
                        </div>
                        <div>
                        <TechnicalDocumentation color={currentColor} />
                            <h3>Reading & Writing Technical Documentation</h3>
                        </div>
                        <div>
                        <Animation color={currentColor} />
                            <h3>Animation</h3>
                        </div>
                        <div>
                        <WebPerformance color={currentColor} />
                            <h3>Web Performance</h3>
                        </div>
                        <div>
                        <DataVisualization color={currentColor} />
                            <h3>Data Visualization</h3>
                        </div>
                        <div>
                        <Routing color={currentColor} />
                            <h3>Routing</h3>
                        </div>
                        <div>
                        <UiDesign color={currentColor} />
                            <h3>UI Design</h3>
                        </div>
                        <div>
                        <Analytics color={currentColor} />
                            <h3>Analytics</h3>
                        </div>
                        <div>
                        <Research color={currentColor} />
                            <h3>Research</h3>
                        </div>
                        <div>
                        <PackageManagement color={currentColor} />
                            <h3>Package Management</h3>
                        </div>
                    </div>
                </div>
            </div>
           
           
        </div>
    )
}

export default Skills
