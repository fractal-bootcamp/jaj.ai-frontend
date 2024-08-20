import React, { useState } from 'react';
import SideBar from './SideBar';
import ProjectDisplay from './ProjectDisplay';

export default function HomePage() {
    const [selectedProject, setSelectedProject] = useState<string | null>(null);

    return (
        <div className="flex">
            <div className="w-1/3 p-4 border border-black">
                <SideBar onSelectProject={setSelectedProject} />
            </div>
            <div className="w-2/3 p-4 border border-black">
                <ProjectDisplay project={selectedProject} />
            </div>
        </div>
    );
}