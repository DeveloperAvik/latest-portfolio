

function ProjectsCard({ project }) {

    const { name, description, languages_and_tools, category, source_code, live_link } = project;

    return (
        <div className="border rounded-lg p-5 shadow-lg hover:shadow-xl transition-shadow duration-300 gap-4">
            <h2 className="text-2xl font-semibold mb-2">{name}</h2>
            <p className="text-gray-600 mb-4">{description}</p>

            <div className="mb-4">
                <strong>Languages & Tools:</strong>
                <p className="text-gray-500">{languages_and_tools.join(", ")}</p>
            </div>

            <div className="mb-4">
                <strong>Category:</strong>
                <p className="text-gray-500">{category}</p>
            </div>

            <div className="flex justify-between mt-4">
                <a href={source_code} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                    Source Code
                </a>
                <a href={live_link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                    Live Demo
                </a>
            </div>
        </div>
    );
}

export default ProjectsCard;
