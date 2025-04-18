// 模拟职位数据
const jobsData = [
    {
        id: 1,
        title: "前端开发工程师",
        company: "科技有限公司",
        salary: "15k-25k",
        location: "北京",
        experience: "3-5年",
        education: "本科",
        tags: ["JavaScript", "Vue", "React"],
        industry: "it",
        description: "负责公司产品的前端开发工作，包括但不限于PC端、移动端的页面开发和优化。",
        requirements: [
            "熟练掌握HTML5、CSS3、JavaScript等前端技术",
            "熟悉Vue.js或React等前端框架，有实际项目经验",
            "了解前端工程化，熟悉Webpack等构建工具",
            "有良好的代码风格和编程习惯",
            "具备良好的沟通能力和团队协作精神"
        ]
    },
    {
        id: 2,
        title: "Java后端开发工程师",
        company: "互联网科技有限公司",
        salary: "20k-35k",
        location: "上海",
        experience: "5-10年",
        education: "本科",
        tags: ["Java", "Spring Boot", "MySQL"],
        industry: "it",
        description: "负责公司核心业务系统的设计、开发和维护，参与技术方案的讨论和决策。",
        requirements: [
            "精通Java编程语言，熟悉JVM原理",
            "熟练使用Spring、Spring Boot、MyBatis等框架",
            "熟悉MySQL等关系型数据库，了解Redis等缓存技术",
            "有高并发、大数据量系统开发经验优先",
            "具备良好的问题分析和解决能力"
        ]
    },
    {
        id: 3,
        title: "产品经理",
        company: "创新科技有限公司",
        salary: "18k-30k",
        location: "深圳",
        experience: "3-5年",
        education: "本科",
        tags: ["产品设计", "用户研究", "数据分析"],
        industry: "it",
        description: "负责公司产品的规划、设计和迭代，推动产品从概念到上线的全过程。",
        requirements: [
            "有互联网产品设计和管理经验",
            "具备良好的产品思维和用户体验意识",
            "熟悉产品开发流程，能够撰写产品需求文档",
            "具备数据分析能力，能够基于数据做出决策",
            "良好的沟通协调能力和团队合作精神"
        ]
    },
    {
        id: 4,
        title: "UI设计师",
        company: "设计工作室",
        salary: "12k-20k",
        location: "杭州",
        experience: "1-3年",
        education: "本科",
        tags: ["UI设计", "Sketch", "Figma"],
        industry: "it",
        description: "负责公司产品的界面设计，包括视觉风格、交互设计等。",
        requirements: [
            "具备扎实的美术功底和设计理论知识",
            "熟练使用Sketch、Figma、Adobe系列等设计工具",
            "了解iOS、Android等平台的设计规范",
            "有良好的审美能力和创新意识",
            "能够理解产品需求，与产品、开发团队良好沟通"
        ]
    },
    {
        id: 5,
        title: "金融分析师",
        company: "投资管理有限公司",
        salary: "15k-25k",
        location: "北京",
        experience: "3-5年",
        education: "硕士",
        tags: ["金融分析", "投资", "风险控制"],
        industry: "finance",
        description: "负责公司投资项目的分析、评估和报告，为投资决策提供支持。",
        requirements: [
            "金融、经济或相关专业背景",
            "熟悉金融市场和投资分析方法",
            "具备扎实的财务分析能力",
            "良好的数据分析和建模能力",
            "具备CFA、FRM等专业资格证书优先"
        ]
    },
    {
        id: 6,
        title: "银行客户经理",
        company: "商业银行",
        salary: "8k-15k",
        location: "广州",
        experience: "1-3年",
        education: "本科",
        tags: ["客户管理", "销售", "金融产品"],
        industry: "finance",
        description: "负责发展和维护银行客户关系，推广银行金融产品和服务。",
        requirements: [
            "金融、经济或相关专业背景",
            "具备良好的沟通能力和销售技巧",
            "了解银行产品和服务",
            "有一定的客户资源和销售经验优先",
            "具备团队合作精神和积极的工作态度"
        ]
    },
    {
        id: 7,
        title: "高中数学教师",
        company: "重点中学",
        salary: "7k-12k",
        location: "成都",
        experience: "应届生",
        education: "本科",
        tags: ["数学教育", "高中教学"],
        industry: "education",
        description: "负责高中数学课程的教学工作，指导学生学习和备考。",
        requirements: [
            "数学或教育相关专业背景",
            "热爱教育事业，有责任心",
            "具备良好的数学知识和教学能力",
            "普通话标准，表达能力强",
            "有教师资格证优先"
        ]
    },
    {
        id: 8,
        title: "儿科医生",
        company: "综合医院",
        salary: "15k-25k",
        location: "上海",
        experience: "5-10年",
        education: "硕士",
        tags: ["儿科", "医疗"],
        industry: "medical",
        description: "负责儿科门诊、住院患者的诊断和治疗工作。",
        requirements: [
            "医学专业背景，有执业医师资格",
            "具备扎实的儿科医学知识和临床经验",
            "有良好的医患沟通能力",
            "responsibility strong, work seriously",
            "有副主任医师职称优先"
        ]
    },
    {
        id: 9,
        title: "酒店前台接待",
        company: "五星级酒店",
        salary: "4k-6k",
        location: "三亚",
        experience: "应届生",
        education: "大专",
        tags: ["客户服务", "酒店管理"],
        industry: "service",
        description: "负责酒店客人的接待、登记和咨询服务工作。",
        requirements: [
            "形象气质佳，有服务意识",
            "良好的沟通能力和解决问题的能力",
            "熟练使用办公软件",
            "英语口语流利优先",
            "有酒店工作经验优先"
        ]
    },
    {
        id: 10,
        title: "人力资源专员",
        company: "管理咨询公司",
        salary: "8k-12k",
        location: "北京",
        experience: "1-3年",
        education: "本科",
        tags: ["招聘", "培训", "人事管理"],
        industry: "service",
        description: "负责公司的招聘、培训、绩效管理等人力资源工作。",
        requirements: [
            "人力资源或相关专业背景",
            "熟悉招聘流程和渠道",
            "了解劳动法规和人事政策",
            "良好的沟通协调能力",
            "有人力资源管理经验优先"
        ]
    },
    {
        id: 11,
        title: "数据分析师",
        company: "大数据科技公司",
        salary: "18k-30k",
        location: "杭州",
        experience: "3-5年",
        education: "本科",
        tags: ["数据分析", "Python", "SQL"],
        industry: "it",
        description: "负责公司业务数据的分析、挖掘和可视化，为业务决策提供数据支持。",
        requirements: [
            "统计学、计算机或相关专业背景",
            "熟练使用SQL、Python等数据分析工具",
            "具备数据挖掘和机器学习相关知识",
            "有良好的数据敏感度和业务理解能力",
            "有大数据处理经验优先"
        ]
    },
    {
        id: 12,
        title: "市场营销经理",
        company: "消费品公司",
        salary: "15k-25k",
        location: "广州",
        experience: "5-10年",
        education: "本科",
        tags: ["市场策划", "品牌推广", "营销管理"],
        industry: "service",
        description: "负责公司产品的市场策划、品牌推广和营销活动的组织实施。",
        requirements: [
            "市场营销或相关专业背景",
            "具备丰富的市场营销经验和策划能力",
            "了解消费者心理和市场趋势",
            "有良好的团队管理和项目协调能力",
            "有知名品牌营销经验优先"
        ]
    },
    {
        id: 13,
        title: "护士",
        company: "三甲医院",
        salary: "6k-10k",
        location: "武汉",
        experience: "1-3年",
        education: "大专",
        tags: ["护理", "医疗服务"],
        industry: "medical",
        description: "负责病房患者的护理工作，执行医嘱，观察患者病情变化。",
        requirements: [
            "护理专业背景，有护士执业资格",
            "熟悉基本护理操作和流程",
            "有良好的沟通能力和服务意识",
            "工作认真负责，有爱心和耐心",
            "有医院工作经验优先"
        ]
    },
    {
        id: 14,
        title: "幼儿园教师",
        company: "国际幼儿园",
        salary: "5k-8k",
        location: "深圳",
        experience: "应届生",
        education: "大专",
        tags: ["幼儿教育", "儿童心理"],
        industry: "education",
        description: "负责幼儿园班级的日常教学和管理工作，设计和组织教育活动。",
        requirements: [
            "学前教育或相关专业背景",
            "热爱幼教事业，有爱心和耐心",
            "了解幼儿心理和发展特点",
            "具备良好的沟通能力和团队合作精神",
            "有教师资格证优先"
        ]
    },
    {
        id: 15,
        title: "财务会计",
        company: "制造业公司",
        salary: "8k-12k",
        location: "苏州",
        experience: "3-5年",
        education: "本科",
        tags: ["财务核算", "税务", "财务报表"],
        industry: "finance",
        description: "负责公司的财务核算、报表编制和税务申报等工作。",
        requirements: [
            "会计或财务相关专业背景",
            "熟悉财务会计准则和税法",
            "精通财务软件和Excel等办公软件",
            "有良好的职业道德和责任心",
            "有会计师资格证书优先"
        ]
    }
];

