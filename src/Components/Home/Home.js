import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <div className=" pt-5 mt-5">
                {/* <div className="col-md-3"></div> */}
                <div className="">
                    <h1 style={{ fontSize: '50px' }} className='text-center'>Mahmud Hasan</h1>
                    <p style={{ fontSize: '50px' }} className='text-center'>A full stack web developer</p>
                    <div className="d-flex justify-content-center  pt-5">
                        <Link to='/about'><a type="button" class="m-1 btn btn-outline-success">About me</a></Link>
                        <a type="button" href='https://drive.google.com/file/d/1YeUG_5DqI4gI35pnHE3P2V_XSZ1DDq0I/view?usp=sharing' target='_blank' class="m-1 btn btn-outline-success">Download Resume</a>
                    </div>
                </div>
                {/* <div className="col-md-3"></div> */}
            </div>

        </div>
    );
};

export default Home;