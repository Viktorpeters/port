import React, { useEffect, useRef, useState } from 'react';
import Globe from 'globe.gl';
import styles from './work.module.css';

const Works = () => {
  const globalRef = useRef(null);
  const [curSize, setCurSize] = useState();

  useEffect(() => {
    const world = Globe()(document.getElementById('globeViz'))
      .globeImageUrl('//unpkg.com/three-globe/example/img/earth-dark.jpg')
      .backgroundImageUrl('//unpkg.com/three-globe/example/img/night-sky.png');

    world.controls().autoRotate = true;

    world.controls().autoRotateSpeed = 0.5;

    const camera = world.camera();

    camera.position.z = 300;

    const techStacks = [
      { lat: 60, lng: -45, name: 'React', icon: '/src/assets/stacks/aws.svg' },
      {
        lat: -60,
        lng: 45,
        name: 'Node.js',
        icon: '/src/assets/stacks/circleci.svg',
      },
      {
        lat: 42,
        lng: 75,
        name: 'AWS',
        icon: '/src/assets/stacks/expressjs.svg',
      },
      {
        lat: -42,
        lng: -75,
        name: 'github-actions',
        icon: '/src/assets/stacks/actions.png',
      },
      {
        lat: 33,
        lng: -135,
        name: 'circle-ci',
        icon: '/src/assets/stacks/circleci.svg',
      },
      {
        lat: -33,
        lng: 135,
        name: 'docker',
        icon: '/src/assets/stacks/docker.svg',
      },
      { lat: 18, lng: 90, name: 'dsa', icon: '/src/assets/stacks/dsa.png' },
      {
        lat: -18,
        lng: -90,
        name: 'flutter',
        icon: '/src/assets/stacks/flutter.svg',
      },
      {
        lat: 12,
        lng: 150,
        name: 'github',
        icon: '/src/assets/stacks/github.svg',
      },
      { lat: -12, lng: -150, name: 'js', icon: '/src/assets/stacks/js.svg' },
      {
        lat: 38,
        lng: 100,
        name: 'kubernetes',
        icon: '/src/assets/stacks/kubernetes.svg',
      },
      {
        lat: -38,
        lng: -100,
        name: 'micro-services',
        icon: '/src/assets/stacks/micro.png',
      },
      {
        lat: 27,
        lng: 60,
        name: 'mongodb',
        icon: '/src/assets/stacks/mongodb.svg',
      },
      { lat: -27, lng: -60, name: 'mui', icon: '/src/assets/stacks/mui.png' },
      {
        lat: 46,
        lng: 30,
        name: 'nextjs',
        icon: '/src/assets/stacks/nextjs.svg',
      },
      {
        lat: -46,
        lng: -30,
        name: 'nodejs',
        icon: '/src/assets/stacks/nodejs.svg',
      },
      {
        lat: 22,
        lng: 160,
        name: 'postgres',
        icon: '/src/assets/stacks/postgres.svg',
      },
      {
        lat: -22,
        lng: -160,
        name: 'prisma',
        icon: '/src/assets/stacks/prisma.svg',
      },
      {
        lat: 31,
        lng: 120,
        name: 'python',
        icon: '/src/assets/stacks/python.svg',
      },
      {
        lat: -31,
        lng: -120,
        name: 'react',
        icon: '/src/assets/stacks/react.svg',
      },
      { lat: 8, lng: 75, name: 'redux', icon: '/src/assets/stacks/redux.svg' },
      { lat: -8, lng: -75, name: 'shadecn', icon: '/src/assets/shadecn.jpg' },
      {
        lat: 16,
        lng: -30,
        name: 'tailwindcss',
        icon: '/src/assets/stacks/tailwind.webp',
      },
      {
        lat: -16,
        lng: 30,
        name: 'tanstack',
        icon: '/src/assets/stacks/tanstack.png',
      },
      {
        lat: 29,
        lng: -170,
        name: 'typescript',
        icon: '/src/assets/stacks/typescript.svg',
      },
      {
        lat: -29,
        lng: 170,
        name: 'zustand',
        icon: '/src/assets/stacks/zustand.jpeg',
      },
      { lat: 53, lng: -88, name: 'Sass', icon: '/src/assets/stacks/sass.svg' },
      {
        lat: -53,
        lng: 88,
        name: 'typescript',
        icon: '/src/assets/stacks/typescript.svg',
      },
      {
        lat: 36,
        lng: -145,
        name: 'postgres',
        icon: '/src/assets/stacks/postgres.svg',
      },
      {
        lat: -36,
        lng: 145,
        name: 'MySQL',
        icon: '/src/assets/stacks/postgres.svg',
      },
      { lat: 7, lng: 65, name: 'vite', icon: '/src/assets/stacks/vite.svg' },
      {
        lat: -7,
        lng: -65,
        name: 'Jenkins',
        icon: '/src/assets/stacks/jenkins.svg',
      },
      { lat: 13, lng: -30, name: 'HTML5', icon: '/src/assets/stacks/html.svg' },
      { lat: -13, lng: 30, name: 'CSS3', icon: '/src/assets/stacks/css.svg' },
      {
        lat: 17,
        lng: 135,
        name: 'GraphQL',
        icon: '/src/assets/stacks/graph.svg',
      },
      { lat: -17, lng: -135, name: 'Nginx', icon: '/src/assets/nginx.svg' },
      { lat: 24, lng: 10, name: 'Redis', icon: '/src/assets/stacks/redis.svg' },
      { lat: -24, lng: -10, name: 'Ansible', icon: '/src/assets/ansible.svg' },
      {
        lat: 39,
        lng: -100,
        name: 'Framer',
        icon: '/src/assets/stacks/framer.png',
      },
      { lat: -39, lng: 100, name: 'Figma', icon: '/src/assets/figma.svg' },
    ];
    world
      .htmlElementsData(techStacks)
      .htmlLat((d) => d.lat)
      .htmlLng((d) => d.lng)
      .htmlElement((d) => {
        const img = document.createElement('img');
        img.src = d.icon;
        img.alt = d.name;
        img.style.width = '30px';
        img.style.height = '30px';
        img.style.borderRadius = '50%';
        return img;
      });

    // set the width of the world to the actual width of the div it is contained inside .

    let worldWidth = String(+globalRef.current.offsetWidth / 2);
    let mobileWidth = String(+globalRef.current.offsetWidth);
    world.width(worldWidth);

    if (window.innerWidth <= 900) {
      world.width(mobileWidth);
      world.height('300');
    }

    const handleResize = () => {
      const worldWidth = String(+globalRef.current.offsetWidth);
      let mobileWidth = String(+globalRef.current.offsetWidth);

      setCurSize(+globalRef.current.offsetWidth);
      world.width(worldWidth);

      if (window.innerWidth <= 900) {
        world.width(mobileWidth);
        world.height('300');
      }
    };

    window.addEventListener('resize', handleResize);
    // Initial sizing

    // Cleanup on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [curSize]);

  return <div id="globeViz" ref={globalRef} className={`${styles.work} `} />;
};

export default Works;
