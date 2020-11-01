import React from 'react';
import html from '../Images/html.png';
import css from '../Images/css.png';

const Blog = () => {
    return (
        <div className="container d-flex">
            <div class="card mb-3" style={{maxWidth: '540px'}}>
                <div class="row no-gutters">
                    <div class="col-md-4">
                        <img src={html} className="pt-3 card-img" alt="..." />
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">Getting Started with html</h5>
                            <p class="card-text">Coming soon...</p>
                            {/* <a class="card-text"><small class="text-muted"><button class="btn btn-default">Read More</button></small></a> */}
                        </div>
                    </div>
                </div>
            </div>
            <div class="card mb-3" style={{maxWidth: '540px'}}>
                <div class="row no-gutters">
                    <div class="col-md-4">
                        <img src={css} className="p-4 card-img" alt="..." />
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">Getting Started with css</h5>
                            <p class="card-text">Coming soon...</p>
                            {/* <a class="card-text"><small class="text-muted"><button class="btn btn-default">Read More</button></small></a> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;