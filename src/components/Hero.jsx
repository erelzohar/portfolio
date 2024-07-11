import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { me } from '../assets';

const Hero = () => {
  return (
    <>
      <section
        className="relative flex sm:flex-row flex-col w-full h-screen mx-auto 
        sm:bg-hero bg-hero-mobile overflow-hidden">
        <div
          className={`absolute inset-0 sm:top-[150px] top-[150px] 
          lg:top-[150px] xl:top-[250px] ${styles.paddingX} 
          max-w-7xl mx-auto flex flex-row items-start
          justify-between gap-3`}>


          <div>
            <h1
              className={`${styles.heroHeadText} text-eerieBlack font-poppins uppercase`}>
              Hi, I'm{' '}
              <span
                className="sm:text-battleGray sm:text-[90px] 
                text-eerieBlack text-[50px] font-mova
                font-extrabold uppercase">
                Erel
              </span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-eerieBlack`}>
              A passionate software developer <br className="sm:block hidden" />
              experienced in building web applications, CRM and ERP systems, data structures and more.
            </p>
          </div>
          <div
            className="w-screen flex flex-col items-start 
            justify-center sm:-ml-[3rem] xxs:mt-4"></div>
        </div>

        <div>
          <img
            className="absolute bottom-0 h-[75vh] ml-[50vw] lg:ml-[75vw] md:ml-[70vw] xmd:ml-[70vw] sm:ml-[50vw] 2xl:ml-[83vw]"
            src={me}
            alt="erel"
          />
        </div>
      </section>
    </>
  );
};

export default Hero;
