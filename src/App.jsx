import { BrowserRouter } from 'react-router-dom';
import {
  About,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
} from './components';
import { useRef } from 'react';
import Groupings from './components/Groupings';
import WorkEx from './components/WorkEx';

function App() {
  const divEl = useRef(null);

  const handleScroll = () => {
    if (divEl.current) {
      divEl.current.scrollIntoView({ behaviour: 'smooth' });
    }
  };
  
  return (
    <BrowserRouter>
      <div className="relative z-0">
        <div className="bg bg-cover bg-no-repeat bg-centern  ">
          <Navbar />
          <Hero onHandleScroll={handleScroll} />
        </div>
        <About ref={divEl} />
        <WorkEx />
        <Groupings />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
      </div>
    </BrowserRouter>
  );
}

export default App;
