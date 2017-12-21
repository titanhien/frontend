import React, { Component } from 'react';

class Top extends Component {
    render() {
        return (
            <nav className="navbar navbar-primary navbar-transparent navbar-absolute">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navigation-example-2">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar" />
                            <span className="icon-bar" />
                            <span className="icon-bar" />
                        </button>
                        <a className="navbar-brand" href="/">PHATAM</a>
                    </div>
                    <div className="collapse navbar-collapse">
                        <ul className="nav navbar-nav navbar-right">
                            <li>
                                <a href="/">
                                    <i className="material-icons">dashboard</i> Home
                                </a>
                            </li>
                            <li className>
                                <a href="/register">
                                    <i className="material-icons">person_add</i> Register
                                </a>
                            </li>
                            <li className>
                                <a href="/login">
                                    <i className="material-icons">fingerprint</i> Login
                                </a>
                            </li>
                            <li className=" active ">
                                <a href="/lock">
                                    <i className="material-icons">lock_open</i> Lock
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Top;
