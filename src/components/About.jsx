/* eslint-disable no-unused-vars */
import React, { forwardRef } from 'react';
import styles from './About.module.css';
import check from '../assets/check.svg';
import Works from './Works';

const About = forwardRef((props, ref) => {
  const techStack = [
    {
      heading: 'Frontend Development',
      text: 'Crafting responsive and intuitive user interfaces using modern frameworks and libraries.',
    },
    {
      heading: 'Backend Development',
      text: 'Building scalable and efficient server-side applications with clean architecture principles.',
    },
    {
      heading: 'Cloud Engineering',
      text: 'Deploying and managing applications on cloud platforms like AWS, ensuring high availability and performance.',
    },
    {
      heading: 'DevOps & Deployment',
      text: 'Implementing CI/CD pipelines, monitoring systems, and automating deployment processes for seamless integration and delivery.',
    },
    {
      heading: 'Security Best Practices',
      text: 'Ensuring application security through adherence to industry standards and proactive vulnerability assessments.',
    },
    {
      heading: 'Microservices & Distributed Architecture',
      text: 'Designing and maintaining modular and distributed systems that enhance scalability and maintainability.',
    },
    {
      heading: 'Mobile Development',
      text: 'Developing cross-platform mobile applications using frameworks like React Native and Flutter, ensuring seamless user experiences across devices.',
    },
    {
      heading: 'Machine Learning',
      text: 'Integrating machine learning models into applications, utilizing frameworks such as TensorFlow and PyTorch for tasks like predictive analytics and recommendation systems.',
    },
  ];

  return (
    <div className={`${styles.about} `}>
      <div ref={ref} />
      <div className="flex-1">
        <p style={{ marginBottom: '20px' }} className="text-[18px]">
          Introduction
        </p>
        <p style={{ marginBottom: '10px' }} className="font-[700] text-[30px]">
          Overview
        </p>
        <p style={{ marginBottom: '20px' }}>
          I am a Full Stack Developer with a robust foundation in both frontend
          and backend technologies, complemented by expertise in cloud
          engineering, DevOps tools, security best practices, mobile
          development, and machine learning. My proficiency encompasses:
        </p>
        <div style={{ marginTop: '10px' }}>
          {techStack.map((items, index) => {
            return (
              <div
                style={{ marginBottom: '15px' }}
                className="flex items-center gap-[10px]"
                key={index}
              >
                <img className="w-[20px]" src={check} />
                <p className="">
                  <span className="font-[700]">
                    {items.heading}: &nbsp; &nbsp;
                  </span>
                  <span>{items.text} </span>
                </p>
              </div>
            );
          })}
        </div>
        <button style={{ marginTop: '20px', marginBottom: '30px' }}>
          Hire Me{' '}
        </button>
      </div>
      <div className="flex-1">
        <Works />
      </div>
    </div>
  );
});

export default About;
