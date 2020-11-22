import React from 'react';
import Blog from '../Blog/Blog';
import Navbar from '../Components/Navbar/Navbar';

const BlogPage = () => {
    return (
        <div className="pages-bg">
            <Navbar/>
            <Blog/>
        </div>
    );
};

export default BlogPage;