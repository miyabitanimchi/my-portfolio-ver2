import { IProjectData } from "../types/index";

const projectsData: IProjectData[] = [
  {
    id: "senpai-kohai",
    projectName: "Senpai Kohai",
    feature: "MERN stack application",
    status: "Collaborative Work",
    src: "/images/senpai-kohai.png",
    teckStack: [
      "React.js",
      "Redux",
      "TypeScript",
      "Node.js",
      "Express",
      "MongoDB",
      "Tailwind CSS",
      "JWT",
      "Cloudinary",
    ],
    website: "https://senpai-kohai.herokuapp.com/",
    gitHub: "https://github.com/shiv-chan/senpai-kohai",
    shortDescription: "Matching Platform for People in Tech",
    description:
      'This is a matching platform to connect with junior and senior developers. Senpai (先輩) means "Senior", and Kohai (後輩) means "Junior" in Japanese. You can offer help Kohai and gain teaching opportunities as Senpai, and and you can ask for support as Kohai. This is a MERN stack application with using TypeScript, Tailwind CSS JWT token system and Cloudinary. This is a team project at school and I mainly worked on building Log in, Log out and reset password functions and UI, and the board page to browse user\'s profiles. We are going to continue to grow this application with our passion to contribute to tech scene.',
  },
  {
    id: "musician-first",
    projectName: "Musician First",
    feature: "React Application",
    status: "Collaborative Work, Product",
    src: "/images/musician-first.jpg",
    teckStack: [
      "React.js",
      "Redux",
      "Firebase",
      "Node.js",
      "Material UI",
      "Sass",
      "Stripe",
    ],
    website: "https://www.musicianfirst.ca",
    gitHub: "https://github.com/BlackStone8960/Musician-First",
    shortDescription: "Matching Platform for Musicians",
    description:
      "This is a matching platform to connect with musicians and music producers, and help them develop their music activities. This is a product for a start-up company, Musician First located in Toronto, Canada. Main features of this application are a search function by different genres, chat function and payment system for when a business deal is closed between a musician and a music producer. The product is built by a team, and my main roles were to implement search functions, a contact form, and some inportant features on the chat function such as an email notification function and a function to count unread messages. While I developed the functionality, also I tested each function and fixed bugs accordingly. Musician Fisrt has first launched for desktop users, but the mobile version will be come out soon and their final goal is to release the app as a native application.",
  },
  {
    id: "global-developers",
    projectName: "Global Developers",
    feature: "React Application",
    status: "Collaborative Work, Product",
    src: "/images/gds.jpg",
    teckStack: [
      "React.js",
      "Redux",
      "Firebase",
      "Node.js",
      "Material UI",
      "Sass",
    ],
    website: "",
    gitHub: "https://github.com/sh1mot4ku/GDS",
    shortDescription: "Job Searching site for Developers and Designers",
    description:
      "This is a job searching website for people working in tech globally. This is a product for a company called Lraough LLC., which is located in Los Angeles, California. This is a team project and tasks were managed with GitHub, Trello and Slack. I mainly built a search and sort functions for job listings, email notification function, validation check and also created UI on some pages. Through this working experience, I was also able to gain skills to discuss with a client and a web designer, and to offer them suggestions to create a better website.",
  },
  {
    id: "my-portfolio",
    projectName: "My Portfolio",
    feature: "React Application with TypeScript and Next.js",
    status: "Individual Work",
    src: "/images/my-portfolio-ver2.jpg",
    teckStack: ["React.js", "Next.js", "TypeScript", "Sass"],
    website: "",
    gitHub: "https://github.com/miyabitanimchi/my-portfolio-ver2",
    shortDescription: "My Portfolio Ver.2",
    description:
      "This is my portfolio website ver.2 built with React.js, Next.js and TypeScript (The first version was made with HTML, Sass, JavaScript and PHP). Things I put on my effort was especially to learn Next.js, and keep simple but dynamic design with the smooth animation. Through the development, I was able to gain fundamentals of Next.js such as Dynamic Routes and Static Generation. As I explored the framework, I found it very good for performance and made me explore it even more.",
  },
  {
    id: "bc-shop",
    projectName: "BC Shop",
    feature: "React eCommerce Application",
    status: "Collaborative Work",
    src: "/images/my-portfolio-ver2.jpg",
    teckStack: ["React.js", "Firebase", "Sass"],
    website: "https://bc-shop.herokuapp.com/",
    gitHub: "https://github.com/miyabitanimchi/React-E-Commerce-App",
    shortDescription: "React eCommerce Application",
    description:
      "This is a mock eCommerce application built with React.js, Sass and Firebase.",
  },
  {
    id: "flappy-buddy",
    projectName: "Flappy Buddy",
    feature: "Game built with vanilla JS and HTML canvas",
    status: "Individual Work",
    src: "/images/flappy-buddy.jpg",
    teckStack: ["HTML", "CSS", "JavaScript"],
    website: "https://miyabitanimchi.github.io/flappy_buddy",
    gitHub: "https://github.com/miyabitanimchi/flappy_buddy",
    shortDescription: "Flappy Bird Game But with Fun Original Features!",
    description:
      "This is Flappy Bird game (the original one is developed released in 2013 by Dong Nguyen) with two special features. One is that you can draw a character(your buddy!) on the HTML canvas and play the game with it. And the other one is that there are also bullets as obstacles and they make this game more harder and fun! I built the game one month after I started to learn JavaScript.",
  },
];

export default projectsData;
