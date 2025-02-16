import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  SpeedDialComponent,
  SocialLinks,
  PrivacyPolicy
} from './components';


const App = () => {
  return (
    <div className="relative z-0">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<>
            <div>
              <Navbar />
              <Hero />
            </div>

            <div className="bg-about bg-cover bg-center bg-no-repeat">
              <About />
            </div>

            <div className="bg-tech bg-cover bg-center bg-no-repeat pb-10">
              <Tech />
            </div>

            <div
              className="bg-experience bg-cover bg-center bg-no-repeat 
            rounded-tl-[150px] rounded-br-[150px]">
              <div
                className="bg-experienceLight bg-cover bg-center 
            bg-no-repeat rounded-tl-[150px] rounded-br-[130px]">
                <Experience />
              </div>
            </div>
            <div className="relative z-0">
              <Contact />
              <SocialLinks />
            </div>
            <SpeedDialComponent />
          </>
          } />

          <Route path="/privacy-policy" element={<PrivacyPolicy />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
