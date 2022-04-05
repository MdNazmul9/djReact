import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Container } from "react-bootstrap";

class Home extends Component {
  render() {
    return (
      <Container>
        <h1>Home</h1>
        <p>
          <NavLink to="/login/">Login</NavLink>
        </p>
        <p>
          <NavLink to="/signup">Sign up</NavLink>
        </p>
        <p>
        <NavLink to="/dashboard">Dashboard</NavLink>
        </p>
      </Container>
    );
  }
}

export default Home;