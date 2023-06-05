import {
  airbnb,
  binance,
  coinbase,
  dropbox,
  nitk,
  cluboard,
  cash_flow,
  freadom,
  bank,
  gdsc,
  iris,
  ecell,
  genesis,
  graphql,
  portfolio,
  publiclab,
  zulip,
  cdc,
  chargeswap,
  placeicon,
  recruitment,
  huntly
} from "../assets";

import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillMail,
  AiOutlineTwitter,
  AiFillHtml5,
  AiFillFacebook,
  AiOutlineGoogle,
  AiOutlineGitlab,
} from "react-icons/ai";

import {
  SiDjango,
  SiSqlite,
  SiJavascript,
  SiBootstrap,
  SiReact,
  SiMaterialui,
  SiTailwindcss,
  SiGraphql,
  SiPython,
  SiCplusplus,
  SiMysql,
  SiC,
  SiLaravel,
  SiRubyonrails,
  SiVisualstudio,
  SiJquery,
  SiVisualstudiocode,
  SiPostman,
  SiNodedotjs,
  SiFacebook,
  SiGit,
  SiGoland,
  SiSolidity,
  SiNetlify,
  SiXampp,
  SiChartdotjs,
  SiVite,
  SiArduino,
  SiWeb3Dotjs,
  SiIpfs,
  SiDotnet,
  SiTwilio,
  SiFlutter,
  SiReplit,
  SiFlask,
  SiFigma,
  SiPhp,
  SiGooglemaps
} from "react-icons/si";

import {
  FaHardHat
} from "react-icons/fa";

import {
  IoIosNotificationsOutline
} from "react-icons/io";
import { FaPhp } from "react-icons/fa";
import { DiCss3, DiMsqlServer, DiRuby } from "react-icons/di";

export const resumeLink = "https://drive.google.com/file/d/1wkPu9i_e2uAdHmbqe0hEM9BfBheJfxkT/view?usp=sharing";
export const repoLink = "https://github.com/mittal-parth/personal-portfolio";

export const callToAction = "https://github.com/kyletran191";

export const navLinks = [
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contactMe",
    title: "Contact Me",
  },
];

export const educationList = [
  {
    id: "education-1",
    icon: nitk,
    title: "UCLA",
    degree: "Information Technology",
    duration: "October 2020",
  },
];

export const skills = [
  {
    title: "Programming Languages",
    items: [
      {
        id: "pl-2",
        icon: SiPython,
        name: "Python",
      },
      {
        id: "pl-3",
        icon: SiGoland,
        name: "Golang",
      },
      {
        id: "pl-4",
        icon: SiNodedotjs,
        name: "NodeJS",
      },
      {
        id: "pl-5",
        icon: AiFillHtml5,
        name: "HTML",
      },
      {
        id: "pl-6",
        icon: DiCss3,
        name: "CSS",
      },
      {
        id: "pl-7",
        icon: SiJavascript,
        name: "JavaScript",
      },
      {
        id: "pl-8",
        icon: SiPhp,
        name: "PHP",
      },
    ],
  },
  {
    title: "Frameworks/Libraries",
    items: [
      {
        id: "f-1",
        icon: SiDjango,
        name: "Django",
      },
      {
        id: "f-3",
        icon: SiReact,
        name: "ReactJS",
      },
      {
        id: "f-4",
        icon: SiBootstrap,
        name: "Bootstrap",
      },
      {
        id: "f-6",
        icon: SiJquery,
        name: "jQuery",
      },
      {
        id: "f-7",
        icon: SiLaravel,
        name: "Laravel",
      },
    ],
  },
  {
    title: "Tools",
    items: [
      {
        id: "t-1",
        icon: SiMysql,
        name: "MySQL",
      },
      {
        id: "t-2",
        icon: SiPostman,
        name: "Postman",
      },
      {
        id: "t-3",
        icon: SiVisualstudiocode,
        name: "VS Code",
      },
      {
        id: "t-4",
        icon: SiGit,
        name: "Git",
      },
      {
        id: "t-5",
        icon: AiFillGithub,
        name: "GitHub",
      },
      {
        id: "t-6",
        icon: AiOutlineGitlab,
        name: "Gitlab",
      },
      {
        id: "t-7",
        icon: SiVisualstudio,
        name: "Visual Studio",
      },
      {
        id: "t-8",
        icon: SiXampp,
        name: "Xampp",
      },
    ],
  },
];

export const experiences = [
  {
    organisation: "Kyle Network",
    logo: iris,
    link: "https://kylenetwork.dev",
    positions: [
      {
        title: "Admin",
        duration: "Jan 2023 - Present",
        content: [
          {
            text: "Managing a forum.",
            link: "",
          },
        ],
      },
      
    ],
  },
];

export const openSourceContributions = [
  {
    id: "os-1",
    organisation: "P",
    logo: publiclab,
    repo: "plots2",
    type: "pull-request",
    status: "merged",
    title:
      "",
    link: "",
    number: "#10731",
    date: "Feb 24 2022",
    linesAdded: "101",
    linesDeleted: "48",
  },
];

export const projects = [
  {
    id: "project-1",
    title: "KyleBot",
    github: "https://github.com/kyletran191/kylebot",
    link: "https://github.com/kyletran191/kylebot",
    image: chargeswap,
    content:
      "A discord bot for ddos and attack. This Tool is made for educational purpose only, Author will not be responsible for any misuse of this toolkit!",
    stack: [
      {
        id: "icon-1",
        icon: SiPython,
        name: "Python"
      },
      {
        id: "icon-2",
        icon: SiNodedotjs,
        name: "NodeJS"
      },
      {
        id: "icon-3",
        icon: SiGoland,
        name: "Golang"
      },
    ],
  },
];

export const blogPosts = [
  {
    id: "post-1",
    title: "Blog Post 01 - Title",
    link: "#",
    date: new Date().toLocaleDateString(), // Can be edited to any string format
    image: "",
    tags: [
      {
        id: "tag-1",
        name: "tag 01"
      },
      {
        id: "tag-2",
        name: "tag 03"
      },
      {
        id: "tag-3",
        name: "tag 03"
      },
    ],
  },
];

export const stats = [
  {
    id: "stats-1",
    title: "Organisations",
    value: "2+",
  },
  {
    id: "stats-2",
    title: "Issues Opened",
    value: "6+",
  },
  {
    id: "stats-3",
    title: "Pull Requests",
    value: "6+",
  },
];

export const extraCurricular = [
  {
    organisation: "",
    title: "",
    duration: "",
    content: [
      {
        text: "",
        link: "",
      },
    ],
    logo: gdsc,
  },
];

export const socialMedia = [
  {
    id: "social-media-2",
    icon: AiFillGithub,
    link: "https://www.github.com/kyletran191",
  },
  {
    id: "social-media-3",
    icon: AiFillMail,
    link: "mailto:info@tranbaokha.com",
  },
  {
    id: "social-media-4",
    icon: AiFillFacebook,
    link: "https://www.facebook.com/kyletran.1901",
  },
  {
    id: "social-media-5",
    icon: AiFillInstagram,
    link: "https://www.instagram.com/kyletran.1901",
  },
];

export const clients = [
  {
    id: "client-1",
    logo: airbnb,
  },
  {
    id: "client-2",
    logo: binance,
  },
  {
    id: "client-3",
    logo: coinbase,
  },
  {
    id: "client-4",
    logo: dropbox,
  },
];

export const aboutMe = {
    name: "Tran Bao Kha",
    tagLine: "Developer",
    intro: "A normal developer from Los Angeles, California, USA"
}
