import React from "react";
import { Link } from "react-router-dom";

import logo from "./logo.png";
import './Nav.css';

const Nav = () =>{
    return(
      <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <div className="container">
                <Link to="/" className="navbar-brand" >
                    <img src={logo} alt="Logo"/>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="/About" className="nav-link active text-light" aria-current="page">Новини</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Blog" className="nav-link text-light">Каталог</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Services" className="nav-link text-light" href="/blog">Контакти</Link>
                        </li>
                    </ul>
                    <div className="d-flex">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link text-light" aria-current="page" href="/contact">+380 (63) 632 44 98</a>
                            </li>
                            <li className="nav-item">
                                <button type="button" class="btn btn-outline-light order-btn">Замовити</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
       
      </div>
    )
}

export default Nav;