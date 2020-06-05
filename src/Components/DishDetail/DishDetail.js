import React, {Component} from 'react'
import {Card, CardImg, CardText, CardTitle} from 'reactstrap'

class Dishdetail extends Component{
  
  render(){ 
    const comment = this.props.dish.comments.map((item, index) => {
      return(
        <div key={index}>
          <p>--{item.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'long', day: '2-digit' }).format(new Date(item.date))}</p>
          <p>{item.comment}</p>
        </div>
      )
    })    
    return(  
      <div className='row'>
        <Card className='col-12 col-md-5 m-1'>
          <CardImg src={this.props.dish.image} alt={this.props.dish.name} width='100%'></CardImg>
          <CardTitle>{this.props.dish.name}</CardTitle>
          <CardText>{this.props.dish.description}</CardText>
        </Card>

        <Card className='col-12 col-md-5 m-1'>
          <h4>Comments</h4>
          {comment}
        </Card>
      </div>    
      
    )
  }
}

export default Dishdetail;