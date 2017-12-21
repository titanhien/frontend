import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="container">
                    <nav className="pull-left">
                        <ul>
                            <li>
                                <a href="#">
                                    Book
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Book Mp3
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Music
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Chua Viet
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <p className="copyright pull-right">
                        ©
                        <a href="/"> Copyright 2013 - 2017 PHATAM.ORG </a>, Chịu trách nhiệm nội dung: Thị Đức bienman0811@yahoo.com
                    </p>
                </div>
            </footer>
        );
    }
}

export default Footer;
