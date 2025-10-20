import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div>
                <footer class="py-3 my-4">
                    <ul class="nav justify-content-center border-bottom pb-3 mb-3">
                        <li class="nav-item px-3">
                            <a href="#" class="nav-link px-2 text-body-secondary">
                                Home
                            </a>
                        </li>{" "}
                        <li class="nav-item px-3">
                            <a href="#" class="nav-link px-2 text-body-secondary">
                                About
                            </a>
                        </li>{" "}
                        <li class="nav-item px-3">
                            <a href="#" class="nav-link px-2 text-body-secondary">
                                Projects
                            </a>
                        </li>{" "}
                        <li class="nav-item px-3">
                            <a href="#" class="nav-link px-2 text-body-secondary">
                                Contact
                            </a>
                        </li>{" "}

                    </ul>{" "}
                    <p class="text-center text-body-secondary">© 2025 React Project, Inc</p>{" "}
                </footer>
            </div>
        );
    }
}
