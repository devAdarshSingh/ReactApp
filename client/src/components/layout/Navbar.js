import React from 'react';
import * as ReactBootStrap from 'react-bootstrap';
import MenuItems from '../dataset/MenuItems';
// import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <div className="navbar-bg">
                <ReactBootStrap.Navbar collapseOnSelect expand="md" bg="transparent" variant="dark" className="navbar">
                    <ReactBootStrap.Navbar.Brand href="/"><img alt="logo" className="company-logo" src="/assets/avatu 1.png" /></ReactBootStrap.Navbar.Brand>
                    <ReactBootStrap.Navbar.Toggle className="hamburger" aria-controls="responsive-navbar-nav" />
                    <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
                        <ReactBootStrap.Nav className="ml-auto">
                            {MenuItems.map((item, index) => {
                                return (
                                    <ReactBootStrap.Nav.Link className="menuItem" href={item.url}>{item.title}</ReactBootStrap.Nav.Link>
                                )
                            })}
                        </ReactBootStrap.Nav>
                    </ReactBootStrap.Navbar.Collapse>
                </ReactBootStrap.Navbar>
            </div>
        </>
    )
}
export default Navbar