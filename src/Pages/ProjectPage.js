import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Projects from '../Components/Projects/Projects';

const ProjectPage = () => {
    return (
        <>
            <div className="container">
                <Navbar />

            </div>
            <div>
                <Projects />
            </div>
        </>
    );
};

export default ProjectPage;