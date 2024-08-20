import React, { useState } from 'react';

interface DropdownProps {
    title: string;
    children: React.ReactNode;
}

function Dropdown({ title, children }: DropdownProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <h1 onClick={() => setIsOpen(!isOpen)} style={{ cursor: 'pointer' }}>
                {title} {isOpen ? '▲' : '▼'}
            </h1>
            {isOpen && <div>{children}</div>}
        </div>
    );
}

export default function SideBar({ onSelectProject }: { onSelectProject: (project: string) => void }) {
    return (
        <>
            <Dropdown title="Solo Projects">
                {["Sorting Algorithms & Visualization", "Games Hub", "Mailer", "golang boilerplate script", "Redis Rate Limiter", "Component Library & Storybook", "Beautiful Soup Scraper", "Task App & Global State Management"].map((project) => (
                    <h2 key={project} onClick={() => onSelectProject(project)} style={{ cursor: 'pointer' }}>{project}</h2>
                ))}
            </Dropdown>

            <Dropdown title="Team Projects">
                {["DirectoryNY", "Letterboxd Clone", "Kitchen Gossip"].map((project) => (
                    <h2 key={project} onClick={() => onSelectProject(project)} style={{ cursor: 'pointer' }}>{project}</h2>
                ))}
            </Dropdown>

            <Dropdown title="Loom & Blog Posts">
                {["Loom Video 1", "Blog Post 1"].map((item) => (
                    <h2 key={item} onClick={() => onSelectProject(item)} style={{ cursor: 'pointer' }}>{item}</h2>
                ))}
            </Dropdown>
        </>
    );
}