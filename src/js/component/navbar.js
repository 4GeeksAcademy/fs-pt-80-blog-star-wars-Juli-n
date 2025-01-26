// navbar.js
import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { SearchBar } from "./SearchBar.jsx";
import { Navbar, Container, Nav, Badge } from "react-bootstrap";

export const MyNavbar = () => {
    const { store } = useContext(Context);

    return (
        <Navbar bg="light" expand="lg" className="mb-4">
            <Container>
                <Link to="/" className="navbar-brand">
                    <img
                        width="80px"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/694px-Star_Wars_Logo.svg.png"
                        alt="Star Wars Logo"
                    />
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <SearchBar />
                    </Nav>
                    <Nav>
                        <Link to="/favorites" className="nav-link">
                            Favorites{" "}
                            <Badge bg="secondary">{store.favorites.length}</Badge>
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};
