import React, {Component} from 'react'
import { Card, CardImgOverlay, CardImg, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import Detail from '../DishDetail/DishDetail'
import {Link} from 'react-router-dom'

class Menu extends Component{
  state = {
    selectedDish : null,
  }
  clickHandler = (dish) => {
    this.setState({
      selectedDish : dish,
    })
  }
  render(){
    let dish = '';
    if(this.state.selectedDish != null){
      dish = <Detail dish={this.state.selectedDish} />;
    }
    const menu = this.props.dishes.map(dish => {
      return(
        <div className='col-12 col-md-5 m-1' key='dish.id'>
          <Card>
            <Link to = {`menu/${dish.id}`}>
                <CardImg width='100%' src={dish.image} alt={dish.name}></CardImg>
                <CardImgOverlay>
                  <CardTitle>{dish.name}</CardTitle>
                </CardImgOverlay>
            </Link>
          </Card>
        </div>
      )
    })
    return(
      <div className='container'>
        <div className='row'>
          <Breadcrumb>
            <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
            <BreadcrumbItem active ><Link to='/menu'>Menu</Link></BreadcrumbItem>
          </Breadcrumb>
          <div className='col-12'>
            <h3>Menu</h3>
            <hr />
          </div>
        </div>
        <div className='row'>
            {menu}
        </div>
        <div className="mt-2">
            {dish} 
        </div>
      </div>
    )
  }
}

export default Menu;