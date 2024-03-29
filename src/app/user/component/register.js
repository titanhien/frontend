import React, { Component } from 'react';
import Top from '../../../common/user/top';
import Footer from '../../../common/user/footer';

class Register extends Component {
    render() {
        return (
            <div>
                <Top />
                <div className="wrapper wrapper-full-page">
                    <div className="full-page register-page" filter-color="black" data-image="/assets/img/register.jpg">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-10 col-md-offset-1">
                                    <div className="card card-signup">
                                        <h2 className="card-title text-center">Register</h2>
                                        <div className="row">
                                            <div className="col-md-5 col-md-offset-1">
                                                <div className="card-content">
                                                    <div className="info info-horizontal">
                                                        <div className="icon icon-rose">
                                                            <i className="material-icons">timeline</i>
                                                        </div>
                                                        <div className="description">
                                                            <h4 className="info-title">Marketing</h4>
                                                            <p className="description">
                                                                We've created the marketing campaign of the website. It was a very interesting collaboration.
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="info info-horizontal">
                                                        <div className="icon icon-primary">
                                                            <i className="material-icons">code</i>
                                                        </div>
                                                        <div className="description">
                                                            <h4 className="info-title">Fully Coded in HTML5</h4>
                                                            <p className="description">
                                                                We've developed the website with HTML5 and CSS3. The client has access to the code using GitHub.
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="info info-horizontal">
                                                        <div className="icon icon-info">
                                                            <i className="material-icons">group</i>
                                                        </div>
                                                        <div className="description">
                                                            <h4 className="info-title">Built Audience</h4>
                                                            <p className="description">
                                                                There is also a Fully Customizable CMS Admin Dashboard for this product.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-5">
                                                <div className="social text-center">
                                                    <button className="btn btn-just-icon btn-round btn-twitter">
                                                        <i className="fa fa-twitter" />
                                                    </button>
                                                    <button className="btn btn-just-icon btn-round btn-dribbble">
                                                        <i className="fa fa-dribbble" />
                                                    </button>
                                                    <button className="btn btn-just-icon btn-round btn-facebook">
                                                        <i className="fa fa-facebook"> </i>
                                                    </button>
                                                    <h4> or be classical </h4>
                                                </div>
                                                <form className="form" method action="#">
                                                    <div className="card-content">
                                                        <div className="input-group">
                                                          <span className="input-group-addon">
                                                            <i className="material-icons">face</i>
                                                          </span>
                                                            <input type="text" className="form-control" placeholder="First Name..." />
                                                        </div>
                                                        <div className="input-group">
                                                          <span className="input-group-addon">
                                                            <i className="material-icons">email</i>
                                                          </span>
                                                            <input type="text" className="form-control" placeholder="Email..." />
                                                        </div>
                                                        <div className="input-group">
                                                          <span className="input-group-addon">
                                                            <i className="material-icons">lock_outline</i>
                                                          </span>
                                                            <input type="password" placeholder="Password..." className="form-control" />
                                                        </div>
                                                        {/* If you want to add a checkbox to this form, uncomment this code */}
                                                        <div className="checkbox">
                                                            <label>
                                                                <input type="checkbox" name="optionsCheckboxes" defaultChecked /> I agree to the
                                                                <a href="#something">terms and conditions</a>.
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className="footer text-center">
                                                        <a href="#pablo" className="btn btn-primary btn-round">Get Started</a>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Footer />
                    </div>
                </div>
            </div>
        );
    }
}

export default Register;
