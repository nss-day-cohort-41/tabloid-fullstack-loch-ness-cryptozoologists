import React, { useState, useContext } from 'react';
import { Link, NavLink as RRNavLink } from "react-router-dom";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, NavbarText} from 'reactstrap';
import { UserProfileContext } from "../providers/UserProfileProvider";

export default function Header() {
  const { isLoggedIn, logout } = useContext(UserProfileContext);
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (

      <Navbar color="dark" dark expand="md">
        <NavbarBrand tag={RRNavLink} to="/">Tabloid</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>

          <Nav className="mr-auto" navbar>
            {isLoggedIn &&
              <NavItem>
                <NavLink tag={RRNavLink} to="/post">Posts</NavLink>
              </NavItem>
            }

            {isLoggedIn &&
              <NavItem>
                <NavLink tag={RRNavLink} to="/tags">Tags</NavLink>
              </NavItem>
            }

            {isLoggedIn &&
              <>
                <NavItem>
                  <NavLink tag={RRNavLink} to="/categories">Categories</NavLink>
                </NavItem>

                <NavItem>
                  <NavLink tag={RRNavLink} onClick={logout} to="/login">Logout</NavLink>
                </NavItem>

              </>
            }

            {!isLoggedIn &&
              <NavbarText>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
              </NavbarText>
            }

          </Nav>
        </Collapse>
      </Navbar>


  );
}
