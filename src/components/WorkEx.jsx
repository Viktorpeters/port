import React from 'react';
import { textVariant, slideIn, sharpSlideUp } from '../utils/motion';
import { motion } from 'framer-motion';
import { styles } from '../style';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { experiences } from '../constants/index';
import style from './workex.module.css';
import { AiFillProduct } from 'react-icons/ai';
import { FiCheckCircle } from 'react-icons/fi';

const VerticalEl = () => {
  const withDesc = true;
  return (
    <VerticalTimelineElement
      contentStyle={{ background: '#1d1836', color: '#fff' }}
      contentArrowStyle={{ borderRight: '3px solid #232631' }}
      date="Jan 2020 - Dec 2020"
      iconStyle={{
        background: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div>
        <div className={`${style.intro}`}>
          <h3 className={`${style.heading}`}>Backend Developer</h3>
          <h5 style={{ color: '#FAEBD7' }}>@LegGiles -Ltd</h5>
        </div>

        <div className={`${style.products_working}`}>
          <h4 style={{ marginBottom: '5px' }}>
            Projects i am currently working upon
          </h4>

          <ul style={{ marginBottom: '20px' }}>
            <li style={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
              <span class={`${style.heartbeatdot}`}></span>
              <span>Project i am working on here</span>
            </li>
          </ul>
          {/*  */}
        </div>
        <div style={{ marginBottom: '20px' }}>
          <h3 style={{ marginBottom: '5px' }}>Products worked upon</h3>
          <ul>
            <li style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
              <AiFillProduct />
              <span>commercial dating app</span>
            </li>
          </ul>
        </div>

        {/* normal roles */}
        <div className={`${style.roles}`}>
          <h3 style={{ marginBottom: '10px' }}>Responsibilities</h3>
          <ul>
            <li style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
              <FiCheckCircle style={{ color: '#2ecc71' }} />
              <span style={{ fontSize: '8px' }}>my first role </span>
            </li>
          </ul>
        </div>

        {/* roles with description  */}

        <div className={`${style.descRoles}`}>
          <h3 style={{ marginBottom: '10px' }}>Responsibilities</h3>
          <div>
            <h4 style={{ fontSize: '9px', marginBottom: '10px' }}>
              Leading and mentoring the interns
            </h4>
            <ul>
              <li style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                <FiCheckCircle style={{ color: '#2ecc71' }} />
                <span style={{ fontSize: '8px' }}>my first role </span>
              </li>
            </ul>
          </div>
        </div>
        <div className={`${style.remark}`}>
          <h3>Remarks</h3>
          <p></p>
        </div>
        <a className={`${style.btn}`}>Show me the Api's Documentations</a>
      </div>
    </VerticalTimelineElement>
  );
};

const WorkEx = () => {
  return (
    <>
      <motion.div
        variants={sharpSlideUp(0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.5 }}
        className={`${style.experience}`}
      >
        <p className={`${style.header}`}>My experience with my stack</p>
      </motion.div>
      <div className={`${style.exp_children}`}>
        <VerticalTimeline>
          <VerticalEl />
          <VerticalEl />
          <VerticalEl />
        </VerticalTimeline>
      </div>
    </>
  );
};

export default WorkEx;