// 当前页码和每页显示数量
let currentPage = 1;
const itemsPerPage = 6;

// DOM元素
const jobList = document.getElementById('job-list');
const prevPageBtn = document.getElementById('prev-page');
const nextPageBtn = document.getElementById('next-page');
const currentPageSpan = document.getElementById('current-page');
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const filterBtn = document.getElementById('filter-btn');
const industryFilter = document.getElementById('industry-filter');
const salaryFilter = document.getElementById('salary-filter');
const experienceFilter = document.getElementById('experience-filter');
const modal = document.getElementById('job-modal');
const closeModal = document.querySelector('.close');

// 初始化页面
document.addEventListener('DOMContentLoaded', () => {
    displayJobs();
    setupEventListeners();
});

// 设置事件监听器
function setupEventListeners() {
    // 分页按钮
    prevPageBtn.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            displayJobs();
        }
    });

    nextPageBtn.addEventListener('click', () => {
        const filteredJobs = getFilteredJobs();
        const totalPages = Math.ceil(filteredJobs.length / itemsPerPage);
        
        if (currentPage < totalPages) {
            currentPage++;
            displayJobs();
        }
    });

    // 搜索按钮
    searchBtn.addEventListener('click', () => {
        currentPage = 1;
        displayJobs();
    });

    // 回车搜索
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            currentPage = 1;
            displayJobs();
        }
    });

    // 筛选按钮
    filterBtn.addEventListener('click', () => {
        currentPage = 1;
        displayJobs();
    });

    // 关闭模态框
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // 点击模态框外部关闭
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
}

