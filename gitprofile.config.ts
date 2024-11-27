// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'daggle24', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: false, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['arifszn/gitprofile', 'arifszn/pandora'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'Featured Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Knowledge Graph RAG + SQL Lookup - GenAI Agent',
          description:
            'Chatbot assistant agent built with LangGraph that does a RAG over a Neo4j Graph Database and has the posibility to perform an SQL lookup to retrieve information from a database.',
          imageUrl:
            'https://pbs.twimg.com/profile_images/1758141568970878976/fM5FlvD3_400x400.jpg',
          link: 'https://ardis.app',
        },
        {
          title: 'Deliria APP',
          description:
            'Mobile APP idea for photo and video creation/editing powered by AI using Stable Diffusion and Flux models with the help of ComfyUI',
          imageUrl:
            'https://pbs.twimg.com/profile_images/1758141568970878976/fM5FlvD3_400x400.jpg',
          link: 'https://drive.google.com/file/d/1UugK0A-CYocPNAIxHjZNwIGlyy5IzHZ1/view?usp=sharing',
        },
        {
          title: 'Ardis App',
          description:
            'Online Optimized Parts Production Software',
          imageUrl:
            'https://www.ardis.eu/imgs/layout/logo-ardis.svg',
          link: 'https://ardis.app',
        },
        {
          title: '3Cad',
          description:
            '3D Product Configurator Software, Developed a custom product library for 2aKüchen company',
          imageUrl:
            'https://scontent.fvlc1-2.fna.fbcdn.net/v/t39.30808-6/317754441_576158117846481_1625457403197215915_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=rbeErl7YrTgQ7kNvgGeUm6e&_nc_zt=23&_nc_ht=scontent.fvlc1-2.fna&_nc_gid=ABd_Aix977QDMtzTlSwAoKu&oh=00_AYDSPBen1Ks7MKgIGA7go9rP-LpWDZ0nNpRWc-uUuwYAfQ&oe=674CCCAF',
          link: 'https://www.youtube.com/watch?v=ao5HeAD888E',
        },
        {
          title: 'Pandabox',
          description:
            'Online Personal Shopper for Kids',
          imageUrl:
            'https://images.crunchbase.com/image/upload/c_pad,f_auto,q_auto:eco,dpr_1/xi2bwghovrboxgx5kbby',
          link: 'https://alicanteplaza.es/tag/pandabox',
        }
      ],
    },
  },
  seo: {
    title: 'Portfolio of Daniel Alejandro González Poveda',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'daggle',
    twitter: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: 'dannydagger_',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: '',
    phone: '',
    email: 'alejandro24.daniel@gmail.com',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/file/d/1Fj2bLICKs0hrDLEK80FIcEXQBIYfR4KY/view?usp=sharing', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Python',
    'Langchain',
    'LangGraph',
    'OpenAI',
    'GenAI',
    'Stable Diffusion',
    'TypeScript',
    'Angular',
    'React.js',
    'Node.js',
    'Nest.js',
    'MySQL',
    'PostgreSQL',
    'SQL Server',
    'MongoDB',
    'Neo4J',
    'Redis',
    'Git',
    'Azure',
    'AWS',
    'Docker',
    'Kubernetes',
    'CSS',
    'Akveo Nebular',
    'Tailwind',
    '3D Modeling',
  ],
  experiences: [
    {
      company: 'PANDABOX S.L. - Startup',
      position: 'CTO & CO-FOUNDER',
      from: 'July 2018',
      to: 'April 2019',
      companyLink: 'https://alicanteplaza.es/tag/pandabox',
    },
    {
      company: 'Dr Socialmedia',
      position: 'CTO & CO-FOUNDER',
      from: 'May 2019',
      to: 'February 2020',
      companyLink: 'https://www.linkedin.com/company/drsocialmedia',
    },
    {
      company: 'Prosolid3D',
      position: 'FULL-STACK DEVELOPER - TECH LEAD',
      from: 'October 2019',
      to: 'February 2023',
      companyLink: 'https://prosolid3d.com',
    },
    {
      company: 'HP Inc.',
      position: 'FULL-STACK DEVELOPER',
      from: 'February 2023',
      to: 'January 2024',
      companyLink: 'https://www.hp.com/us-en/printers/site-print/layout-robot.html',
    },
    
  ],
  certifications: [
    {
      name: 'Python Programming',
      body: 'Programming for Everybody (Getting Started with Python)',
      year: 'February 2018',
      link: 'https://www.coursera.org/account/accomplishments/verify/5ABH9YCN3FFS',
    },
    {
      name: 'TDD & BDD Metodologies',
      body: 'Test Driven Development & Behaviour Driven Development applied on Scrum development projects',
      year: 'June 2024',
      link: 'https://drive.google.com/file/d/1jfeD_x4re4yy8PlMyLajlIdgOsC1zCHJ/view?usp=sharing',
    }

    
  ],
  educations: [
    {
      institution: 'University of Carabobo',
      degree: 'Withdrew in the second year',
      from: '2014',
      to: '2016',
    },
    {
      institution: 'Demium Startups - Incubator',
      degree: 'ENTREPRENEURSHIP COURSE',
      from: '2018',
      to: '2018',
    },
    {
      institution: 'Udemy',
      degree: 'Angular 8 (formerly Angular 2) - The Complete Guide',
      from: '2018',
      to: '2019',
    }
  ],
  //publications: [
  //  {
  //    title: 'Publication Title',
  //    conferenceName: '',
  //    journalName: 'Journal Name',
  //    authors: 'John Doe, Jane Smith',
  //    link: 'https://example.com',
  //    description:
  //      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //  },
  //  {
  //    title: 'Publication Title',
  //    conferenceName: 'Conference Name',
  //    journalName: '',
  //    authors: 'John Doe, Jane Smith',
  //    link: 'https://example.com',
  //    description:
  //      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //  },
  //],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: '', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
