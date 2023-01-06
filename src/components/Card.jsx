import React from 'react'
import { Link } from 'react-router-dom'
import "./Card.css"
const Card = (props) => {

  return (
    <div className='cartContainer'>
      {props.data.map(e=>{
        return   <div className='card'  onClick={(event)=>{
           event.stopPropagation();
           props.handleSinglPage(e)
           }}>
            <Link to="/Details" style={{textDecoration:"none"}} >
             <div className='Subcard'>
             <img src={e.images.back} alt="In Few Product Api Images Are Not Present"/>
             {/*<h3 > BrandName :{e.brand}</h3>
             <h3>Product Name : <span>{e.name}</span></h3>
               <h3>Price :{e.mrp.mrp}</h3>*/}
              <h5>{e.brand}</h5>
              <h3>{e.description}</h3>
              <div className='mrp'>
              <h4>MRP: Rs {e.mrp.mrp}</h4>
              <h6>Size: {e.dimensions.width}cm</h6>
              </div>
             </div>
             </Link>
            
             
        </div>
      })}
    </div>
  )
}

export default Card
