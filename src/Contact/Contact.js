import React from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('1234567890', 'template_s0xnnpn', e.target, 'user_cvWtvUEiHYntwE4izcI3E')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        alert(`Thanks for texting me. I'll reply to you as soon as possible.`);
        e.target.reset();
    }

    return (
        <div className="container pt-5">
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                    <form onSubmit={sendEmail}>
                        <div class="form-group">
                            <label className='ml-1' for="exampleInputEmail1">Name</label>
                            <input type="text" name='name' class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div class="form-group">
                            <label className='ml-1' for="exampleInputPassword1">Email</label>
                            <input type="email" name='email' class="form-control" id="exampleInputPassword1" />
                        </div>
                        <div class="form-group">
                            <label className='ml-1' for="exampleInputPassword1">Subject</label>
                            <input type="text" name='subject' class="form-control" id="exampleInputPassword1" />
                        </div>
                        <div class="form-group">
                            <label className='ml-1' for="exampleInputPassword1">Message</label>
                            <input style={{height:'100px', paddingBottom: '60px'}}  name='message' className="form-control" id="exampleInputEmail1" />
                        </div>
                        <input type="submit" className="btn btn-primary" value="Send" />
                    </form>
                </div>
                <div className="col-md-3"></div>
            </div>
        </div>
    );
};

export default Contact;