import React,{Component} from 'react'
import { Navbar, NavbarBrand, Jumbotron, Nav, NavbarToggler, Collapse, NavItem, Modal, ModalBody, ModalHeader, Button, FormGroup, Label, Form, Input} from 'reactstrap';
import {NavLink} from 'react-router-dom'

class Header extends Component{
  state = {
    isNavOpen : false,
    isModalOpen : false,
  }

  toggleNav = () => {
    let show = this.state.isNavOpen;
    this.setState({
      isNavOpen : !show,
    })
  }

  toggleModal = () => {
    let show = this.state.isModalOpen;
    this.setState({
      isModalOpen : !show,
    })
  }

  handelLogin = (event) => {
    this.toggleModal();
    alert(`username : ${this.username.value}`);
    event.preventDefault();
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
        <Nav className='ml-auto' navbar>
          <NavItem>
          <Button outline onClick={this.toggleModal}><span className='fa fa-sign-in fa-lg'> Login</span></Button>
          </NavItem>
        </Nav>
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
      <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
        <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
        <ModalBody>
          <Form onSubmit={this.handelLogin}>
            <FormGroup>
              <Label htmlFor='username'>Username</Label>
              <Input type='text' id='username' name='username' 
              innerRef = {(input) => this.username = input} />              
            </FormGroup>

            <FormGroup>
              <Label htmlFor='password'>Password</Label>
              <Input type='password' id='password' name='password'
              innerRef = {(input) => this.password = input} />              
            </FormGroup>

            <FormGroup check>
              <Label check>
                <Input type='checkbox' name='remember' innerRef = {(input) => this.remember = input} />
                Remember Me
              </Label>
            </FormGroup>
            <FormGroup>
              <Button type='submit' color='primary'>Login</Button>
            </FormGroup>
          </Form>
        </ModalBody>
      </Modal>
      </>
    )
  }
}

export default Header;