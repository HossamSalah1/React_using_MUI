import React, { Component } from "react";
//import Link from '../Link/Link'
import Mario from "../../assets/mario.png";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
//import Button from 'react-bootstrap/Button';
import { FaFacebook } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

//Parent

export default class Header extends Component {
  constructor() {
    super();
    //for initializing variables
    this.state = {
      name: "Shrouk",
      jobTitle: "fullstack web developer",
    };
    //   console.log("Constructor called");
  }
  //  componentDidMount(){
  //     console.log("component Did Mount");
  //     //this.state.name="Ahmed"
  //    // this.setState({name:"Ahmed"})
  //     // for example = calling api
  //  }

  //  componentDidUpdate()
  //  {
  //     console.log("component Did Update");
  //  }

  //  changeName=()=>{
  //     this.setState({name:(this.state.name=="Shrouk")? 'Ahmed':"Shrouk"})
  //  }

  // componentWillUnmount(){

  // }

  render() {
    // console.log("Render ");
    //
    return (
      <>
        {/* <Button variant="primary">Primary</Button>{' '} */}
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                {/* <Link to="/">Home</Link>
          <Link to="/about"> About Us </Link>
          <Link to="/contact"> Contact Us </Link>
          <Link to="/products"> Products </Link> */}

                <NavLink
                  to="/"
                  className={({ isActive, isPending }) =>
                    isActive ? "text-danger mx-4" : "mx-4"
                  }
                >
                  Home
                </NavLink>
                <NavLink
                  to="/about"
                  className={({ isActive, isPending }) =>
                    isActive ? "text-danger mx-4" : "mx-4"
                  }
                >
                  About Us
                </NavLink>
                <NavLink
                  to="/contact"
                  className={({ isActive, isPending }) =>
                    isActive ? "text-danger mx-4" : "mx-4"
                  }
                >
                  Contact Us
                </NavLink>
                <NavLink
                  to="/products"
                  className={({ isActive, isPending }) =>
                    isActive ? "text-danger mx-4" : "mx-4"
                  }
                >
                  Products
                </NavLink>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

{/* 
      <Link name="home" Url="google.com"/>
      <Link name="Contact Us" Url="facebook.com"/>
      <Link name="About Us" Url="linkedin.com"/>
      <Link name="Login" Url="facebook.com"/> */}
      <br/>

        {/* <img style={{width:'500px', height:'500px'}} src="/mario.png"></img> */}

        {/* <img src={Mario} style={{width:'500px', height:'500px'}}/> */}

        {/*
              <div className="nav">Hello from {this.state.name} , jobTitle is {this.state.jobTitle}</div>
        <button onClick={()=>{this.changeName()}}>Change name</button> */}
        {/* <a href="#"> Home </a>
        <a href="#"> Contact Us </a>
        <a href="#"> About Us </a>
        <a href="#"> Login </a> */}
      </>
    );
  }
}
