import React from 'react'
import "./DetailsPage.css"
const DetailsPage = ({data}) => {
  return (
    <>
      <h1>Product Details Page</h1>
      <div className='singlePage'>
          <img src={data.images.back} alt="some product images are not present inside product Api"/>
             <div> <h5>{data.brand}</h5>
              <h3>{data.description}</h3>
              <h4>MRP: Rs {data.mrp.mrp}</h4>
              <h6>Size: {data.dimensions.width}cm</h6>
              <div>
                <button>1</button>
                <button className='cartBtn'>Add To Cart</button>
                <button>Save</button>
              </div>
          </div>
          
    </div>
    </>
    
  )
}

export default DetailsPage
