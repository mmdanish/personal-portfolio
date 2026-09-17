export const personalInfo = {
  name: 'Mohammed Danish',
  role: 'Frontend Developer & Product Management Intern',
  location: 'Kerala, India',
  email: 'mhddanish567@gmail.com',
  linkedin: 'https://linkedin.com/in/mmdanish',
  github: 'https://github.com/mmdanish',
  intro: 'I build modern digital experiences and work at the intersection of frontend development, product thinking, and user experience.',
}

export const aboutContent = {
  main: 'Results-driven Frontend Developer with 1.5+ years of professional experience plus ongoing independent project work, specialising in modern, responsive and scalable web applications using React.js and JavaScript. Experienced in component-based architecture, state management, REST API integration, performance optimization and cross-browser compatibility.',
  product: 'Currently exploring product management alongside frontend development, contributing to feature planning, requirement gathering and cross-functional collaboration between design, engineering and business teams.',
}

export const experience = [
  {
    number: '01',
    title: 'Product Management Intern',
    company: 'Edapt',
    period: 'August 2026 – Present',
    description: [
      'Supporting product management activities for an edtech company.',
      'Contributing to feature planning and requirement gathering.',
      'Coordinating between design, engineering and business teams.',
      'Helping translate product requirements into actionable and technically feasible specifications.',
      'Applying frontend development knowledge to product and engineering discussions.',
    ],
  },
  {
    number: '02',
    title: 'Frontend Developer',
    company: 'Freelance',
    period: 'February 2026 – Present',
    description: [
      'Developing the frontend for Sellops, an ERP-based business management software.',
      'Converting static page designs into dynamic, data-driven interfaces using React.js.',
      'Integrating backend REST APIs.',
      'Handling state management, loading states and error handling.',
      'Independently managing frontend development from component architecture through deployment-ready pages.',
      'Maintaining responsive design and code quality standards.',
    ],
  },
  {
    number: '03',
    title: 'Frontend Developer',
    company: 'Hoztox Technologies, Kerala',
    period: 'November 2024 – November 2025',
    description: [
      'Engineered the complete frontend of RentBiz, a multitenant SaaS property management platform using React.js.',
      'Built dynamic tenant-specific dashboards covering rent collection, payment history and occupancy metrics.',
      'Implemented REST API integrations and role-based access control UI flows for owner, tenant and admin users.',
      'Developed interactive dashboards for XIMS with search, filtering, sorting and pagination.',
      'Optimized component lifecycle management and reduced unnecessary re-renders.',
      'Designed reusable, responsive UI components with cross-browser compatibility.',
    ],
  },
  {
    number: '04',
    title: 'MERN Stack Intern',
    company: 'Softroniics, Kerala',
    period: 'April 2024 – October 2024',
    description: [
      'Developed responsive React.js UI components across multiple modules.',
      'Used reusable component-based architecture.',
      'Refactored state management patterns using React Hooks.',
      'Collaborated with backend engineers using Node.js, Express.js and MongoDB.',
      'Integrated frontend features with REST APIs.',
      'Debugged UI interaction issues and improved cross-browser compatibility.',
      'Used Git and GitHub for feature branches, reviews and bug fixes.',
    ],
  },
]

export const skills = {
  'Frontend Development': [
    'React.js',
    'Next.js',
    'JavaScript (ES6+)',
    'HTML5',
    'CSS3',
    'TailwindCSS',
    'Component-Based Architecture',
    'Component Lifecycle Management',
  ],
  'State Management': ['React Context API', 'Props Drilling', 'Local State', 'Hooks', 'useState', 'useEffect', 'useCallback', 'useMemo'],
  'UI/UX & Responsive Design': ['Figma', 'Mobile-First Design', 'Responsive Layouts', 'Cross-Browser Compatibility', 'Accessible Interfaces'],
  'API & Integration': ['REST API Integration', 'Postman', 'JWT-Based Authentication Flows', 'Role-Based Access Control'],
  'Version Control': ['Git', 'GitHub', 'GitHub Actions'],
  'Cloud & Deployment': ['Vercel', 'Netlify', 'AWS Amplify'],
  'MERN Stack': ['Node.js', 'Express.js', 'MongoDB'],
}

export const projects = [
  {
    number: '01',
    name: 'Sellops',
    subtitle: 'ERP-Based Business Management Software',
    status: 'Ongoing',
    role: 'Frontend Developer',
    description: 'Building the frontend of an ERP platform covering core business modules, converting static page designs into dynamic backend-connected interfaces using React.js.',
    responsibilities: [
      'REST API integration',
      'State management',
      'Data fetching',
      'Loading/error handling',
      'Responsive UI',
      'Maintainable component architecture',
    ],
    technologies: ['React.js', 'REST APIs', 'State Management', 'Responsive Design'],
    live: null,
    github: null,
  },
  {
    number: '02',
    name: 'RentBiz',
    subtitle: 'Property & Rental Management Platform',
    status: 'Live',
    role: 'Frontend Developer',
    description: 'A multitenant SaaS property management platform for property listings, tenant records, tenancy workflows and payment management.',
    responsibilities: [
      'Built the frontend interface',
      'Developed data-driven components',
      'Created charts and filterable tables',
      'Implemented modals and lease-status cards',
      'Built responsive mobile-first layouts',
      'Implemented role-based UI flows',
      'Integrated REST APIs',
    ],
    technologies: ['React.js', 'Context API', 'REST APIs', 'TailwindCSS', 'AWS Amplify'],
    live: 'https://staging.rentbiz.biz',
    github: null,
  },
  {
    number: '03',
    name: 'XIMS',
    subtitle: 'Task & Project Management System',
    status: 'Completed',
    role: 'Frontend Developer',
    description: 'A task and project management system for tickets, client projects, task assignments and progress tracking.',
    responsibilities: [
      'Built complete frontend',
      'Developed interactive dashboards',
      'Added advanced search',
      'Filtering, sorting, pagination',
      'REST API integration',
      'Loading/error handling',
      'Performance optimization',
    ],
    technologies: ['React.js', 'Context API', 'REST APIs', 'TailwindCSS', 'GitHub Actions CI/CD'],
    live: null,
    github: null,
  },
]

export const education = [
  {
    degree: 'Bachelor of Science in Computer Science',
    institution: 'College of Applied Science IHRD',
    university: 'University of Calicut',
    location: 'Malappuram, India',
  },
  {
    degree: 'Professional Certification in Web Development (MERN Stack)',
    institution: 'Softroniics',
    location: 'Calicut, India',
  },
]

export const exploring = [
  'Product Management',
  'AI-powered workflows',
  'Modern frontend development',
  'UI/UX',
  'Digital products',
]
