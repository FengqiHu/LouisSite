import * as english from '../data/siteContent'

const ui = {
  nav: ['Home', 'About Me', 'Projects', 'Contact'],
  home: 'Go to homepage', menu: 'Toggle menu', navigation: 'Primary navigation',
  copyright: 'Copyright', loading: 'Loading page...',
  viewProjects: 'View Projects', contactMe: 'Contact Me', focus: 'Focus', email: 'Email', phone: 'Phone', resume: 'Resume',
  aboutMe: 'About Me', workAndEnjoy: 'What I work on, and what I enjoy.', skills: 'Skills', interests: 'Interests', moreAbout: 'More About Me',
  tools: 'AI & Machine Learning', howIBuild: 'From models to working systems.',
  toolsIntro: 'I work across model evaluation, reinforcement learning, and LLM applications. My current focus is on AI agents and RAG, connecting models with context, tools, and real-world workflows.',
  childhood: 'From a child to full-stack', origin: 'Where it started.', milestones: 'Early Milestones', moments: 'Key Moments',
  growth: 'My Professional Growth', viewResume: 'View Resume', beyondCode: 'Beyond Code', offline: 'Life Offline', snapshot: 'Life Snapshot', beyondCoding: 'What I Do Beyond Coding', videoAlt: 'Razer Mouse Review video thumbnail',
  myProjects: 'My Projects', projectsTitle: 'Projects & research.',
  projectsIntro: 'From full-stack platforms to deep learning systems, these projects reflect my focus on practical impact, scalability, and clean architecture.',
  projectList: 'Project list', reference: 'View Reference', referenceFor: 'View reference for', details: 'Details', professional: 'Professional Experience', workExperience: 'Work experience.', companyWebsite: 'Company Website',
  contactTitle: 'Get in touch.', openResume: 'Open Resume (PDF)', sendTitle: 'Send me a Message', yourName: 'Your Name', yourEmail: 'Your Email', message: 'Message', send: 'Send Message', sending: 'Sending...',
  status: {
    loading: 'Sending message...',
    mailto: 'Email client opened. If it did not open, please use the direct email below.',
    sent: 'Message sent. Thanks for reaching out.',
    error: 'Unable to send right now. Please email me directly at hufq0611@outlook.com.',
  },
  wechat: 'Scan for WeChat', qrAlt: 'WeChat QR code', logo: 'logo', carousel: 'Photo carousel', previous: 'Prev', next: 'Next', previousPhoto: 'Previous photo', nextPhoto: 'Next photo', choosePhoto: 'Choose photo', showPhoto: 'Show',
  title: 'Louis Fengqi Hu | Portfolio', description: 'Louis Fengqi Hu portfolio - machine learning engineering, AI agents, RAG, and reinforcement learning research.',
}

