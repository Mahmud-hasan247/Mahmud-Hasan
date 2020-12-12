import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Project2 from '../Components/Projects/Project2';
import Projects from '../Components/Projects/Projects';

const ProjectPage = () => {
    return (
        <>
           <div className="pages-bg">
           <div className="container">
                <Navbar />

            </div>
            <div>
                {/* <Projects /> */}
                <Project2></Project2>
            </div>
           </div>
        </>
    );
};

export default ProjectPage;