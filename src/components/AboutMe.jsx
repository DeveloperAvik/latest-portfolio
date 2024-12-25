import profileImg from "../assets/images/image.jpg";

function AboutMe() {
    return (
        <div className="px-4 md:px-16 py-10">
            <h1 className="text-5xl font-bold text-center mb-10">About Me</h1>

            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                <div className="lg:w-1/2 text-lg text-gray-700 font-mono leading-relaxed">
                    <p>
                        Hello! I’m a passionate and dedicated Software Engineer with a specialization in Web Development. With a strong foundation in both front-end and back-end technologies, I bring a comprehensive understanding of modern web development practices. My expertise spans a wide range of tools and technologies, including HTML, CSS, Tailwind CSS, JavaScript, React, and Node.js.
                    </p>
                    <p className="mt-4">
                        Throughout my career, I’ve developed robust web applications using both MongoDB and MySQL databases, as well as cloud platforms like Firebase. I am also proficient in building RESTful APIs using Express.js and have hands-on experience with full-stack frameworks such as Django.
                    </p>
                    <p className="mt-4">
                        In addition to my web development skills, I am well-versed in programming languages like C, C++, and Python, with a strong focus on Data Structures and Algorithms to optimize code performance.
                    </p>
                    <p className="mt-4">
                        I am always eager to learn new technologies and enhance my skills to stay up to date with industry trends. My goal is to create efficient, scalable, and user-friendly applications while continuously improving as a developer.
                    </p>
                </div>

                <div className="lg:w-1/3 flex justify-center lg:justify-start">
                    <img
                        className="w-72 lg:w-96 border-4 border-emerald-700 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
                        src={profileImg}
                        alt="Profile"
                    />
                </div>

            </div>
        </div>
    );
}

export default AboutMe;
