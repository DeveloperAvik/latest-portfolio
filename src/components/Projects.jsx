import { useState, useEffect } from "react";
import ProjectsCard from "./Projectscard";

function Projects() {
    const [projects, setProjects] = useState([]);

    // Fetch data once when the component mounts
    useEffect(() => {
        fetch('projects.json')
            .then(res => res.json())
            .then(data => setProjects(data))
            .catch(error => console.error("Error fetching data:", error));
    }, []); // Empty dependency array ensures the effect only runs once

    return (
        <div>
            <div className="mt-10">
                <h1 className="text-3xl font-mono text-center font-bold">My Projects</h1>
                <h3 className="text-2xl text-center">
                    The secret to getting ahead is getting started.
                </h3>
            </div>

            {/* Loop through the projects and display them */}
            <div className="flex grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-3 mt-10">
                {projects.map((project, index) => (
                    <ProjectsCard project={project} key={project.index}></ProjectsCard>
                ))}
            </div>
        </div>
    );
}

export default Projects;
