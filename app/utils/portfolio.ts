export const personalInfo = {
    name: "Luis Donaldo",
    lastName: "Ortiz García",
    handle: "SnakeGuitar",
    title: "hero.title",
    school: "Veracruz University",
    location: "Mexico",
    description: "hero.description",
    // image: "/images/profile.jpg",
    // TODO: Tomarse una foto profesional (buena iluminación, fondo neutro)
};

export const social = {
    github: "https://github.com/SnakeGuitar",
};

export const techStack = [
    { category: "stack.categories.backend", items: [".NET", "ASP.NET Core", "RabbitMQ (Message Brokers)", "Node.js", "Express", "RESTful APIs", "Ubuntu Server", "Microservices Concepts", "Clean Architecture"] },
    { category: "stack.categories.frontend", items: ["HTML/CSS/JavaScript", "TypeScript", "Kotlin", "Vue.js", "Nuxt.js", "SvelteKit", "Tailwind CSS", "JavaFX", "WPF", "Razor Pages"] },
    { category: "stack.categories.database", items: ["SQL Server", "PostgreSQL", "pgvector", "MongoDB", "Neo4j", "EF Core"] },
    { category: "stack.categories.infrastructure", items: ["Docker", "Kubernetes", "Azure", "AWS", "CI/CD pipelines", "Git", "AI Agent Orchestration"] },
    { category: "stack.categories.methodologies", items: ["Agile/Scrum", "ICONIX", "ISO 25010 (Software Quality)", "Unit Testing", "Security Best Practices", "TDD"] },
    { category: "stack.categories.tools", items: ["Visual Studio", "VS Code", "JetBrains IDEs", "NetBeans", "Postman", "Selenium", "SSMS"] },
    { category: "stack.categories.networking", items: ["WebSockets (SignalR/Socket.io)", "TCP Protocol"] },
    { category: "stack.categories.exploring", items: ["Spring Boot", "Flask", "FastAPI", "DJango", "Svelte", "PHP", "Laravel", "WordPress", "WebRTC", "gRPC"] },
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
        name: "projects.items.layla.name",
        description: "projects.items.layla.desc",
        layla1TechStack: ["ASP.NET Core", "SQL Server", "MongoDB", "Neo4j", "EF Core", "WPF", "Razor Pages", "Kotlin"],
        layla2TechStack: ["ASP.NET Core", "PostgreSQL + pgvector", "MongoDB", "Neo4j", "EF Core", "SvelteKit", "Tauri", "Capacitor", "Ionic"],
        link: "https://github.com/SnakeGuitar/Layla"
    },
    {
        name: "projects.items.memory_game.name",
        description: "projects.items.memory_game.desc",
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
        name: "projects.items.ppms.name",
        description: "projects.items.ppms.desc",
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
        name: "projects.items.pinterest.name",
        description: "projects.items.pinterest.desc",
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
        description: "art.medium.traditional",
        year: "2025",
        image: dianaImg
    },
    {
        name: "Layla",
        description: "art.medium.digital",
        year: "2025",
        image: laylaImg
    },
    {
        name: "Akari",
        description: "art.medium.digital",
        year: "2025",
        image: akariImg
    },
    {
        name: "Emily",
        description: "art.medium.digital",
        year: "2025",
        image: emilyImg
    },
    {
        name: "Lin",
        description: "art.medium.traditional",
        year: "2023",
        image: linImg
    },
    {
        name: "Joaquín",
        description: "art.medium.traditional",
        year: "2024",
        image: joaquinImg
    },
    {
        name: "Katya",
        description: "art.medium.traditional",
        year: "2025",
        image: katyaImg
    },
    {
        name: "Nun",
        description: "art.medium.traditional",
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