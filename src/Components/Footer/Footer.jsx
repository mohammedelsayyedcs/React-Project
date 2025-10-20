import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div>
                <footer className="py-3 my-4">
                    <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                        <li className="nav-item px-3">
                            <a href="#" className="nav-link px-2 text-body-secondary">
                                Home
                            </a>
                        </li>{" "}
                        <li className="nav-item px-3">
                            <a href="#" className="nav-link px-2 text-body-secondary">
                                About
                            </a>
                        </li>{" "}
                        <li className="nav-item px-3">
                            <a href="#" className="nav-link px-2 text-body-secondary">
                                Projects
                            </a>
                        </li>{" "}
                        <li className="nav-item px-3">
                            <a href="#" className="nav-link px-2 text-body-secondary">
                                Contact
                            </a>
                        </li>{" "}

                    </ul>{" "}
                    <p className="text-center text-body-secondary">© 2025 React Project, Inc</p>{" "}
                </footer>
            </div>
        );
    }
}
