import React, {Component} from 'react';
import {
    Collapse, // responsive hamburger menu
    NavbarToggler, // responsive hamburger menu
    Navbar, // actual navbar
    NavbarBrand, // brand
    Nav, // wrap links
    NavItem, // nav link
    NavLink, // has href value
    Container, // moves everything to middle
    Col
} from 'reactstrap';


class AppNavbar extends Component{
    // constructor (props){
    //     super(props);
    //     // this.toggle = this.toggle.bind(this); // CAN WORKAROUND BY USING ARROW FUNCTION FOR CUSTOM FUNCTION
    //     this.state = {
    //         isOpen: false
    //     }
    // }
    
    // CAN SET STATE WITH OR WITHOUT CONSTRUCTOR
    state = {
            isOpen: false
        }
    
    // TOGGLING NAVBAR
    toggle = () => {
        // SET THIS STATE...
        this.setState({
            isOpen: !this.state.isOpen // ... TO WHATEVER IT'S NOT
        });
    }
    
    // RENDER FUNCTION WITH REACTSTRAP
    render(){
        return (
        <div>
            <Navbar color="dark" dark expand="sm" className="mb-5">
                <Container>
                    <NavbarBrand href="/">Shopping List</NavbarBrand>
                    <NavbarToggler onClick={this.toggle}/>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="https://github.com/nabilkoneylaryea">
                                    Github
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
        </div>
        );
    }
    
}

export default AppNavbar;