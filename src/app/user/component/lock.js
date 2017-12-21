import React, { Component } from 'react';
import Top from '../../../common/user/top';
import Footer from '../../../common/user/footer';

class Lock extends Component {
    render() {
        return (
            <div>
                <Top />
                <div className="wrapper wrapper-full-page">
                    <div className="full-page lock-page" filter-color="black" data-image="/assets/img/lock.jpg">
                        {/*   you can change the color of the filter page using: data-color="blue | green | orange | red | purple" */}
                        <div className="content">
                            <form method="#" action="#">
                                <div className="card card-profile card-hidden">
                                    <div className="card-avatar">
                                        <a href="#pablo">
                                            <img className="avatar" src="/assets/img/faces/avatar.jpg" alt="..." />
                                        </a>
                                    </div>
                                    <div className="card-content">
                                        <h4 className="card-title">Tania Andrew</h4>
                                        <div className="form-group label-floating">
                                            <label className="control-label">Enter Password</label>
                                            <input type="password" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="card-footer">
                                        <button type="button" className="btn btn-rose btn-round">Unlock</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <Footer />
                    </div>
                </div>
            </div>
        );
    }
}

export default Lock;
