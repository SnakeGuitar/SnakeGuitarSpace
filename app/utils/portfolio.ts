export const personalInfo = {
    name: "Luis Donaldo",
    lastName: "Ortiz García",
    handle: "SnakeGuitar",
    title: "Software Engineering Student & Backend Developer | System Architecture & Quality Assurance",
    school: "Veracruz University",
    location: "Mexico",
    description: "I am a software engineering student specializing in the .NET ecosystem, system architecture, and cloud infrastructure. I design and develop highly scalable applications, strictly adhering to software quality models (ISO 25010) to ensure maintainability, performance, and security. Experienced in agile methodologies, polyglot persistence, and secure development lifecycles.",
    // image: "/images/profile.jpg",
    // TODO: Tomarse una foto profesional (buena iluminación, fondo neutro)
};

export const social = {
    github: "https://github.com/SnakeGuitar",
};

export const techStack = [
    { category: "Backend & Distributed Systems", items: [".NET", "ASP.NET Core", "RabbitMQ (Message Brokers)", "Node.js", "Express", "RESTful APIs", "Ubuntu Server", "Microservices Concepts", "Clean Architecture"] },
    { category: "Frontend", items: ["HTML/CSS/JavaScript", "TypeScript", "Kotlin", "Vue.js", "SvelteKit", "Tailwind CSS", "JavaFX"] },
    { category: "Database & Storage", items: ["SQL Server", "PostgreSQL", "pgvector", "MongoDB", "Redis", "Neo4j", "EF Core"] },
    { category: "Infrastructure & DevOps", items: ["Docker", "Kubernetes", "Azure", "AWS", "CI/CD pipelines", "Git", "AI Agent Orchestration"] },
    { category: "Methodologies & Quality", items: ["Agile/Scrum", "ISO 25010 (Software Quality)", "Unit Testing", "Security Best Practices", "TDD"] },
    { category: "Dev Tools", items: ["Visual Studio", "VS Code", "JetBrains IDEs", "NetBeans", "Postman", "Selenium", "SSMS"] },
    { category: "Networking & Real-Time Communication", items: ["WebSockets (SignalR/Socket.io)", "TCP Protocol"] },
    { category: "Currently Exploring", items: ["Spring Boot", "Flask", "FastAPI", "DJango", "Svelte", "PHP", "Laravel", "WordPress", "WebRTC", "gRPC"] },
];

export const projects = [
    {
        name: "Layla",
        description: "A comprehensive social network platform dedicated to writers. Architected with polyglot persistence to handle complex relationships and high-performance querying, integrating advanced search capabilities and cross-platform accessibility.",
        layla1TechStack: ["ASP.NET Core", "SQL Server", "MongoDB", "Neo4j", "EF Core", "WPF", "Razor Pages", "Kotlin"],
        layla2TechStack: ["ASP.NET Core", "PostgreSQL + pgvector", "MongoDB", "Neo4j", "EF Core", "SvelteKit", "Tauri", "Capacitor", "Ionic"],
        link: "https://github.com/SnakeGuitar/Layla"
    },
    {
        name: "Memory Game",
        description: "A full-stack, distributed memory game featuring a real-time multiplayer architecture, global chat system, and concurrent state management.",
        techStack: [".NET Framework", "WPF", "WCF", "EF 4.7.2", "SQL Server"],
        link: "https://github.com/SnakeGuitar/Project1"
    },
    {
        name: "Professional Practices Management System",
        description: "An enterprise-level desktop application designed to streamline and manage university professional practices, focusing on robust data validation and intuitive user experience.",
        techStack: ["JavaFX", "CSS", "MySQL", "MVC Pattern"],
        link: "https://github.com/SnakeGuitar/ProfessionalPractices"
    },
    {
        name: "Pinterest Board Downloader",
        description: "An automated web scraping tool built to efficiently extract and download image datasets from Pinterest, utilizing headless browser automation.",
        techStack: ["C#", "WPF", "Selenium"],
        link: "https://github.com/SnakeGuitar/PinterestBoardDownloader.git"
    },
];

export const drawings = [
    {
        name: "Joaquín as a magical girl",
        description: "A creative character design exploring alternative tropes and expressive digital illustration.",
        image: "/images/joaquin-magical.jpg"
    },
];

export const writings = [
    {
        name: "Bola de nieve",
        description: "An original narrative project focusing on the intersecting journeys of Diana and Menudo, exploring deep character development and world-building.",
        preview: "Read the first chapter and character lore..."
    },
];