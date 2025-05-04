import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  carrent,
  jobit,
  tripguide,
  threejs,
} from '../assets';
import Lg from '../assets/company/lg.png';
import kd from '../assets/company/kd.png';
import br from '../assets/company/br.png';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Web Developer',
    icon: web,
  },
  {
    title: 'React Native Developer',
    icon: mobile,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'Content Creator',
    icon: creator,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences = [
  {
    title: 'FULL STACK DEVELOPER',
    isDoc: false,
    isCurrent: true,
    isWorkedProducts: false,
    isDescRoles: true,
    remarks: true,
    decRoles: [
      {
        header: 'Leading the Development of a Scalable Dating Application',
        roles: [
          'Overseeing the design, architecture, and development of the application to scale to over 1 million users.',
          'Ensuring that the app is highly available, performant, and can handle substantial user load',
        ],
      },
      {
        header: 'Managing Full-Stack Development,',
        roles: [
          'Overseeing the design, architecture, and development of the application to scale to over 1 million users.',
          'Ensuring that the app is highly available, performant, and can handle substantial user load',
          'Guiding the development process from ideation to deployment, ensuring the quality of code at every step',
        ],
      },
      {
        header: 'Deploying and Managing the Application Infrastructure',
        roles: [
          'Overseeing the deployment process, using platforms like AWS or VPS to ensure high availability and scalability',
          'Ensuring the infrastructure is robust, secure, and optimized for performance.',
        ],
      },
      {
        header: 'Integrating AI Tools',
        roles: [
          'Incorporating artificial intelligence tools into the application to enhance user experience and matchmaking capabilities',
          'Exploring and utilizing various AI models to improve features such as personalized recommendations and content moderation.',
        ],
      },
      {
        header: 'Collaborating with Cross-Functional Teams',
        roles: [
          'Working closely with product managers, designers, and marketing teams to align development efforts with business objectives',
          'Conducting regular meetings to track progress and resolve any roadblocks',
        ],
      },
      {
        header: 'Setting and Driving the Development Roadmap',
        roles: [
          'Defining project milestones, prioritizing features, and managing timelines to ensure timely delivery of the application.',
          'Making key decisions on technical approaches, tools, and frameworks',
        ],
      },
      {
        header: 'Mentoring and Guiding the Development Team',
        roles: [
          'Providing technical leadership and mentorship to junior developers, helping them grow and improve their skills.',
          'Ensuring best practices are followed and fostering a culture of continuous learning and improvement.',
        ],
      },
      {
        header: 'Monitoring and Improving User Experience',
        roles: [
          'Continuously analyzing user feedback to make improvements to the app’s features and performance',
          'Working on optimizing the application to provide the best user experience possible',
        ],
      },
    ],
    roles: [],
    company_name: 'Starbucks',
    icon: br,
    iconBg: '#383E56',
  },
  {
    title: 'FULL STACK DEVELOPER',
    isCurrent: false,
    isWorkedProducts: true,
    isDOc: true,
    isDescRoles: false,
    remarks: true,
    company_name: 'Kloud6',
    icon: kd,
    iconBg: '#E6DEDD',
    date: 'Jan 2021 - Feb 2022',
    decRoles: [],
    roles: [
      'Led the development of an eCommerce platform using React, Node.js, and PostgreSQL, improving page load times by 35% and increasing monthly active users by 20%. Integrated third-party payment APIs and optimized backend architecture for scalability',
      'Built and maintained RESTful and GraphQL APIs with Node.js and Express.js for a FinTech application, reducing data retrieval times by 40% and enhancing system performance. Successfully integrated APIs with third-party services like Stripe and PayPal',
      'Managed cloud infrastructure on AWS using EC2, S3, and RDS, reducing operational costs by 25%. Automated deployment pipelines with Docker and Jenkins, cutting deployment time by 50%.',
      'Refactored database architecture for a high-traffic app using MongoDB and Redis, improving query performance by 30% and ensuring zero downtime during peak traffic hours. Designed data backup and recovery strategies, enhancing data integrity.',
      'Developed responsive user interfaces for a financial app using React and Bootstrap, enhancing mobile usability and increasing customer engagement by 22%. Implemented dynamic features with real-time data updates using Socket.io.',
      'Automated CI/CD pipelines using GITHUB ACTIONS and Docker, reducing deployment time by 60% and minimizing manual errors. Migrated application infrastructure to Kubernetes, resulting in improved scalability and 99.9% uptime.',
      'Implemented OAuth 2.0 and JWT-based authentication for a web app, improving security and user session management. Optimized codebase, resulting in a 15% reduction in server response times and improved overall app performance.',
      'Developed and maintained unit and integration tests using Jest, improving code coverage by 40%. Identified and resolved 100+ critical bugs, enhancing system reliability and user satisfaction.',
      'Led a cross-functional team in using Git, GitHub, and Jira for version control and project management. Reduced code merge conflicts by 20% through efficient branching strategies and regular code reviews',
    ],
  },
  {
    title: 'Web Developer',
    isCurrent: false,
    isWorkedProducts: true,
    isDOc: true,
    isDescRoles: false,
    company_name: 'Les-Gilles LTD',
    icon: Lg,
    iconBg: '#383E56',
    date: 'Jan 2022 - Jan 2023',
    descRoles: [],
    remarks: true,
    roles: [
      'Developed responsive, user-friendly web applications using React.js, Node.js, and MongoDB for various clients in e-commerce, healthcare, and finance.',
      'Worked with cloud platforms (Firebase) to deploy applications and manage cloud storage, authentication, and real-time data syncing.',
      'Collaborated with mobile developers to create unified APIs and integrate mobile features into web platforms.',
      'Ensured cross-platform compatibility by utilizing responsive design techniques for web apps and cross-platform technologies (Flutter) for mobile.',
      'Integrated third-party services like Google Analytics, Stripe, and SendGrid into both backend and mobile applications.',
      'Wrote clean, maintainable code following agile principles and participated in sprint planning, daily stand-ups, and sprint reviews.',
    ],
  },
];

const testimonials = [
  {
    testimonial:
      'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
    name: 'Sara Lee',
    designation: 'CFO',
    company: 'Acme Co',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: 'Chris Brown',
    designation: 'COO',
    company: 'DEF Corp',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: 'Lisa Wang',
    designation: 'CTO',
    company: '456 Enterprises',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
];

const projects = [
  {
    name: 'Car Rent',
    description:
      'Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: carrent,
    source_code_link: 'https://github.com/',
  },
  {
    name: 'Job IT',
    description:
      'Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: jobit,
    source_code_link: 'https://github.com/',
  },
  {
    name: 'Trip Guide',
    description:
      'A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: tripguide,
    source_code_link: 'https://github.com/',
  },
];

export { services, technologies, experiences, testimonials, projects };
