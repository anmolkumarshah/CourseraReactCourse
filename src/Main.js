import React, { Component } from 'react'
import Menu from './Components/Menu/Menu'

import AboutUs from './Components/AboutUs/AboutUs'
import DishDetail from './Components/DishDetail/DishDetail'
import Header from './Components/Header/Header'
import Home from './Components/Home/Home'
import Footer from './Components/Footer/Footer'
import Contact from './Components/ContactUs/ContactUs'
import {BrowserRouter, Route, Switch, Redirect, withRouter} from 'react-router-dom'
import './App.css'

import {connect} from 'react-redux'

import {Provider} from 'react-redux';
import {ConfigureStore} from './redux/configureStore'

const store = ConfigureStore();

const mapStateToProps = (state) => {
  return{
    dishes : state.dishes,
    comments : state.comment,
    promotions : state.promotions,
    leaders : state.leaders,
  }
}

class App extends Component {
 
  home = () => {
    return(
      <Home dish = {this.props.dishes.filter(dish => dish.featured)[0]}
            leader = {this.props.leaders.filter(leader => leader.featured)[0]}
            promotion = {this.props.promotions.filter(promo => promo.featured)[0]}
      />
    )
  }

  dishDetail = ({match}) => {
    console.log(match)
    return (
      <DishDetail dish = {this.props.dishes.filter(dish => dish.id === parseInt(match.params.dishId,10))[0]} 
      comments = {this.props.comments.filter(comment => comment.dishId === parseInt(match.params.dishId,10))}/>
    )
  }
  render() {
    return (
      <Provider store={store}>
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
      </Provider>
    );
  }
}

export default withRouter(connect(mapStateToProps)(App));