import React,{Component} from 'react'
import { Navbar, NavbarBrand, Jumbotron, Nav, NavbarToggler, Collapse, NavItem} from 'reactstrap';
import {NavLink} from 'react-router-dom'

class Header extends Component{
  state = {
    isNavOpen : false,
  }

  toggleNav = () => {
    let show = this.state.isNavOpen;
    this.setState({
      isNavOpen : !show,
    })
  }
  render(){
    return(
      <>
      <Navbar dark color="dark" expand='md'>
        <div className="container">
        <NavbarToggler onClick={this.toggleNav}/>
          <NavbarBrand className='mr-auto' href="/">
            <img src='assets/images/logo.png' alt='Ristorante con Fusion' width='41' height='30' />
          </NavbarBrand>
          <Collapse isOpen = {this.state.isNavOpen} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink to='/home' className='nav-link'>
                  <span className='fa fa-home fa-lg'>Home</span>
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink to='/menu' className='nav-link'>
                  <span className='fa fa-list fa-lg'>Menu</span>
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink to='/about' className='nav-link'>
                  <span className='fa fa-info fa-lg'>About Us</span>
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink to='/contact-us' className='nav-link'>
                  <span className='fa fa-address-card fa-lg'>Contact Us</span>
                </NavLink>
              </NavItem>              
            </Nav>
          </Collapse>
        </div>
      </Navbar>
      <Jumbotron>
        <div className='container'>
          <div className='row'>
            <div className='col-12 col-sm-6'>
              <h1>Ristorante con Fusion</h1>
              <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
            </div>
          </div>
        </div>
      </Jumbotron>
      </>
    )
  }
}

export default Header;