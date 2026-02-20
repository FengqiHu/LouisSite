export type SocialLink = {
  label: string
  href: string
  icon: string
}

export type StackCard = {
  id: string
  category: string
  title: string
  detail: string
  icon?: string
}

export type StoryMoment = {
  title: string
  description: string
  image: string
  alt: string
}

export type GalleryShot = {
  title: string
  image: string
  alt: string
  width: number
  height: number
}

export type ProjectItem = {
  id: string
  title: string
  tags: string[]
  summary: string
  image: string
  alt: string
  href: string
  imagePosition?: string
}

export const siteTitle = 'Louis Fengqi Hu'

export const hero = {
  eyebrow: "Hello, I'm",
  title: 'Louis Fengqi Hu',
  subtitle:
    'Master of Engineering student in Computer Science at Johns Hopkins University with a strong software engineering foundation. I focus on Java/Spring Boot enterprise systems and applied machine learning.',
  major: 'Software Engineering',
  email: 'hufq0611@outlook.com',
  phone: '(+1) 410-805-1208',
  portrait: '/images/hero-portrait.webp',
  portraitAlt: 'Portrait of Louis Fengqi Hu',
}

export const resume = {
  title: 'Resume (PDF)',
  href: '/resume.pdf',
}

export const socialLinks: SocialLink[] = [
  {
    label: 'GitHub',
    href: 'https://github.com/FengqiHu',
    icon: '/social/github.svg',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/louis-hu611/',
    icon: '/social/linkedin.svg',
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/louis.hu_/',
    icon: '/social/instagram.svg',
  },
  {
    label: 'Bilibili',
    href: 'https://space.bilibili.com/321846757',
    icon: '/social/bilibili.svg',
  },
]

export const skills = [
  'Software Engineering',
  'Machine Learning',
  'API Development',
  'Design Pattern',
  'Data Analysis',
  'Backend Development',
  'Server Maintenance',
  'CI/CD',
]

export const interests = ['Hardwares', 'Photography', 'Music', 'Soccer', 'Movies']

export const featuredStacks: StackCard[] = [
  {
    id: 'java-backend',
    category: 'Java | Back-End',
    title: 'Backend Architecture',
    detail:
      'Strong Java fundamentals, data structures, and algorithms. I use design patterns and modularization to keep systems efficient and maintainable.',
  },
  {
    id: 'spring-boot',
    category: 'Spring Boot | Back-End',
    title: 'API & Microservices',
    detail:
      'Specialized in scalable REST APIs and microservices, including database integration and deployment workflows.',
  },
  {
    id: 'python-ml',
    category: 'Python | Machine Learning',
    title: 'Deep Learning & Data Analysis',
    detail:
      'I build practical models with OpenCV and TensorFlow, including YOLO-based detection workflows and empirical analysis pipelines.',
    icon: '/images/python.webp',
  },
  {
    id: 'web-frontend',
    category: 'JavaScript | Web',
    title: 'Frontend Engineering',
    detail:
      'I connect frontend logic with backend services to deliver smooth user interactions and strong product reliability.',
    icon: '/images/vue.webp',
  },
]

export const aboutIntro = {
  title: 'Builder. Engineer. Problem Solver.',
  description:
    "I don't just focus on how code is written, but also how it runs. From handwriting Java Swing systems to configuring Linux servers, I enjoy building robust systems end-to-end.",
}

export const aboutNarrative = {
  spotlight:
    "I care about more than writing code. I care about system behavior, reliability under load, and whether an architecture stays maintainable as real requirements change.",
  origin:
    'My interest in technology started in childhood. At age 8, LEGO robots opened the door to computational thinking. At 12, Arduino projects and self-taught coding built my hands-on problem-solving habits. In middle school, I sourced parts and built my first custom PC.',
  growth:
    'As I grew, my focus shifted from hobby projects to production systems. I still remember deploying an application to a real server for the first time, learning Linux configuration, domain setup, and CI/CD through repeated debugging. That process shaped how I engineer software today: pragmatic, iterative, and performance aware.',
}

export const aboutStats = [
  { label: 'JHU', value: "Master's Student" },
  { label: '1st', value: 'Author Publication' },
  { label: 'Copyright', value: 'Software Owner' },
]

export const childhoodMoments: StoryMoment[] = [
  {
    title: 'My first PC',
    description:
      'In middle school I sourced parts and assembled my first custom PC, which pushed me from curiosity to practical engineering.',
    image: '/images/first-pc.webp',
    alt: 'First custom PC build',
  },
  {
    title: 'My Arduino phase',
    description:
      'At 12, I began tinkering with Arduino and coding by myself. That phase built my confidence in debugging and iterative learning.',
    image: '/images/assembled-pc.webp',
    alt: 'Hardware tinkering and Arduino stage',
  },
  {
    title: 'The LEGO RCX era',
    description:
      'Exploring LEGO robots when I was 8 opened the door to technology and problem solving through experiments.',
    image: '/images/rcx.webp',
    alt: 'LEGO RCX robot',
  },
]

export const growthStory = {
  title: 'Step by Step, Rising in Spirals',
  first:
    'These words describe my professional journey. I enjoy exploring unfamiliar areas and cutting-edge technology, even when the process is full of bugs and uncertainty.',
  second:
    'I still remember deploying an application to a server for the first time: Linux setup, domain configuration, and CI/CD integration. Weeks of trial and error made the architecture click.',
  image: '/images/server-maintenance.webp',
  imageAlt: 'Server deployment and maintenance workspace',
}

