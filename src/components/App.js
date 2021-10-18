import React, {useState, useEffect, createContext, useReducer} from "react";
import Intro from './intro/Intro';
import Projects from "./projects/Projects";
import Contact from './contact/Contact'
import Skills from "./skills/Skills";
import Footer from './footer/Footer'
import modeReducer from "../reducers/modeReducer";

export const ModeContext = createContext({state: {mode: 'dark'}});

const App = () => {
  // generated will be a state.generate value in Store, not a Hook
  // const [generated] = useState(false)
  const [loading, setLoading] = useState(true);
  
  const initialMode={mode: 'dark'};
  const [state, dispatch] = useReducer(modeReducer, initialMode);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    // setTimeout(()=>{setLoading(false)}, 2000);
    setLoading(false);
  }, [])


    useEffect(() => {
      // console.log("rerendered");
      window.addEventListener("resize", () => setWidth(window.innerWidth));
      return () => {
        window.removeEventListener("resize", () => setWidth(window.innerWidth));
      };
    }, []);


  return (loading ? (null) : (
    <ModeContext.Provider value={{state, dispatch}}>
      <div className='flex flex-col'>
        <Intro width={width}/>
        <Projects width={width} />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </ModeContext.Provider> 
  ));
};

export default App;
