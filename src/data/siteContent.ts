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
  imageFit?: 'cover' | 'contain'
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
  status?: string
  image?: string
  alt?: string
  href?: string
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
  href: '/resume_Fengqi_Hu.pdf',
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
    id: 'full-stack',
    category: 'Java | Spring Boot | TypeScript | React | Git',
    title: 'Full-Stack Development',
    detail:
      'Solid full-stack fundamentals, data structures, and algorithms. I use design patterns and modularization to keep systems efficient and maintainable.',
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
    id: 'ai-engineering',
    category: 'API|LLM Integration | RAG | MAP | Prompt Engineering',
    title: 'AI Engineering',
    detail:
      'I connect AI capabilities with backend services to deliver intelligent solutions and seamless user experiences.',
    icon: '/images/vue.webp',
  },
]

export const aboutIntro = {
  title: 'A little about me.',
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
    imageFit: 'contain',
  },
]

export const growthStory = {
  title: 'Learning by building.',
  first:
    'I enjoy exploring unfamiliar areas and learning through hands-on work, even when the process is full of bugs and uncertainty.',
  second:
    'I still remember deploying an application to a server for the first time: Linux setup, domain configuration, and CI/CD integration. Weeks of trial and error made the architecture click. No matter how difficult a task is, I face it directly, learn through iteration, and come back stronger.',
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
    id: 'robust-rllib',
    title: 'Robust-RLlib: Benchmarking RL Robustness under Deployment Shifts',
    tags: ['Research', 'Reinforcement Learning', 'SAC', 'IQL', 'Sim-to-Real'],
    status: 'In preparation',
    summary:
      'Robust-RLlib benchmarks how reinforcement learning policies behave under deployment noise and action delays. I built composable perturbations and a shared evaluation protocol for SAC, IQL, and other methods, and validated policy transfer on a real robot arm. I am second author on the manuscript, which is being prepared for submission to ICLR.',
  },
  {
    id: 'wearwise',
    title: 'WearWise - AI-Powered Personal Wardrobe',
    tags: ['React', 'Express', 'MongoDB', 'Gemini API', 'RAG', 'RabbitMQ'],
    summary:
      'WearWise helps users manage their wardrobe, get personalized outfit recommendations, and preview looks through virtual try-on. I built the React/Express/MongoDB platform with Gemini APIs and RAG to combine wardrobe inventory, preferences, and real-time weather, using NanoBanana 2 for try-on images. RabbitMQ handles asynchronous image uploads, and the platform is deployed on Vercel and Render.',
    image: '/images/wearwise.png',
    alt: 'WearWise project screenshot',
    href: 'https://github.com/FengqiHu/wearwise',
  },
  {
    id: 'kitty',
    title: 'Kitty Gourmet Food Hall - Online Shopping Platform',
    tags: ['Vue 3', 'Spring Boot', 'Redis', 'Docker', 'Nginx', 'CI/CD'],
    summary:
      'Kitty Gourmet Food Hall is a Vue 3/Spring Boot shopping platform covering user accounts, product browsing, shopping carts, and orders. I led full-stack development and used Redis caching and database indexing to support 1,000+ concurrent requests with response times below 500 ms. I also handled API and database design, Docker/Nginx deployment, and CI/CD pipelines.',
    image: '/images/project-kitty.webp',
    alt: 'Kitty Gourmet Food Hall project screenshot',
    href: 'https://github.com/eci-ice/Market',
  },
  {
    id: 'python-trends',
    title: "Python's Evolution on Stack Overflow: An Empirical Analysis of Topic Trends",
    tags: ['Research', 'Data Analysis', 'GBDT', 'Machine Learning'],
    summary:
      'This study analyzed 2M+ Python-related Stack Overflow posts to understand changing developer interests, topics, and library usage. I used multi-rater annotation and optimized a GBDT classifier, achieving 91.38% accuracy on all posts and 90.56% on unanswered posts, outperforming four baseline models. The work was published in the Journal of Computer Languages, with me as first author.',
    image: '/images/project-python-trends.webp',
    alt: 'Python trend analysis project visual',
    href: 'https://www.sciencedirect.com/science/article/abs/pii/S2590118425000267',
    imagePosition: 'center 82%',
  },
  {
    id: 'forum-reco',
    title: 'User Profile-Based Recommendation System for a Programmer Forum',
    tags: ['Vue 3', 'Node.js', 'User Profiling', 'Jaccard Similarity'],
    summary:
      'This Vue 3/Node.js system recommends programmer forum content based on users\' changing interests and behavior. I processed 5,000+ CSDN posts, built profiles from tags, browsing history, and likes, and used Jaccard similarity to match users with relevant content. I owned the recommendation algorithm, frontend-backend integration, and UI, and hold the software copyright.',
    image: '/images/project-coder-forum.webp',
    alt: 'Recommendation system interface',
    href: 'https://github.com/FengqiHu/CoderRecommendation',
  },
  {
    id: 'hopshare',
    title: 'HopShare',
    tags: ['Rideshare', 'Full Stack', 'Message Queue'],
    summary:
      'HopShare helps Hopkins students share or request rides to reduce travel costs. We built instant messaging with a message queue and added a friend system to support social connections.',
    image: '/images/hopshare.png',
    alt: 'HopShare project screenshot',
    href: 'https://github.com/FengqiHu/hopshare',
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

export const workExperiences = [
  {
    company: 'Aosenuma',
    location: 'Remote, United States',
    period: 'May - Aug 2026',
    role: 'AI Developer',
    summary:
      'Handled requirements analysis, feature development, testing, and project management. Built an event-driven Node.js/Express service to synchronize GitHub Issues and Notion tasks using HMAC webhook verification, TTL-based write guards, configurable label mapping, and fuzzy search. Improved speech-to-text processing efficiency by 70% with finer audio segmentation and asynchronous processing, reduced token usage by 20%, and accelerated page loading through caching and SQL query optimization.',
  },
  {
    company: 'Hundsun Technologies Inc.',
    location: 'Hangzhou, China',
    period: 'Oct - Dec 2024',
    role: 'Software Engineering Intern',
    summary:
      'Developed middleware for a trading platform to support transaction flows between clients and financial markets. Used internal LLM tools for code generation and helped develop prompt guidelines, improving efficiency by 30%. Collaborated with senior engineers to refactor three core service modules and resolve 5+ business logic defects, improving data accuracy in transaction order processing.',
    href: 'https://en.hundsun.com/',
  },
]

export const contactInfo = {
  phone: '(+1) 410-805-1208',
  email: 'hufq0611@outlook.com',
  location: 'Johns Hopkins University, Baltimore',
  wechatQr: '/images/wechat-qr.webp',
}
