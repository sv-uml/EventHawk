import * as React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavItem, MenuItem, NavDropdown } from "react-bootstrap";
import { Login } from "../authentication/Login";
import { DropSidebar } from "./DropSidebar"

export class Header extends React.Component {

    constructor(props: any) {
        super(props);
    }

    render() {
        return <nav className="header">
            <DropSidebar />
            <Link to="/" className="navbar-brand header-logo">EventHawk</Link>
            <div className="options-container">
                <div className="links">
                    <input type="text" className="header-input search" placeholder="Search for events" />
                    <input type="submit" className="header-search-submit" value="" />
                    <div className="dropdown">
                        <Link to="" data-toggle="dropdown" className="option" id="auth-login-dropdown">Sign In</Link>
                        <div className="dropdown-menu" aria-labelledby="auth-login-dropdown">
                            <div className="dropdown-caret right">
                                <span className="caret-outer"></span>
                                <span className="caret-inner"></span>
                            </div>
                            <Login />
                        </div>
                    </div>
                    <Link to="register" className="option">Sign Up</Link>
                </div>
            </div>
        </nav>
    }
}