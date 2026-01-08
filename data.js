// Tech stack comparison data
const techData = {
    frontend: {
        title: "Frontend Framework",
        questions: [
            {
                id: "experience",
                title: "What's your JavaScript experience level?",
                description: "This helps us recommend frameworks that match your learning curve",
                options: [
                    { id: "beginner", title: "Beginner", description: "New to JavaScript or web development" },
                    { id: "intermediate", title: "Intermediate", description: "Comfortable with JS basics, built a few projects" },
                    { id: "advanced", title: "Advanced", description: "Strong JS skills, understand complex concepts" }
                ]
            },
            {
                id: "project_type",
                title: "What type of project are you building?",
                description: "Different frameworks excel at different project types",
                options: [
                    { id: "personal", title: "Personal Project", description: "Learning project or small personal app" },
                    { id: "startup", title: "Startup MVP", description: "Need to move fast and iterate quickly" },
                    { id: "enterprise", title: "Enterprise App", description: "Large-scale application with many developers" },
                    { id: "portfolio", title: "Portfolio Site", description: "Simple website to showcase your work" }
                ]
            },
            {
                id: "team_size",
                title: "How many developers will work on this?",
                description: "Team size affects framework choice and tooling needs",
                options: [
                    { id: "solo", title: "Just Me", description: "Working alone on this project" },
                    { id: "small", title: "Small Team (2-5)", description: "Small collaborative team" },
                    { id: "large", title: "Large Team (6+)", description: "Many developers, need strong conventions" }
                ]
            },
            {
                id: "priority",
                title: "What's most important for your project?",
                description: "This helps us weigh the trade-offs",
                options: [
                    { id: "learning", title: "Learning & Growth", description: "Want to learn modern development practices" },
                    { id: "speed", title: "Development Speed", description: "Need to build and ship quickly" },
                    { id: "performance", title: "Runtime Performance", description: "App needs to be fast for users" },
                    { id: "jobs", title: "Job Market", description: "Want skills that help with employment" }
                ]
            }
        ],
        technologies: {
            react: {
                name: "React",
                description: "A JavaScript library for building user interfaces",
                pros: [
                    "Huge community and ecosystem",
                    "Excellent job market demand",
                    "Great learning resources",
                    "Flexible and unopinionated",
                    "Strong developer tools"
                ],
                cons: [
                    "Steeper learning curve for beginners",
                    "Need to make many architectural decisions",
                    "Rapid ecosystem changes"
                ],
                scoring: {
                    beginner: { learning: 7, speed: 6, performance: 8, jobs: 10 },
                    intermediate: { learning: 9, speed: 8, performance: 8, jobs: 10 },
                    advanced: { learning: 9, speed: 9, performance: 8, jobs: 10 }
                }
            },
            vue: {
                name: "Vue.js",
                description: "The Progressive JavaScript Framework",
                pros: [
                    "Gentle learning curve",
                    "Excellent documentation",
                    "Great developer experience",
                    "Good performance out of the box",
                    "Flexible - can be adopted incrementally"
                ],
                cons: [
                    "Smaller job market than React",
                    "Less third-party ecosystem",
                    "Fewer large-scale enterprise adoptions"
                ],
                scoring: {
                    beginner: { learning: 10, speed: 9, performance: 9, jobs: 6 },
                    intermediate: { learning: 9, speed: 9, performance: 9, jobs: 6 },
                    advanced: { learning: 8, speed: 9, performance: 9, jobs: 6 }
                }
            },
            angular: {
                name: "Angular",
                description: "Platform for building mobile and desktop web applications",
                pros: [
                    "Full-featured framework with everything included",
                    "Strong TypeScript integration",
                    "Great for large enterprise applications",
                    "Excellent tooling and CLI",
                    "Strong conventions and structure"
                ],
                cons: [
                    "Steep learning curve",
                    "Heavy and complex for small projects",
                    "Frequent major version updates"
                ],
                scoring: {
                    beginner: { learning: 4, speed: 5, performance: 7, jobs: 8 },
                    intermediate: { learning: 6, speed: 6, performance: 7, jobs: 8 },
                    advanced: { learning: 8, speed: 8, performance: 7, jobs: 8 }
                }
            },
            svelte: {
                name: "Svelte",
                description: "Cybernetically enhanced web apps",
                pros: [
                    "Excellent performance (compiles to vanilla JS)",
                    "Simple and intuitive syntax",
                    "Small bundle sizes",
                    "Great developer experience",
                    "Less boilerplate code"
                ],
                cons: [
                    "Smaller ecosystem and community",
                    "Limited job market",
                    "Fewer learning resources",
                    "Less mature tooling"
                ],
                scoring: {
                    beginner: { learning: 9, speed: 8, performance: 10, jobs: 3 },
                    intermediate: { learning: 9, speed: 9, performance: 10, jobs: 3 },
                    advanced: { learning: 8, speed: 9, performance: 10, jobs: 3 }
                }
            }
        }
    },

    backend: {
        title: "Backend Framework",
        questions: [
            {
                id: "language_preference",
                title: "Which programming language do you prefer?",
                description: "Choose based on your experience or learning goals",
                options: [
                    { id: "javascript", title: "JavaScript/Node.js", description: "Same language as frontend, huge ecosystem" },
                    { id: "python", title: "Python", description: "Beginner-friendly, great for data and AI" },
                    { id: "ruby", title: "Ruby", description: "Developer happiness, rapid prototyping" },
                    { id: "any", title: "I'm flexible", description: "Open to learning any language" }
                ]
            },
            {
                id: "project_complexity",
                title: "How complex will your backend be?",
                description: "This affects framework choice and architecture needs",
                options: [
                    { id: "simple", title: "Simple API", description: "Basic CRUD operations, few endpoints" },
                    { id: "moderate", title: "Moderate Complexity", description: "User auth, file uploads, integrations" },
                    { id: "complex", title: "Complex System", description: "Microservices, real-time features, high scale" }
                ]
            },
            {
                id: "development_speed",
                title: "What's your timeline priority?",
                description: "Different frameworks optimize for different speeds",
                options: [
                    { id: "prototype", title: "Quick Prototype", description: "Need something working in days/weeks" },
                    { id: "mvp", title: "Solid MVP", description: "Few months, need good foundation" },
                    { id: "production", title: "Production Ready", description: "Long-term, enterprise-grade system" }
                ]
            },
            {
                id: "team_experience",
                title: "What's your team's backend experience?",
                description: "Framework learning curves vary significantly",
                options: [
                    { id: "beginner", title: "New to Backend", description: "First time building APIs" },
                    { id: "some", title: "Some Experience", description: "Built a few APIs, understand basics" },
                    { id: "experienced", title: "Very Experienced", description: "Built production systems before" }
                ]
            }
        ],
        technologies: {
            express: {
                name: "Express.js",
                description: "Fast, unopinionated, minimalist web framework for Node.js",
                pros: [
                    "Minimal and flexible",
                    "Huge ecosystem (npm packages)",
                    "Same language as frontend",
                    "Great for APIs and microservices",
                    "Excellent documentation"
                ],
                cons: [
                    "Requires many architectural decisions",
                    "Can become messy without structure",
                    "Need to add security manually"
                ],
                scoring: {
                    javascript: { prototype: 9, mvp: 8, production: 7, learning: 8 },
                    python: { prototype: 6, mvp: 6, production: 6, learning: 7 },
                    ruby: { prototype: 6, mvp: 6, production: 6, learning: 7 },
                    any: { prototype: 8, mvp: 7, production: 7, learning: 8 }
                }
            },
            django: {
                name: "Django",
                description: "High-level Python web framework that encourages rapid development",
                pros: [
                    "Batteries included (admin, auth, ORM)",
                    "Excellent security by default",
                    "Great for rapid development",
                    "Strong conventions and structure",
                    "Excellent documentation"
                ],
                cons: [
                    "Can be overkill for simple APIs",
                    "Less flexible than micro-frameworks",
                    "Steeper learning curve"
                ],
                scoring: {
                    python: { prototype: 8, mvp: 10, production: 9, learning: 7 },
                    javascript: { prototype: 6, mvp: 7, production: 8, learning: 6 },
                    ruby: { prototype: 7, mvp: 8, production: 8, learning: 6 },
                    any: { prototype: 7, mvp: 9, production: 9, learning: 7 }
                }
            },
            rails: {
                name: "Ruby on Rails",
                description: "Web application framework written in Ruby",
                pros: [
                    "Convention over configuration",
                    "Rapid development and prototyping",
                    "Great developer experience",
                    "Strong community and gems",
                    "Built-in testing framework"
                ],
                cons: [
                    "Can be slow for high-performance needs",
                    "Ruby job market smaller than others",
                    "Magic can be confusing for beginners"
                ],
                scoring: {
                    ruby: { prototype: 10, mvp: 9, production: 8, learning: 8 },
                    javascript: { prototype: 7, mvp: 7, production: 7, learning: 6 },
                    python: { prototype: 7, mvp: 7, production: 7, learning: 6 },
                    any: { prototype: 8, mvp: 8, production: 7, learning: 7 }
                }
            },
            fastapi: {
                name: "FastAPI",
                description: "Modern, fast web framework for building APIs with Python",
                pros: [
                    "Automatic API documentation",
                    "Excellent performance",
                    "Modern Python features (type hints)",
                    "Built-in validation",
                    "Great for machine learning APIs"
                ],
                cons: [
                    "Newer framework, smaller ecosystem",
                    "Less full-stack features than Django",
                    "Requires more setup for complex apps"
                ],
                scoring: {
                    python: { prototype: 9, mvp: 8, production: 8, learning: 8 },
                    javascript: { prototype: 6, mvp: 6, production: 7, learning: 6 },
                    ruby: { prototype: 6, mvp: 6, production: 7, learning: 6 },
                    any: { prototype: 8, mvp: 7, production: 8, learning: 7 }
                }
            }
        }
    },

    database: {
        title: "Database",
        questions: [
            {
                id: "data_structure",
                title: "What type of data will you store?",
                description: "Different databases excel at different data types",
                options: [
                    { id: "structured", title: "Structured Data", description: "Users, orders, products - clear relationships" },
                    { id: "flexible", title: "Flexible/Varied", description: "Content, logs, mixed data types" },
                    { id: "documents", title: "Documents/JSON", description: "Articles, configs, nested objects" },
                    { id: "simple", title: "Simple Key-Value", description: "Settings, cache, session data" }
                ]
            },
            {
                id: "scale_expectations",
                title: "How much data do you expect?",
                description: "Scale requirements affect database choice significantly",
                options: [
                    { id: "small", title: "Small Scale", description: "Thousands of records, single server" },
                    { id: "medium", title: "Medium Scale", description: "Millions of records, moderate traffic" },
                    { id: "large", title: "Large Scale", description: "Billions of records, high traffic" },
                    { id: "unknown", title: "Not Sure Yet", description: "Starting small but might grow" }
                ]
            },
            {
                id: "consistency_needs",
                title: "How important is data consistency?",
                description: "Some use cases require strict consistency, others can be flexible",
                options: [
                    { id: "critical", title: "Critical", description: "Financial data, transactions, must be perfect" },
                    { id: "important", title: "Important", description: "User data, should be consistent" },
                    { id: "flexible", title: "Flexible", description: "Analytics, logs, eventual consistency OK" }
                ]
            },
            {
                id: "team_sql_knowledge",
                title: "How comfortable is your team with SQL?",
                description: "SQL knowledge affects database choice and productivity",
                options: [
                    { id: "expert", title: "SQL Experts", description: "Comfortable with complex queries and optimization" },
                    { id: "basic", title: "Basic SQL", description: "Know SELECT, INSERT, UPDATE basics" },
                    { id: "none", title: "No SQL Experience", description: "Prefer to avoid SQL if possible" }
                ]
            }
        ],
        technologies: {
            postgresql: {
                name: "PostgreSQL",
                description: "Advanced open-source relational database",
                pros: [
                    "ACID compliance and reliability",
                    "Excellent performance and scalability",
                    "Rich feature set (JSON, arrays, etc.)",
                    "Strong ecosystem and tooling",
                    "Great for complex queries"
                ],
                cons: [
                    "Requires SQL knowledge",
                    "More complex setup than NoSQL",
                    "Can be overkill for simple apps"
                ],
                scoring: {
                    structured: { critical: 10, important: 9, flexible: 8 },
                    flexible: { critical: 8, important: 8, flexible: 7 },
                    documents: { critical: 7, important: 7, flexible: 6 },
                    simple: { critical: 6, important: 6, flexible: 5 }
                }
            },
            mongodb: {
                name: "MongoDB",
                description: "Document-oriented NoSQL database",
                pros: [
                    "Flexible schema, easy to change",
                    "Great for rapid development",
                    "Handles JSON/documents naturally",
                    "Good horizontal scaling",
                    "No complex joins needed"
                ],
                cons: [
                    "Less consistency guarantees",
                    "Can lead to data duplication",
                    "Learning curve for SQL developers"
                ],
                scoring: {
                    documents: { critical: 7, important: 9, flexible: 10 },
                    flexible: { critical: 6, important: 8, flexible: 9 },
                    structured: { critical: 5, important: 6, flexible: 7 },
                    simple: { critical: 6, important: 7, flexible: 8 }
                }
            },
            mysql: {
                name: "MySQL",
                description: "Popular open-source relational database",
                pros: [
                    "Widely used and supported",
                    "Great performance for read-heavy workloads",
                    "Easy to learn and use",
                    "Excellent hosting support",
                    "Strong community"
                ],
                cons: [
                    "Less advanced features than PostgreSQL",
                    "Some consistency trade-offs",
                    "Limited JSON support"
                ],
                scoring: {
                    structured: { critical: 8, important: 9, flexible: 8 },
                    flexible: { critical: 6, important: 7, flexible: 7 },
                    documents: { critical: 5, important: 5, flexible: 5 },
                    simple: { critical: 7, important: 7, flexible: 6 }
                }
            },
            sqlite: {
                name: "SQLite",
                description: "Lightweight, serverless SQL database",
                pros: [
                    "Zero configuration setup",
                    "Perfect for development and small apps",
                    "ACID compliant",
                    "Cross-platform file format",
                    "No server maintenance needed"
                ],
                cons: [
                    "Limited concurrent writes",
                    "Not suitable for high traffic",
                    "No user management or networking"
                ],
                scoring: {
                    simple: { critical: 8, important: 9, flexible: 8 },
                    structured: { critical: 7, important: 8, flexible: 7 },
                    flexible: { critical: 6, important: 6, flexible: 6 },
                    documents: { critical: 4, important: 4, flexible: 4 }
                }
            }
        }
    },

    cloud: {
        title: "Cloud Provider",
        questions: [
            {
                id: "experience_level",
                title: "What's your cloud experience?",
                description: "Different providers have different learning curves",
                options: [
                    { id: "beginner", title: "New to Cloud", description: "First time deploying to the cloud" },
                    { id: "some", title: "Some Experience", description: "Deployed a few apps, know the basics" },
                    { id: "experienced", title: "Cloud Experienced", description: "Comfortable with infrastructure and DevOps" }
                ]
            },
            {
                id: "project_type",
                title: "What are you deploying?",
                description: "Different providers excel at different workloads",
                options: [
                    { id: "static", title: "Static Website", description: "HTML, CSS, JS - no backend needed" },
                    { id: "fullstack", title: "Full-Stack App", description: "Frontend + backend + database" },
                    { id: "api", title: "API/Backend Only", description: "Just backend services and APIs" },
                    { id: "complex", title: "Complex System", description: "Microservices, multiple components" }
                ]
            },
            {
                id: "budget_priority",
                title: "What's your budget situation?",
                description: "Costs vary significantly between providers and approaches",
                options: [
                    { id: "free", title: "Free Tier Only", description: "Need to stay within free limits" },
                    { id: "low", title: "Low Budget", description: "Under $20/month for small projects" },
                    { id: "moderate", title: "Moderate Budget", description: "$20-100/month, can pay for convenience" },
                    { id: "flexible", title: "Budget Flexible", description: "Cost less important than features/performance" }
                ]
            },
            {
                id: "scaling_needs",
                title: "Do you need to scale automatically?",
                description: "Auto-scaling affects provider choice and complexity",
                options: [
                    { id: "no", title: "No Auto-Scaling", description: "Predictable traffic, manual scaling OK" },
                    { id: "some", title: "Basic Scaling", description: "Handle traffic spikes automatically" },
                    { id: "advanced", title: "Advanced Scaling", description: "Complex scaling patterns, global distribution" }
                ]
            }
        ],
        technologies: {
            vercel: {
                name: "Vercel",
                description: "Platform for frontend frameworks and static sites",
                pros: [
                    "Incredibly easy deployment",
                    "Excellent developer experience",
                    "Great for Next.js and React",
                    "Automatic HTTPS and CDN",
                    "Generous free tier"
                ],
                cons: [
                    "Limited backend capabilities",
                    "Can get expensive at scale",
                    "Less control over infrastructure"
                ],
                scoring: {
                    static: { free: 10, low: 9, moderate: 8, flexible: 7 },
                    fullstack: { free: 8, low: 7, moderate: 8, flexible: 7 },
                    api: { free: 6, low: 6, moderate: 6, flexible: 5 },
                    complex: { free: 4, low: 4, moderate: 5, flexible: 5 }
                }
            },
            netlify: {
                name: "Netlify",
                description: "Platform for modern web projects",
                pros: [
                    "Excellent for static sites and JAMstack",
                    "Great CI/CD integration",
                    "Form handling and serverless functions",
                    "Good free tier",
                    "Simple deployment process"
                ],
                cons: [
                    "Limited for complex backends",
                    "Function limitations",
                    "Less suitable for traditional apps"
                ],
                scoring: {
                    static: { free: 9, low: 9, moderate: 8, flexible: 7 },
                    fullstack: { free: 7, low: 7, moderate: 7, flexible: 6 },
                    api: { free: 6, low: 6, moderate: 6, flexible: 5 },
                    complex: { free: 4, low: 4, moderate: 4, flexible: 4 }
                }
            },
            aws: {
                name: "Amazon Web Services (AWS)",
                description: "Comprehensive cloud computing platform",
                pros: [
                    "Most comprehensive service offering",
                    "Excellent scalability and reliability",
                    "Strong enterprise features",
                    "Global infrastructure",
                    "Mature ecosystem"
                ],
                cons: [
                    "Steep learning curve",
                    "Complex pricing model",
                    "Can be overwhelming for beginners"
                ],
                scoring: {
                    complex: { free: 6, low: 7, moderate: 9, flexible: 10 },
                    api: { free: 5, low: 6, moderate: 8, flexible: 9 },
                    fullstack: { free: 4, low: 5, moderate: 7, flexible: 8 },
                    static: { free: 7, low: 6, moderate: 6, flexible: 6 }
                }
            },
            digitalocean: {
                name: "DigitalOcean",
                description: "Simple cloud computing platform",
                pros: [
                    "Simple and predictable pricing",
                    "Great developer experience",
                    "Excellent documentation",
                    "Good performance for the price",
                    "Less overwhelming than AWS"
                ],
                cons: [
                    "Fewer services than major clouds",
                    "Limited global presence",
                    "Less enterprise features"
                ],
                scoring: {
                    fullstack: { free: 3, low: 8, moderate: 9, flexible: 8 },
                    api: { free: 3, low: 8, moderate: 9, flexible: 8 },
                    complex: { free: 2, low: 6, moderate: 7, flexible: 7 },
                    static: { free: 4, low: 6, moderate: 6, flexible: 5 }
                }
            }
        }
    }
};