export const galleryShots: GalleryShot[] = [
  {
    title: 'Manhattan Bridge, New York',
    image: '/images/manhattan-bridge.webp',
    alt: 'Manhattan Bridge in New York',
    width: 1200,
    height: 1800,
  },
  {
    title: 'Vessel, New York',
    image: '/images/vessel.webp',
    alt: 'Vessel in New York',
    width: 1200,
    height: 799,
  },
  {
    title: 'JHU Campus, Baltimore',
    image: '/images/jhu-campus.webp',
    alt: 'Johns Hopkins University campus',
    width: 1000,
    height: 1500,
  },
  {
    title: 'Brooklyn Bridge, New York',
    image: '/images/brooklyn-bridge.webp',
    alt: 'Brooklyn Bridge in New York',
    width: 1280,
    height: 1924,
  },
  {
    title: 'Leaf, Hangzhou',
    image: '/images/leaf-hangzhou.webp',
    alt: 'Leaf photo in Hangzhou',
    width: 1200,
    height: 799,
  },
  {
    title: 'Shibuya, Tokyo',
    image: '/images/shibuya.webp',
    alt: 'Shibuya scene in Tokyo',
    width: 1200,
    height: 1599,
  },
  {
    title: 'Top of the Rock, New York',
    image: '/images/top-of-the-rock.webp',
    alt: 'Top of the Rock in New York',
    width: 1280,
    height: 757,
  },
  {
    title: 'Blue Time, Tokyo',
    image: '/images/tokyo-blue-time.webp',
    alt: 'Blue hour in Tokyo',
    width: 1200,
    height: 1803,
  },
  {
    title: 'Oriental Pearl TV Tower, Shanghai',
    image: '/images/shanghai-oriental-pearl.webp',
    alt: 'Oriental Pearl Tower in Shanghai',
    width: 1080,
    height: 1960,
  },
]

export const hobbies =
  'In my spare time, I focus on urban and travel photography, follow movies and football (FC Barcelona), and occasionally publish tech product videos on Bilibili.'

export const projects: ProjectItem[] = [
  {
    id: 'kitty',
    title: 'Kitty Gourmet Food Hall',
    tags: ['Full Stack', 'Spring Boot', 'Vue.js', 'Server Deployment'],
    summary:
      'A full-stack e-commerce platform for cat owners with Vue frontend, Spring Boot backend, and production-focused server maintenance. Designed for high-traffic stability.',
    image: '/images/project-kitty.webp',
    alt: 'Kitty Gourmet Food Hall project screenshot',
    href: 'https://github.com/eci-ice/Market',
  },
  {
    id: 'python-trends',
    title: "Python's evolution on Stack Overflow: topic trend analysis",
    tags: ['Data Science', 'Research', 'Machine Learning', 'Pandas'],
    summary:
      'Analyzed 2M+ Stack Overflow posts to surface Python ecosystem shifts and technical pain points. Built a GBDT model to forecast post popularity and published first-author work in COLA.',
    image: '/images/project-python-trends.webp',
    alt: 'Python trend analysis project visual',
    href: 'https://www.sciencedirect.com/science/article/abs/pii/S2590118425000267',
    imagePosition: 'center 82%',
  },
  {
    id: 'tile-defect',
    title: 'Hybrid Defect Detection Framework for Ceramic Tiles',
    tags: ['Deep Learning', 'PyTorch', 'Computer Vision', 'YOLO'],
    summary:
      'Designed an automated tile surface defect detection system using YOLO, attention mechanisms, and SPD convolution for stronger precision with lightweight deployment.',
    image: '/images/project-yolo.webp',
    alt: 'YOLO ceramic defect detection project',
    href: 'https://github.com/FengqiHu',
  },
  {
    id: 'forum-reco',
    title: 'Programmer Forum Recommendation System',
    tags: ['Recommendation Algorithms', 'User Profiling', 'Node.js', 'Data Mining'],
    summary:
      'Built a recommendation engine that personalizes content for developer communities through behavioral profiling, improving retrieval efficiency and reducing information overload.',
    image: '/images/project-coder-forum.webp',
    alt: 'Recommendation system interface',
    href: 'https://github.com/FengqiHu/CoderRecommendation',
  },
  {
    id: 'wechat',
    title: 'Intelligent WeChat Official Account',
    tags: ['API Development', 'LLM Integration', 'PHP'],
    summary:
      'Integrated the ERNIE Bot API into WeChat with custom menus and third-party service links to deliver automated, intelligent recommendation experiences.',
    image: '/images/project-wechat.webp',
    alt: 'Intelligent WeChat account project screenshot',
    href: 'https://github.com/FengqiHu/XiangShengAccount',
  },
]

export const internship = {
  company: 'Hundsun Technologies Inc.',
  locationAndTime: 'Hangzhou, China | Oct 2024 - Dec 2024',
  role: 'Engineer Assistant (Intern)',
  summary:
    "Used the company's LightCode LLM tools to review business code and generate standardized JavaDocs. Supported transaction middle-platform backend development and optimized business logic with modular design patterns.",
  image: '/images/project-hundsun.webp',
  href: 'https://en.hundsun.com/',
}

export const contactInfo = {
  phone: '(+1) 410-805-1208',
  email: 'hufq0611@outlook.com',
  location: 'Johns Hopkins University, Baltimore',
  wechatQr: '/images/wechat-qr.webp',
}
