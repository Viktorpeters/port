import { BrowserRouter } from 'react-router-dom';
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  StarsCanvas,
  Works,
} from './components';

function App() {
  return (
    <BrowserRouter>
      <div className="relative z-0">
        <div className="bg bg-cover bg-no-repeat bg-centern  ">
          <Navbar />
          <Hero  />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
      </div>
    </BrowserRouter>
  );
}

export default App;
