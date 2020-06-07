import React, { Component } from 'react'
import Menu from './Components/Menu/Menu'
import { DISHES } from './Components/Shared/Dishes'
import { COMMENTS } from './Components/Shared/Comments'
import { LEADERS } from './Components/Shared/Leaders'
import { PROMOTIONS } from './Components/Shared/Promotions'
import AboutUs from './Components/AboutUs/AboutUs'
import DishDetail from './Components/DishDetail/DishDetail'
import Header from './Components/Header/Header'
import Home from './Components/Home/Home'
import Footer from './Components/Footer/Footer'
import Contact from './Components/ContactUs/ContactUs'
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
import './App.css'

class App extends Component {
  state = {
    dishes : DISHES,
    comments : COMMENTS,
    leaders : LEADERS,
    promotions : PROMOTIONS,
  }
  
  home = () => {
    return(
      <Home dish = {this.state.dishes.filter(dish => dish.featured)[0]}
            leader = {this.state.leaders.filter(leader => leader.featured)[0]}
            promotion = {this.state.promotions.filter(promo => promo.featured)[0]}
      />
    )
  }

  dishDetail = ({match}) => {
    console.log(match)
    return (
      <DishDetail dish = {this.state.dishes.filter(dish => dish.id === parseInt(match.params.dishId,10))[0]} 
      comments = {this.state.comments.filter(comment => comment.dishId === parseInt(match.params.dishId,10))}/>
    )
  }
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header/>
          <Switch>
            <Route path='/home' component={this.home} />
            <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes}/>} />
            <Route path='/menu/:dishId' component={this.dishDetail} />
            <Route exact path='/contact-us' component={Contact} />
            <Route exact path='/about' component={() => <AboutUs leaders = {this.state.leaders }/> } />
            <Redirect  to = '/home'/>
          </Switch>
          <Footer/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;