import React, { useRef } from 'react';
import { Tilt } from 'react-tilt';
// eslint-disable-next-line no-unused-vars
import { motion, useInView } from 'framer-motion';
import styles from './Group.module.css';
import pwa from '../assets/pwa.png';

import {
  aws,
  backend,
  devops,
  frontend,
  mobile,
  performance,
  security,
  machine,
} from '../assets/company/index.js';

let devGroups = [
  {
    img: aws,
    text: 'Cloud integeration',
  },
  {
    img: backend,
    text: 'Backend development',
  },
  {
    img: devops,
    text: 'CI/CD',
  },
  {
    img: frontend,
    text: 'Frontend development',
  },
  {
    img: mobile,
    text: 'mobile development',
  },
  {
    img: performance,
    text: 'Performance and Optimization',
  },
  {
    img: security,
    text: 'web security',
  },
  {
    img: machine,
    text: 'Machine learning',
  },
  {
    img: pwa,
    text: 'progressive web applications',
  },
];

const ServiceCard = ({ index, title, icon }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '0px 0px -100px 0px',
  });
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        animate={
          isInView
            ? { opacity: 1, y: 0, scale: 1 }
            : { opacity: 0, y: 50, scale: 0.9 }
        }
        transition={{
          type: 'spring',
          duration: 0.75,
          delay: index * 0.15,
        }}
        className={`w-full ${styles.customGradientBorder} rounded-[20px] shadow-card`}
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className={styles.innerCard}
        >
          <img
            src={icon}
            alt={title}
            style={{ width: '100px' }}
            className="w-16 h-16 object-contain"
          />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const Groupings = () => {
  return (
    <>
      <div className={styles.cards}>
        {devGroups.map((items, index) => {
          return (
            <ServiceCard
              icon={items.img}
              title={items.text}
              key={index}
              index={index}
            />
          );
        })}
      </div>
    </>
  );
};

export default Groupings;
