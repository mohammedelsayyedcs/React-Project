import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary px-5" data-bs-theme="dark">
          <div className="container-fluid">
            <a className="navbar-brand text-danger fs-4 fw-bold" href="#">React Project</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item px-3">
                  <a className="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item px-3">
                  <a className="nav-link" aria-current="page" href="#">About</a>
                </li>
                <li className="nav-item px-3">
                  <a className="nav-link" aria-current="page" href="#">Projects</a>
                </li>
                <li className="nav-item px-3">
                  <a className="nav-link" aria-current="page" href="#">Contact</a>
                </li>
                <li className="nav-item px-3">
                  <a className="nav-link" aria-current="page" href="#">Home</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}
