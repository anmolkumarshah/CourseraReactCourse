import React, {Component} from 'react'
import { Card, CardImgOverlay, CardImg, CardTitle } from 'reactstrap';
import Detail from '../DishDetail/DishDetail'

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
          <Card onClick={() => this.clickHandler(dish)}>
            <CardImg width='100%' src={dish.image} alt={dish.name}></CardImg>
            <CardImgOverlay>
              <CardTitle>{dish.name}</CardTitle>
            </CardImgOverlay>
          </Card>
        </div>
      )
    })
    return(
        <div className='container'>
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