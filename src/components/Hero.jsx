import React from 'react';
import styles from './Hero.module.css';
import Typewriter from 'typewriter-effect';
import img from '../assets/img.jpg';
import gmi from '../assets/brack.svg';

const Hero = ({ onHandleScroll }) => {
  return (
    <div className={`w-[800px]  ${styles.hero} `}>
      <div className={` gap-[25px] flex justify-start items-center   w-full `}>
        <div className="flex flex-col items-center ">
          <div className="w-5 h-5 rounded-full bg-[#2972F2]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div
          className={`${styles.para} w-[400px] flex flex-col gap-[20px] sm:w-full`}
        >
          <p
            className={`text-[25px] text-[#FAF0E6]  flex ${styles.type} flex items-center gap-[20px]`}
          >
            Hi , i am Viktor{' '}
            <span>
              {' '}
              <img className="w-[35px]" src={gmi} />{' '}
            </span>
          </p>
          <Typewriter
            options={{
              strings: [
                'i am a software engineer',
                'with a passion',
                'for building',
                'scalable, secure',
                'and',
                'high-performance',
                'software',
                'systems',
              ],
              autoStart: true,
              loop: true,
            }}
          />
          <p className="text-[#FAEBD7] text-[12px] leading-[25px] ">
            {' '}
            As a full stack developer, I specialize in both frontend,
            backend,mobile development and{' '}
            <span style={{ color: 'white' }}>machine learning</span>, bringing
            ideas to life from the concept to deployment.
          </p>
        </div>
      </div>
      <div
        className={`${styles.image} flex flex-col gap-[20px] items-center  w-full`}
      >
        <img
          style={{
            width: '150px',
            borderRadius: '50%',
            boxShadow: '0 0 1px grey',
          }}
          src={img}
        />
        <div
          onClick={onHandleScroll}
          className={`${styles.anim} cursor-pointer`}
        >
          <div className={`${styles.ball}`}></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