// Scoring weights for frontend (original)
const frontendWeights = {
    project: {
        personal: { learning: 0.4, speed: 0.2, performance: 0.2, jobs: 0.2 },
        startup: { learning: 0.1, speed: 0.5, performance: 0.2, jobs: 0.2 },
        enterprise: { learning: 0.1, speed: 0.2, performance: 0.3, jobs: 0.4 },
        portfolio: { learning: 0.3, speed: 0.4, performance: 0.1, jobs: 0.2 }
    },
    team: {
        solo: { learning: 0.4, speed: 0.3, performance: 0.2, jobs: 0.1 },
        small: { learning: 0.2, speed: 0.3, performance: 0.3, jobs: 0.2 },
        large: { learning: 0.1, speed: 0.2, performance: 0.3, jobs: 0.4 }
    }
};

// Scoring weights for backend
const backendWeights = {
    complexity: {
        simple: { prototype: 0.4, mvp: 0.3, production: 0.1, learning: 0.2 },
        moderate: { prototype: 0.2, mvp: 0.4, production: 0.3, learning: 0.1 },
        complex: { prototype: 0.1, mvp: 0.2, production: 0.6, learning: 0.1 }
    },
    experience: {
        beginner: { prototype: 0.2, mvp: 0.2, production: 0.1, learning: 0.5 },
        some: { prototype: 0.3, mvp: 0.4, production: 0.2, learning: 0.1 },
        experienced: { prototype: 0.2, mvp: 0.3, production: 0.5, learning: 0.0 }
    }
};

