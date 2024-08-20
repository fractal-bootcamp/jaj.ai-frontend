import { useState } from 'react';

export default function ProjectDisplay({ project }: { project: string | null }) {
    return (
        <div>
            <h1>Project Display</h1>
            {project && <p>{project} - Placeholder content for {project}</p>}
        </div>
    );
}