// 获取筛选后的职位
function getFilteredJobs() {
    const searchTerm = searchInput.value.toLowerCase();
    const industry = industryFilter.value;
    const salary = salaryFilter.value;
    const experience = experienceFilter.value;

    return jobsData.filter(job => {
        // 搜索条件
        const matchesSearch = 
            job.title.toLowerCase().includes(searchTerm) ||
            job.company.toLowerCase().includes(searchTerm) ||
            job.location.toLowerCase().includes(searchTerm);
        
        // 行业筛选
        const matchesIndustry = industry === '' || job.industry === industry;
        
        // 薪资筛选
        let matchesSalary = true;
        if (salary !== '') {
            const jobSalary = parseInt(job.salary.split('k')[0]);
            
            if (salary === '0-5000' && jobSalary > 5) matchesSalary = false;
            else if (salary === '5000-10000' && (jobSalary < 5 || jobSalary > 10)) matchesSalary = false;
            else if (salary === '10000-15000' && (jobSalary < 10 || jobSalary > 15)) matchesSalary = false;
            else if (salary === '15000-20000' && (jobSalary < 15 || jobSalary > 20)) matchesSalary = false;
            else if (salary === '20000+' && jobSalary < 20) matchesSalary = false;
        }
        
        // 经验筛选
        const matchesExperience = experience === '' || job.experience === experience;
        
        return matchesSearch && matchesIndustry && matchesSalary && matchesExperience;
    });
}

