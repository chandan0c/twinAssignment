import React from 'react'

import SideBar from './SideBar'
import Card from './Card'
import "./Home.css"
const Home = (props) => {
  return (
    <div>
        <h1 className='heading'>TwinLeaves Ecommerce Website</h1>
        <div style={{display:"flex",flexWrap:"wrap",margin:"20px"}}>
        <div style={{width:"70%",display:"flex"}}>
        <input className='search' placeholder='Search For Product' type="test" onChange={(e)=>{
             props.setSearch(e.target.value.toLowerCase())
        }}></input>
        <button  className='searchBtn' onClick={()=>{
          props.handleSearchBar()
        }}>Search</button>
      </div>
      <div className='price'>
        <span>Filter By Price</span>
        <select onChange={(e)=>{
          props.hadlePriceFilter(e.target.value)
        }}>
          <option value="HTL">high to low</option>
          <option value="LTH">Low to high</option>
        </select>
      </div>
     
      </div>
      <div className='Content'>
      <div className='leftHeader' >
          <SideBar options={props.options} handlleOptions={props.handlleOptions}></SideBar>
      </div>
      <div className='CardData'>
        {props.filterData.length>0?
      <Card data={props.filterData} handleSinglPage={props.handleSinglPage}></Card>:<div className='info'> No data Found Try to Search Other Category</div>}
      </div>
      </div>
    </div>
  )
}

export default Home