const zhUi: typeof ui = {
  nav: ['首页', '关于我', '项目', '联系'],
  home: '返回首页', menu: '展开或收起菜单', navigation: '主导航',
  copyright: '版权所有', loading: '页面加载中…',
  viewProjects: '查看项目', contactMe: '联系我', focus: '方向', email: '邮箱', phone: '电话', resume: '简历',
  aboutMe: '关于我', workAndEnjoy: '我的专业方向与兴趣爱好。', skills: '专业技能', interests: '兴趣爱好', moreAbout: '进一步了解我',
  tools: 'AI 与机器学习', howIBuild: '从模型到实际应用。',
  toolsIntro: '我的工作涵盖模型评估、强化学习与大模型应用，目前重点关注 AI Agent 和 RAG，探索如何将模型与上下文、工具及实际工作流程结合。',
  childhood: '从童年探索到全栈开发', origin: '一切的起点。', milestones: '早期探索', moments: '关键时刻',
  growth: '我的专业成长', viewResume: '查看简历', beyondCode: '代码之外', offline: '生活的一面', snapshot: '生活剪影', beyondCoding: '编程之外的我', videoAlt: '雷蛇鼠标评测视频封面',
  myProjects: '我的项目', projectsTitle: '项目与研究。',
  projectsIntro: '从全栈平台到深度学习系统，这些项目体现了我对实际应用、可扩展性与清晰架构的关注。',
  projectList: '项目列表', reference: '查看相关资料', referenceFor: '查看项目资料：', details: '项目详情', professional: '职业经历', workExperience: '工作经历。', companyWebsite: '公司网站',
  contactTitle: '期待与你交流。', openResume: '查看简历（PDF）', sendTitle: '给我留言', yourName: '你的姓名', yourEmail: '你的邮箱', message: '留言内容', send: '发送留言', sending: '发送中…',
  status: {
    loading: '正在发送留言…',
    mailto: '已尝试打开邮件客户端。如果未能打开，请通过下方邮箱直接联系我。',
    sent: '留言已发送，感谢你的联系。',
    error: '暂时无法发送，请直接发邮件至 hufq0611@outlook.com。',
  },
  wechat: '扫码添加微信', qrAlt: '微信二维码', logo: '标志', carousel: '摄影作品轮播', previous: '上一张', next: '下一张', previousPhoto: '上一张照片', nextPhoto: '下一张照片', choosePhoto: '选择照片', showPhoto: '查看',
  title: 'Louis Fengqi Hu | 个人作品集', description: 'Louis Fengqi Hu 的个人网站，分享机器学习工程、AI Agent、RAG 应用与强化学习研究。',
}

