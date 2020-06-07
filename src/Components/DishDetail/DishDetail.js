import React from 'react'
import {Card, CardImg, CardText, CardTitle, BreadcrumbItem, Breadcrumb} from 'reactstrap'
import {Link} from 'react-router-dom'

const Dishdetail = (props) =>{
  console.log(props)
    const comment = props.comments.map((item, index) => {
      return(
        <li key={index}>
          <p>--{item.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'long', day: '2-digit' }).format(new Date(item.date))}</p>
          <p>{item.comment}</p>
        </li>
      )
    })    
    return(  
      <div className='container'>
        <div className='row'>
          <Breadcrumb>
            <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
            <BreadcrumbItem active ><Link to='/{props.dish.name}'>{props.dish.name}</Link></BreadcrumbItem>
          </Breadcrumb>
          <div className='col-12'>
            <h3>{props.dish.name}</h3>
            <hr />
          </div>
        </div>
        <div className='row'>
          <Card className='col-12 col-md-5 m-1'>
            <CardImg src={props.dish.image} alt={props.dish.name} width='100%'></CardImg>
            <CardTitle>{props.dish.name}</CardTitle>
            <CardText>{props.dish.description}</CardText>
          </Card>

          <Card className='col-12 col-md-5 m-1'>
            <h4>Comments</h4>
              <ul className='list-unstyled'>
                {comment}
              </ul>
          </Card>
        </div>    
      </div>
    )
}

export default Dishdetail;