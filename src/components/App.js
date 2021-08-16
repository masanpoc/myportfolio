import React, {useState, useEffect} from "react";
import Intro from './intro/Intro';
import Projects from "./projects/Projects";
import About from './aboutme/About';
import Contact from './contact/Contact'

const App = () => {
  // generated will be a state.generate value in Store, not a Hook
  // const [generated] = useState(false)
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // setTimeout(()=>{setLoading(false)}, 2000);
    setLoading(false);
  }, [])
  return (loading ? (null) : (
    <div>
      <Intro />
      <Projects />
      <About />
      <Contact />
    </div>
  ));
};

export default App;