// Scoring weights for database
const databaseWeights = {
    scale: {
        small: { critical: 0.3, important: 0.4, flexible: 0.3 },
        medium: { critical: 0.4, important: 0.4, flexible: 0.2 },
        large: { critical: 0.5, important: 0.3, flexible: 0.2 },
        unknown: { critical: 0.3, important: 0.4, flexible: 0.3 }
    },
    sql_knowledge: {
        expert: { critical: 0.2, important: 0.3, flexible: 0.5 },
        basic: { critical: 0.3, important: 0.4, flexible: 0.3 },
        none: { critical: 0.5, important: 0.3, flexible: 0.2 }
    }
};

// Scoring weights for cloud
const cloudWeights = {
    experience: {
        beginner: { free: 0.5, low: 0.3, moderate: 0.1, flexible: 0.1 },
        some: { free: 0.3, low: 0.4, moderate: 0.2, flexible: 0.1 },
        experienced: { free: 0.1, low: 0.2, moderate: 0.3, flexible: 0.4 }
    },
    scaling: {
        no: { free: 0.4, low: 0.3, moderate: 0.2, flexible: 0.1 },
        some: { free: 0.2, low: 0.3, moderate: 0.3, flexible: 0.2 },
        advanced: { free: 0.1, low: 0.1, moderate: 0.3, flexible: 0.5 }
    }
};