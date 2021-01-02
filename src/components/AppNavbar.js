import React, {Component} from 'react';
import {
    Collapse, // responsive hamburger menu
    NavbarToggler, // responsive hamburger menu
    Navbar, // actual navbar
    NavbarBrand, // brand
    Nav, // wrap links
    NavItem, // nav link
    NavLink, // has href value
    Container // moves everything to middle
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
        
    toggle = () => {
        // SET THIS STATE...
        this.setState({
            isOpen: !this.state.isOpen // ... TO WHATEVER IT'S NOT
        });
    }  
}

export default AppNavbar;