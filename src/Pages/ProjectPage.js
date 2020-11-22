import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Projects from '../Components/Projects/Projects';

const ProjectPage = () => {
    return (
        <>
           <div className="pages-bg">
           <div className="container">
                <Navbar />

            </div>
            <div>
                <Projects />
            </div>
           </div>
        </>
    );
};

export default ProjectPage;