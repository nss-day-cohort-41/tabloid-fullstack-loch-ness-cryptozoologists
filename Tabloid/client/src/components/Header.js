import React, { useState, useContext } from 'react';
import { NavLink as RRNavLink } from "react-router-dom";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { UserProfileContext } from "../providers/UserProfileProvider";

export default function Header() {
  const { isLoggedIn, logout } = useContext(UserProfileContext);
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand tag={RRNavLink} to="/">Tabloid</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            { /* When isLoggedIn === true, we will render the Home link */}
            {isLoggedIn &&
              <NavItem>
                <NavLink tag={RRNavLink} to="/">Home</NavLink>
              </NavItem>
            }
          </Nav>
          <Nav className="mr-auto" navbar>
            {isLoggedIn &&
              <NavItem>
                <NavLink tag={RRNavLink} to="/post">Posts</NavLink>
              </NavItem>
            }
          </Nav>
          <Nav className="mr-auto" navbar>
            {isLoggedIn &&
              <NavItem>
                <NavLink tag={RRNavLink} to="/tags">Tags</NavLink>
              </NavItem>
            }
          </Nav>
          <Nav navbar>
            {isLoggedIn &&
              <>
                <NavItem>
                  <NavLink tag={RRNavLink} to="/categories">Categories</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={RRNavLink} to="/userprofile">Profiles</NavLink>
                </NavItem>

                {/* <NavItem>
                  <NavLink tag={RRNavLink} to="/categories/add">Add Category</NavLink>
                </NavItem> */}


                <NavItem>
                  <NavLink tag={RRNavLink} onClick={logout} to="/login">Logout</NavLink>
                </NavItem>
                

              </>
            }
            {!isLoggedIn &&
              <>

                <NavItem>
                  <NavLink tag={RRNavLink} to="/login">Login</NavLink>
                </NavItem>

                < NavItem >
                  <NavLink tag={RRNavLink} to="/register">Register</NavLink>
                </NavItem>


              </>
            }
          </Nav>
        </Collapse>
      </Navbar>
    </div >
  );
}
