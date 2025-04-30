import React, { useEffect, useRef, useState } from 'react';
import Globe from 'globe.gl';
import styles from './work.module.css';

const Works = () => {
  const globalRef = useRef(null);
  const [mediumScreen, setMediumScreen] = useState(false);

  useEffect(() => {
    const world = Globe()(document.getElementById('globeViz'))
      .globeImageUrl('//unpkg.com/three-globe/example/img/earth-dark.jpg')
      .backgroundImageUrl('//unpkg.com/three-globe/example/img/night-sky.png');

    world.controls().autoRotate = true;

    world.controls().autoRotateSpeed = 0.5;

    const camera = world.camera();
    camera.position.z = 400;

    const techStacks = [
      {
        lat: 37.77,
        lng: -122.41,
        name: 'React',
        icon: '/src/assets/stacks/aws.svg',
      },
      {
        lat: 51.5,
        lng: -0.12,
        name: 'Node.js',
        icon: '/src/assets/stacks/circleci.svg',
      },
      {
        lat: -33.86,
        lng: 151.2,
        name: 'AWS',
        icon: '/src/assets/stacks/expressjs.svg',
      },
      {
        lat: 10,
        lng: -60,
        name: 'github-actions',
        icon: '/src/assets/stacks/actions.png',
      },
      {
        lat: -10,
        lng: 60,
        name: 'circle-ci',
        icon: '/src/assets/stacks/circleci.svg',
      },
      {
        lat: 20,
        lng: -150,
        name: 'docker',
        icon: '/src/assets/stacks/docker.svg',
      },
      { lat: -20, lng: 150, name: 'dsa', icon: '/src/assets/stacks/dsa.png' },
      {
        lat: 30,
        lng: -90,
        name: 'flutter',
        icon: '/src/assets/stacks/flutter.svg',
      },
      {
        lat: -30,
        lng: 90,
        name: 'github',
        icon: '/src/assets/stacks/github.svg',
      },
      { lat: 40, lng: -30, name: 'js', icon: '/src/assets/stacks/js.svg' },
      {
        lat: -40,
        lng: 30,
        name: 'kubernetes',
        icon: '/src/assets/stacks/kubernetes.svg',
      },
      {
        lat: 50,
        lng: -120,
        name: 'micro-services',
        icon: '/src/assets/stacks/micro.png',
      },
      {
        lat: -50,
        lng: 120,
        name: 'mongodb',
        icon: '/src/assets/stacks/mongodb.svg',
      },
      { lat: 0, lng: -180, name: 'mui', icon: '/src/assets/stacks/mui.png' },
      {
        lat: 0,
        lng: 180,
        name: 'nextjs',
        icon: '/src/assets/stacks/nextjs.svg',
      },
      {
        lat: 15,
        lng: -45,
        name: 'nodejs',
        icon: '/src/assets/stacks/nodejs.svg',
      },
      {
        lat: -15,
        lng: 45,
        name: 'postgres',
        icon: '/src/assets/stacks/postgres.svg',
      },
      {
        lat: 25,
        lng: -135,
        name: 'prisma',
        icon: '/src/assets/stacks/prisma.svg',
      },
      {
        lat: -25,
        lng: 135,
        name: 'python',
        icon: '/src/assets/stacks/python.svg',
      },
      {
        lat: 35,
        lng: -75,
        name: 'react',
        icon: '/src/assets/stacks/react.svg',
      },
      {
        lat: -35,
        lng: 75,
        name: 'redux',
        icon: '/src/assets/stacks/redux.svg',
      },
      { lat: 45, lng: -15, name: 'shadecn', icon: '/src/assets/shadecn.jpg' },
      {
        lat: -45,
        lng: 15,
        name: 'tailwindcss',
        icon: '/src/assets/stacks/tailwind.webp',
      },
      {
        lat: 5,
        lng: -105,
        name: 'tanstack',
        icon: '/src/assets/stacks/tanstack.png',
      },
      {
        lat: -5,
        lng: 105,
        name: 'typescript',
        icon: '/src/assets/stacks/typescript.svg',
      },
      {
        lat: 55,
        lng: -60,
        name: 'zustand',
        icon: '/src/assets/stacks/zustand.jpeg',
      },
      {
        lat: 48.85,
        lng: 2.35,
        name: 'Sass',
        icon: '/src/assets/stacks/sass.svg',
      }, // Paris
      {
        lat: -5,
        lng: 105,
        name: 'typescript',
        icon: '/src/assets/stacks/typescript.svg',
      }, // Rio de Janeiro
      {
        lat: -15,
        lng: 45,
        name: 'postgres',
        icon: '/src/assets/stacks/postgres.svg',
      }, // Tokyo
      {
        lat: 19.43,
        lng: -99.13,
        name: 'MySQL',
        icon: '/src/assets/stacks/mysql.svg',
      }, // Mexico City
      {
        lat: 52.52,
        lng: 13.4,
        name: 'Webpack',
        icon: '/src/assets/stacks/webpack.svg',
      }, // Berlin
      {
        lat: 6.52,
        lng: 3.37,
        name: 'Jenkins',
        icon: '/src/assets/stacks/jenkins.svg',
      }, // Lagos
      {
        lat: 41.9,
        lng: 12.49,
        name: 'HTML5',
        icon: '/src/assets/stacks/html.svg',
      }, // Rome
      {
        lat: 28.61,
        lng: 77.2,
        name: 'CSS3',
        icon: '/src/assets/stacks/css.svg',
      }, // Delhi
      {
        lat: -1.29,
        lng: 36.82,
        name: 'GraphQL',
        icon: '/src/assets/stacks/graphql.svg',
      }, // Nairobi
      {
        lat: 43.65,
        lng: -79.38,
        name: 'Nginx',
        icon: '/src/assets/stacks/nginx.svg',
      }, // Toronto
      {
        lat: 59.93,
        lng: 30.31,
        name: 'Redis',
        icon: '/src/assets/stacks/redis.svg',
      }, // St. Petersburg
      {
        lat: 39.9,
        lng: 116.4,
        name: 'Ansible',
        icon: '/src/assets/stacks/ansible.svg',
      }, // Beijing
      {
        lat: -26.2,
        lng: 28.03,
        name: 'Vite',
        icon: '/src/assets/stacks/vite.svg',
      }, // Johannesburg
      {
        lat: 13.75,
        lng: 100.5,
        name: 'PostCSS',
        icon: '/src/assets/stacks/postcss.svg',
      }, // Bangkok
      {
        lat: -12.04,
        lng: -77.03,
        name: 'Fastify',
        icon: '/src/assets/stacks/fastify.svg',
      }, // Lima
      {
        lat: 37.98,
        lng: 23.73,
        name: 'Framer',
        icon: '/src/assets/stacks/framer.svg',
      }, // Athens
      {
        lat: 1.35,
        lng: 103.82,
        name: 'Figma',
        icon: '/src/assets/stacks/figma.svg',
      }, // Singapore
      {
        lat: 55.75,
        lng: 37.61,
        name: 'Jest',
        icon: '/src/assets/stacks/jest.svg',
      }, // Moscow
      {
        lat: 50.45,
        lng: 30.52,
        name: 'Puppeteer',
        icon: '/src/assets/stacks/puppeteer.svg',
      }, // Kyiv
      {
        lat: -34.6,
        lng: -58.38,
        name: 'Mocha',
        icon: '/src/assets/stacks/mocha.svg',
      }, // Buenos Aires
    
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

    if (window.innerWidth <= 768) {
      world.width(mobileWidth);
    }

    const handleResize = () => {
      const worldWidth = String(+globalRef.current.offsetWidth);

      world.width(worldWidth);
    };

    window.addEventListener('resize', handleResize);
    // Initial sizing

    // Cleanup on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <div id="globeViz" ref={globalRef} className={`${styles.work}`} />;
};

export default Works;
