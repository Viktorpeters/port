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
          <p>
            This being my very first internship, I found myself working in a
            diverse team made up of frontend developers, full-stack engineers,
            and mobile developers.
          </p>
          <p>
            The company had a very straightforward mantra:{' '}
            <span style={{ color: '#fbbf24' }}>
              "Just make the software work 😆"
            </span>{' '}
            — and that philosophy reflected in almost everything we did.
          </p>
          <p>
            Instead of diving deep into structured backend systems or advanced
            server operations, we relied heavily on Firebase to bridge our
            frontend and mobile applications. It worked — but it wasn’t always
            pretty.
          </p>
          <p>
            What stood out for me was the hands-on exposure to raw, often
            improvised methods of solving problems. It was messy, sometimes
            chaotic, but incredibly eye-opening. I got to see how things were
            done before the industry evolved into what we know today.
          </p>
          <p>
            That experience gave me a clearer understanding of why modern
            practices like CI/CD pipelines, proper API design, structured
            deployments, Dockerization, and team scalability are so important.
            Knowing the "crude way" gave me context and appreciation for doing
            things the right way.
          </p>
          <p>
            Eventually, I left the company after a few months. I was mainly on
            the frontend team, though I wrote a few APIs too — which,
            unsurprisingly, were eventually replaced by the {' '}
            <span style={{ color: '#fbbf24' }}>old-school quick fixes 😆.</span>
          </p>
          <p>
            All in all, it was a valuable experience. It grounded me in the
            roots of software development and helped me understand the evolution
            and importance of industry standards today.
          </p>
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
