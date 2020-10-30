import React from 'react';

const Contact = () => {
    return (
        <div className="container pt-5">
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                    <form >
                        <div class="form-group">
                            <label for="exampleInputEmail1">Your Name</label>
                            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Your Email</label>
                            <input type="email" class="form-control" id="exampleInputPassword1" />
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Massage</label>
                            <input type="text" className="form-control" id="exampleInputEmail1"/>
                        </div>
                        <input type="submit" className="btn btn-primary"value="Send"/>
                    </form>
                </div>
                <div className="col-md-3"></div>
            </div>
        </div>
    );
};

export default Contact;