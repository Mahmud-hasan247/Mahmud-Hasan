import React from 'react';
import { Link } from 'react-router-dom';
import Bounce from 'react-reveal/Bounce';

const Home = () => {
    return (
        <div>
            <div className=" pt-5 mt-5">
                {/* <div className="col-md-3"></div> */}
                <div className="">
                    <h1
                        style={{
                            fontSize: '50px'
                        }}
                        className='text-center'
                    >
                        Mahmud Hasan
                            </h1>
                    <p
                        style={{ fontSize: '50px' }}
                        className='text-center'
                    >
                        <Bounce
                            // right
                            cascade
                            duration={4000}
                            count={2}
                        >
                            Front end Developer
                        </Bounce>
                    </p>
                    <div className="d-flex justify-content-center  pt-5">
                        <Link to='/about'><a type="button" class="m-1 btn btn-outline-success">About me</a></Link>
                        <a type="button" href='https://drive.google.com/uc?id=1FZLE2br40j6BBj_QuRnItz0x2Uhfvp8L&export=download' className="m-1 btn btn-outline-success">Download Resume</a>
                    </div>
                </div>
                {/* <div className="col-md-3"></div> */}
            </div>

        </div>
    );
};

export default Home;