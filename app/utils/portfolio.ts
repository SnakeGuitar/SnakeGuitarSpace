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

import memoryGame1 from '~/assets/project-images/memory-game/memory-game-board.png'
import memoryGame2 from '~/assets/project-images/memory-game/memory-game-card-collection.png'
import memoryGame3 from '~/assets/project-images/memory-game/memory-game-exception-handling.png'
import memoryGame4 from '~/assets/project-images/memory-game/memory-game-lobby-and-chat.png'
import memoryGame5 from '~/assets/project-images/memory-game/memory-game-main-menu.png'
import memoryGame6 from '~/assets/project-images/memory-game/memory-game-profile.png'
import memoryGame7 from '~/assets/project-images/memory-game/memory-game-responsiveness.png'

import pp1 from '~/assets/project-images/professional-practices/profesional-practices-document-handling.png'
import pp2 from '~/assets/project-images/professional-practices/professional-practices-form.png'
import pp3 from '~/assets/project-images/professional-practices/professional-practices-login.png'
import pp4 from '~/assets/project-images/professional-practices/professional-practices-professor-dashboard.png'
import pp5 from '~/assets/project-images/professional-practices/professional-practices-table1.png'
import pp6 from '~/assets/project-images/professional-practices/professional-practices-table2.png'

import pinterest1 from '~/assets/project-images/pinterest-scrapper/pinterest-scrapper.png'


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
        link: "https://github.com/SnakeGuitar/MemoryGame",
        images: [
            { src: memoryGame1, title: "Game Board" },
            { src: memoryGame2, title: "Card Collection" },
            { src: memoryGame3, title: "Exception Handling" },
            { src: memoryGame4, title: "Lobby & Chat" },
            { src: memoryGame5, title: "Main Menu" },
            { src: memoryGame6, title: "User Profile" },
            { src: memoryGame7, title: "Responsive Design" }
        ]
    },
    {
        name: "Professional Practices Management System",
        description: "An enterprise-level desktop application designed to streamline and manage university professional practices, focusing on robust data validation and intuitive user experience.",
        techStack: ["JavaFX", "CSS", "MySQL", "MVC Pattern"],
        link: "https://github.com/SnakeGuitar/ProfessionalPractices",
        images: [
            { src: pp1, title: "Document Handling" },
            { src: pp2, title: "Forms" },
            { src: pp3, title: "Login" },
            { src: pp4, title: "Professor Dashboard" },
            { src: pp5, title: "Data Table 1" },
            { src: pp6, title: "Data Table 2" }
        ]
    },
    {
        name: "Pinterest Board Downloader",
        description: "An automated web scraping tool built to efficiently extract and download image datasets from Pinterest, utilizing headless browser automation.",
        techStack: ["C#", "WPF", "Selenium"],
        link: "https://github.com/SnakeGuitar/PinterestBoardDownloader.git",
        images: [
            { src: pinterest1, title: "App Interface" }
        ]
    },
];

import dianaImg from '~/assets/drawings/diana.jpg'
import joaquinImg from '~/assets/drawings/joaquin.jpg'
import katyaImg from '~/assets/drawings/katya.jpg'
import laylaImg from '~/assets/drawings/Layla.png'
import linImg from '~/assets/drawings/lin.png'
import akariImg from '~/assets/drawings/akari.png'
import emilyImg from '~/assets/drawings/emily.png'
import nunImg from '~/assets/drawings/nun.jpg'

export const drawings = [
    {
        name: "Diana",
        description: "Traditional",
        year: "2025",
        image: dianaImg
    },
    {
        name: "Layla",
        description: "Digital",
        year: "2025",
        image: laylaImg
    },
    {
        name: "Akari",
        description: "Digital",
        year: "2025",
        image: akariImg
    },
    {
        name: "Emily",
        description: "Digital",
        year: "2025",
        image: emilyImg
    },
    {
        name: "Lin",
        description: "Traditional",
        year: "2023",
        image: linImg
    },
    {
        name: "Joaquín",
        description: "Traditional",
        year: "2024",
        image: joaquinImg
    },
    {
        name: "Katya",
        description: "Traditional",
        year: "2025",
        image: katyaImg
    },
    {
        name: "Nun",
        description: "Traditional",
        year: "2022",
        image: nunImg
    }
];

export const writings = [
    {
        name: "Bola de nieve",
        description: "An original narrative project focusing on the intersecting journeys of Diana and Menudo, exploring deep character development and world-building.",
        preview: "Read the first chapter and character lore..."
    },
];