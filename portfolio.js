import emoji from "react-easy-emoji";

export const greetings = {
  name: "Mashrabbek Akbarov",
  title: "Hi all, I'm Mashrabbek",
  description:
    "I'm passionate Full Stack web developer having an experience of web applications with Java, Nodejs, VueJS and AWS development on SpringBoot, ExpressJs Framework.",
  resumeLink: "https://mashrabbek.github.io",
};

export const openSource = {
  githubUserName: "mashrabbek",
};

export const contact = {};

export const socialLinks = {
  //facebook: "https://www.facebook.com/1hanzla100",
  //instagram: "https://www.instagram.com/1hanzla100",
  twitter: "https://twitter.com/mashrabj0n",
  github: "https://github.com/mashrabbek",
  linkedin: "https://www.linkedin.com/in/mashrabbek-akbarov/",
};

export const skillsSection = {
  title: "What I do",
  subTitle: "FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  data: [
    {
      title: "Full Stack Development",
      lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
      skills: [
        emoji(
          "⚡ Building responsive Single-Page-Apps (SPA) & PWA in React.js"
        ),
        emoji("⚡ Building responsive static websites using Next.js"),
        emoji("⚡ Building RESTful APIs in SpingBoot & ExpressJS Framework"),
      ],
      softwareSkills: [
        {
          skillName: "HTML-5",
          fontAwesomeClassname: "vscode-icons:file-type-html",
        },
        {
          skillName: "CSS-3",
          fontAwesomeClassname: "vscode-icons:file-type-css",
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "logos:javascript",
        },
        {
          skillName: "Reactjs",
          fontAwesomeClassname: "vscode-icons:file-type-reactjs",
        },
        {
          skillName: "Nextjs",
          fontAwesomeClassname: "vscode-icons:file-type-light-next",
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "logos:java",
        },
        {
          skillName: "NodeJs",
          fontAwesomeClassname: "vscode-icons:file-type-node",
        },

        {
          skillName: "Redux",
          fontAwesomeClassname: "logos:redux",
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "logos:npm-icon",
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "logos:yarn",
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      lottieAnimationFile: "/lottie/skills/cloudinfra.json", // Path of Lottie Animation JSON File
      skills: [
        emoji("⚡ Experience of working on multiple cloud platforms"),
        emoji(
          "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases"
        ),
        emoji(
          "⚡ Building CI/CD pipelines for automated testing & deployment using Gitlab CI/CD"
        ),
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "logos:aws",
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "logos:postgresql",
        },
        {
          skillName: "Github",
          fontAwesomeClassname: "akar-icons:github-fill",
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "logos:docker-icon",
        },
        {
          skillName: "Github Actions",
          fontAwesomeClassname: "logos:github-actions",
        },
        {
          skillName: "Nginx",
          fontAwesomeClassname: "logos:nginx",
        },
      ],
    },
    // {
    //   title: "Blockchain",
    //   lottieAnimationFile: "/lottie/skills/ethereum.json", // Path of Lottie Animation JSON File
    //   skills: [
    //     emoji(
    //       "⚡ Experience in developing Smart Contract using Solidity & Ethereum"
    //     ),
    //     emoji(
    //       "⚡ Building Scripts for automated testing & deployment of Smart Contracts using Brownie & Infura"
    //     ),
    //     emoji(
    //       "⚡ Experience of using Openzeppelin Smart Contract Standards & Chainlink Oracles"
    //     ),
    //     emoji("⚡ Developing NFT Smart Contracts using ERC-721 Token Standard"),
    //     emoji(
    //       "⚡ Building Dapps with React.js & Solidity using Web3.js, Moralis & IPFS"
    //     ),
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "Ethereum",
    //       fontAwesomeClassname: "logos:ethereum",
    //     },
    //     {
    //       skillName: "Solidity",
    //       fontAwesomeClassname: "logos:solidity",
    //     },
    //     {
    //       skillName: "Web3js",
    //       fontAwesomeClassname: "logos:web3js",
    //     },
    //     {
    //       skillName: "Metamask",
    //       fontAwesomeClassname: "logos:metamask-icon",
    //     },
    //     {
    //       skillName: "Ganache",
    //       fontAwesomeClassname: "logos:ganache-icon",
    //     },
    //   ],
    // },
  ],
};

export const SkillBars = [
  {
    Stack: "Frontend/Design", //Insert stack or technology you have experience in
    progressPercentage: "70", //Insert relative proficiency in percentage
  },
  {
    Stack: "Backend",
    progressPercentage: "90",
  },
  {
    Stack: "Programming",
    progressPercentage: "60",
  },
];

export const educationInfo = [
  {
    schoolName: "Maharishi International University",
    subHeader: "Master of Science in Computer Science",
    duration: "January 2022 - present",
    desc: "Courses",
    descBullets: [
      "Cloud Computing",
      "Web Application Programming",
      "Modern Programming Practices",
    ],
  },
  {
    schoolName: "Inha University",
    subHeader: "Bachelor of Science in Computer Science",
    duration: "October 2014 - August 2018",
    desc: "Awards",
    descBullets: ["Founder's Grand holder", "Deans list member"],
  },
];

export const experience = [
  {
    role: "Software Engineer",
    company: "National Bank of Uzbekistan",
    companylogo: "/img/icons/common/nbu.png",
    date: "May 2019 – Jan 2022",
    desc: `• Maintained Legacy projects
    • Designed, implemented and maintained backend services
    • Worked on security of applications
    • Scaling and automation of deployment
    • Performed Unit & e2e tests
    • Optimized frontend project structure and code, and integrated with backend
    • Code Reviewing`,
  },
  {
    role: "Full Stack Java Developer",
    company: "Fido-Biznes LLC",
    companylogo: "/img/icons/common/fido.jpg",
    date: "Dec 2018 - May 2019",
    desc: `• Created notification service of the project using web sockets
    • Designed and implemented file preview UI module of the same project
    • Created Rest API endpoints`,
  },
  {
    role: "Backend Developer",
    company: "Flexit",
    companylogo: "/img/icons/common/flexit.jpg",
    date: "March 2018 - Nov 2018",
    desc: "Worked as a Java Developer. Created REST APIs using SpringBoot Framework",
  },
];

export const projects = [
  {
    name: "AtlasMart",
    desc: "With Atlas Mart, it’s easy to find the products with the best price and ship them straight to your door.",
    link: "https://atlasmart.netlify.app/",
  },
  {
    name: "Technota (Forum)",
    desc: "Get hands-on experience in technical skills with Technota",
    link: "https://technota.netlify.app/",
  },
  {
    name: "Shopaza (Ecommerce)",
    desc: "Now your reach to all your favorite entertainment and luxury items is just one touch apart",
    link: "https://shopaza.herokuapp.com/",
  },
  {
    name: "MMFmelody (Blog)",
    desc: "Here you will find amazing tips about health, beauty, and modern-day life.",
    // github: "https://github.com/1hanzla100",
    link: "https://mmfmelody.herokuapp.com/",
  },
  {
    name: "Developer-Portfolio",
    desc: "Software Developer Portfolio Template built with react.js and next.js bootstrap that helps you showcase your work and skills as a software developer.",
    github: "https://github.com/1hanzla100/developer-portfolio",
    link: "https://developer-portfolio-1hanzla100.vercel.app/",
  },
];

export const feedbacks = [
  {
    name: "John Smith",
    feedback:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.",
  },
  {
    name: "John Smith",
    feedback:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.",
  },
];