const chinese = {
  ...english,
  hero: {
    ...english.hero,
    eyebrow: '你好，我是',
    subtitle: '我是约翰斯·霍普金斯大学计算机科学专业的工程硕士在读生，专注于机器学习工程与 AI Agent。我的研究与实践涵盖强化学习鲁棒性、检索增强生成（RAG）及大模型应用，关注模型评估与 AI 系统的实际落地。',
    focus: '机器学习工程与 AI Agent', portraitAlt: 'Louis Fengqi Hu 的肖像',
  },
  resume: { ...english.resume, title: '简历（PDF）' },
  socialLinks: english.socialLinks.map((link) => ({ ...link, label: link.label === 'Bilibili' ? '哔哩哔哩' : link.label })),
  skills: ['机器学习', 'AI Agent', 'RAG', '大模型集成', '强化学习', '计算机视觉', '模型评估', 'AI 应用开发'],
  interests: ['硬件', '摄影', '音乐', '足球', '电影'],
  featuredStacks: english.featuredStacks.map((stack, index) => ({
    ...stack,
    category: [
      '大语言模型 | RAG | API | 提示词工程', 'Python | PyTorch | YOLO | 数据分析',
      '强化学习 | SAC | IQL | 仿真到现实', 'Node.js | API | RabbitMQ | Docker',
    ][index],
    title: ['AI Agent 与 RAG', '机器学习工程', '强化学习鲁棒性与评估', 'AI 系统落地'][index],
    detail: [
      '构建融合检索上下文、用户偏好与外部 API 的大模型应用，并探索利用上下文和工具完成实际任务的 AI Agent。',
      '从计算机视觉到数据分类，开展数据准备、模型开发与评估，兼顾模型准确率与实际部署约束。',
      '研究强化学习策略在部署噪声与动作延迟下的表现，构建统一评测协议，并在真实机械臂上验证策略迁移效果。',
      '通过 API 集成、异步处理与部署，将模型融入可用的产品。以软件工程基础支撑 AI 应用的可靠运行与高效数据流转。',
    ][index],
  })),
  aboutIntro: {
    title: '关于我的一些故事。',
    description: '我不仅关心代码如何编写，也关心它如何运行。从手写 Java Swing 系统到配置 Linux 服务器，我享受从头到尾构建稳健系统的过程。',
  },
  aboutNarrative: {
    spotlight: '我关注的不只是代码本身，还有系统的运行表现、高负载下的可靠性，以及架构能否在真实需求不断变化时保持可维护性。',
    origin: '我对技术的兴趣始于童年。8 岁时，乐高机器人为我打开了计算思维的大门；12 岁时，Arduino 项目与自学编程培养了我动手解决问题的习惯。初中时，我自己选购配件，组装了第一台电脑。',
    growth: '随着成长，我的关注点从兴趣项目转向生产系统。我仍记得第一次将应用部署到真实服务器时，在反复调试中学习 Linux 配置、域名设置与 CI/CD。这段经历塑造了我如今务实、迭代并重视性能的软件工程方法。',
  },
  aboutStats: [
    { label: '约翰斯·霍普金斯大学', value: '硕士在读' },
    { label: '第一作者', value: '学术论文发表' },
    { label: '软件著作权', value: '著作权人' },
  ],
  childhoodMoments: english.childhoodMoments.map((moment, index) => ({
    ...moment,
    title: ['我的第一台电脑', '我的 Arduino 探索', '乐高 RCX 时光'][index],
    description: [
      '初中时，我自己选购配件并组装了第一台电脑，让对技术的好奇转化为实际的工程实践。',
      '12 岁时，我开始探索 Arduino 并自学编程，在调试与反复尝试中逐渐建立信心。',
      '8 岁时对乐高机器人的探索，让我通过实验接触技术，学习解决问题。',
    ][index],
    alt: ['第一次组装的电脑', '硬件与 Arduino 探索阶段', '乐高 RCX 机器人'][index],
  })),
  growthStory: {
    ...english.growthStory,
    title: '在实践中学习。',
    first: '我喜欢探索陌生领域，通过动手实践学习，即使过程充满问题与不确定性。',
    second: '我仍记得第一次把应用部署到服务器的过程：配置 Linux、设置域名、集成 CI/CD。经过数周的反复尝试，我逐渐理解了整个架构。面对困难，我选择迎难而上，在迭代中学习，并不断提升自己。',
    imageAlt: '服务器部署与维护工作环境',
  },
  galleryShots: english.galleryShots.map((shot, index) => ({
    ...shot,
    title: ['纽约 · 曼哈顿大桥', '纽约 · Vessel', '巴尔的摩 · 约翰斯·霍普金斯大学校园', '纽约 · 布鲁克林大桥', '杭州 · 叶片', '东京 · 涩谷', '纽约 · 洛克菲勒中心观景台', '东京 · 蓝调时刻', '上海 · 东方明珠'][index],
    alt: ['纽约曼哈顿大桥', '纽约 Vessel 建筑', '约翰斯·霍普金斯大学校园', '纽约布鲁克林大桥', '在杭州拍摄的叶片', '东京涩谷街景', '纽约洛克菲勒中心观景台', '东京蓝调时刻的城市风景', '上海东方明珠电视塔'][index],
  })),
  hobbies: '闲暇时，我喜欢城市与旅行摄影，关注电影和足球（巴塞罗那俱乐部），偶尔也会在哔哩哔哩发布数码产品视频。',
  projects: english.projects.map((project, index) => ({
    ...project,
    title: [
      'Robust-RLlib：部署环境变化下的强化学习鲁棒性评测', 'WearWise — AI 智能个人衣橱',
      'Kitty 美食商城 — 在线购物平台', 'Stack Overflow 上 Python 的演变：主题趋势的实证分析',
      '基于用户画像的程序员论坛推荐系统', 'HopShare', '瓷砖表面缺陷混合检测框架', '智能微信公众号',
    ][index],
    tags: project.tags.map((tag) => ({
      Research: '研究', 'Reinforcement Learning': '强化学习', 'Sim-to-Real': '仿真到现实',
      'Data Analysis': '数据分析', 'Machine Learning': '机器学习', 'User Profiling': '用户画像',
      'Jaccard Similarity': 'Jaccard 相似度', Rideshare: '拼车', 'Full Stack': '全栈开发',
      'Message Queue': '消息队列', 'Deep Learning': '深度学习', 'Computer Vision': '计算机视觉',
      'API Development': 'API 开发', 'LLM Integration': '大语言模型集成',
    }[tag] ?? tag)),
    status: project.status ? '论文准备中' : undefined,
    alt: ['强化学习鲁棒性评测项目', 'WearWise 项目截图', 'Kitty 美食商城项目截图', 'Python 趋势分析项目图示', '推荐系统界面', 'HopShare 项目截图', 'YOLO 瓷砖缺陷检测项目', '智能微信公众号项目截图'][index],
    summary: [
      'Robust-RLlib 评测强化学习策略在部署噪声与动作延迟下的表现。我构建了可组合的扰动机制，以及适用于 SAC、IQL 等方法的统一评测协议，并在真实机械臂上验证了策略迁移效果。我是该论文的第二作者，目前正在准备向 ICLR 投稿。',
      'WearWise 帮助用户管理衣橱、获取个性化穿搭建议，并通过虚拟试衣预览效果。我使用 React、Express 和 MongoDB 构建平台，结合 Gemini API 与 RAG 融合衣橱库存、个人偏好及实时天气，使用 NanoBanana 2 生成试衣图片。RabbitMQ 负责异步图片上传，平台部署于 Vercel 和 Render。',
      'Kitty 美食商城基于 Vue 3 与 Spring Boot，涵盖用户账户、商品浏览、购物车和订单功能。我主导全栈开发，通过 Redis 缓存与数据库索引支持 1,000 余个并发请求，响应时间低于 500 毫秒，同时负责 API 与数据库设计、Docker / Nginx 部署及 CI/CD 流程。',
      '该研究分析了 Stack Overflow 上超过 200 万条 Python 相关帖子，探索开发者兴趣、主题与库使用情况的变化。我采用多标注者标注并优化 GBDT 分类器，在全部帖子与未回答帖子上分别取得 91.38% 和 90.56% 的准确率，优于四种基线模型。成果发表于 Journal of Computer Languages，我为第一作者。',
      '该系统基于 Vue 3 与 Node.js，依据用户不断变化的兴趣和行为推荐程序员论坛内容。我处理了 5,000 余篇 CSDN 帖子，利用标签、浏览历史与点赞构建用户画像，并通过 Jaccard 相似度匹配相关内容。我负责推荐算法、前后端集成与界面设计，并拥有该软件的著作权。',
      'HopShare 帮助约翰斯·霍普金斯大学学生发布或寻找拼车机会，降低出行成本。我们通过消息队列实现即时通信，并加入好友系统，帮助同学建立联系。',
      '设计自动化瓷砖表面缺陷检测系统，结合 YOLO、注意力机制与 SPD 卷积，在轻量化部署条件下提升检测精度。',
      '将文心一言 API 集成到微信公众号，结合自定义菜单与第三方服务链接，提供自动化、智能化的推荐体验。',
    ][index],
  })),
  workExperiences: english.workExperiences.map((experience, index) => ({
    ...experience,
    company: index === 1 ? '恒生电子股份有限公司' : experience.company,
    location: ['美国 · 远程', '中国 · 杭州'][index],
    period: ['2026 年 5 月至 8 月', '2024 年 10 月至 12 月'][index],
    role: ['AI 开发工程师', '软件工程实习生'][index],
    summary: [
      '负责需求分析、功能开发、测试与项目管理。构建事件驱动的 Node.js / Express 服务，同步 GitHub Issues 与 Notion 任务，采用 HMAC Webhook 验证、基于 TTL 的写入保护、可配置标签映射与模糊搜索。通过更细粒度的音频切分和异步处理，将语音转文字处理效率提升 70%，将 token 用量降低 20%，并通过缓存与 SQL 查询优化加快页面加载。',
      '为交易平台开发中间件，支持客户端与金融市场之间的交易流程。使用内部大语言模型工具生成代码，并协助制定提示词规范，将工作效率提升 30%。与资深工程师协作重构三个核心服务模块，修复 5 余处业务逻辑缺陷，提高交易订单处理的数据准确性。',
    ][index],
  })),
  contactInfo: { ...english.contactInfo, location: '约翰斯·霍普金斯大学 · 巴尔的摩' },
} satisfies Omit<typeof english, 'hobbies'> & { hobbies: string }

export const content = {
  en: { ...english, ui },
  zh: { ...chinese, ui: zhUi },
}

export type Locale = keyof typeof content