// 显示职位列表
function displayJobs() {
    const filteredJobs = getFilteredJobs();
    const totalPages = Math.ceil(filteredJobs.length / itemsPerPage);
    
    // 更新分页按钮状态
    prevPageBtn.disabled = currentPage === 1;
    nextPageBtn.disabled = currentPage === totalPages || totalPages === 0;
    currentPageSpan.textContent = currentPage;
    
    // 清空职位列表
    jobList.innerHTML = '';
    
    // 计算当前页的起始和结束索引
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, filteredJobs.length);
    
    // 如果没有匹配的职位
    if (filteredJobs.length === 0) {
        jobList.innerHTML = '<div class="no-jobs">没有找到匹配的职位信息</div>';
        return;
    }
    
    // 添加职位卡片
    for (let i = startIndex; i < endIndex; i++) {
        const job = filteredJobs[i];
        const jobCard = createJobCard(job);
        jobList.appendChild(jobCard);
    }
}

// 创建职位卡片
function createJobCard(job) {
    const jobCard = document.createElement('div');
    jobCard.className = 'job-card';
    jobCard.dataset.id = job.id;
    
    // 职位卡片内容
    jobCard.innerHTML = `
        <div class="job-title">${job.title}</div>
        <div class="company-name">${job.company}</div>
        <div class="job-salary">${job.salary}</div>
        <div class="job-location"><i class="fas fa-map-marker-alt"></i> ${job.location}</div>
        <div class="job-experience"><i class="fas fa-briefcase"></i> ${job.experience} | ${job.education}</div>
        <div class="job-tags">
            ${job.tags.map(tag => `<span class="job-tag">${tag}</span>`).join('')}
        </div>
    `;
    
    // 点击职位卡片显示详情
    jobCard.addEventListener('click', () => {
        showJobDetails(job);
    });
    
    return jobCard;
}

// 显示职位详情
function showJobDetails(job) {
    const jobDetails = document.getElementById('job-details');
    
    // 职位详情内容
    jobDetails.innerHTML = `
        <div class="job-detail-header">
            <h2 class="job-detail-title">${job.title}</h2>
            <div class="job-detail-company">${job.company}</div>
            <div class="job-detail-info">
                <div class="job-detail-salary"><i class="fas fa-yen-sign"></i> ${job.salary}</div>
                <div><i class="fas fa-map-marker-alt"></i> ${job.location}</div>
                <div><i class="fas fa-briefcase"></i> ${job.experience}</div>
                <div><i class="fas fa-graduation-cap"></i> ${job.education}</div>
            </div>
            <div class="job-tags">
                ${job.tags.map(tag => `<span class="job-tag">${tag}</span>`).join('')}
            </div>
        </div>
        
        <div class="job-detail-description">
            <h3>职位描述</h3>
            <p>${job.description}</p>
        </div>
        
        <div class="job-detail-requirements">
            <h3>任职要求</h3>
            <ul>
                ${job.requirements.map(req => `<li>${req}</li>`).join('')}
            </ul>
        </div>
        
        <button class="apply-btn">立即申请</button>
    `;
    
    // 显示模态框
    modal.style.display = 'block';
    
    // 申请按钮点击事件
    const applyBtn = jobDetails.querySelector('.apply-btn');
    applyBtn.addEventListener('click', () => {
        alert('申请功能正在开发中，敬请期待！');
    });
}