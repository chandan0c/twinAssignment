import React from 'react'
import "./SideBar.css"
const SideBar = (props) => {
    console.log("Dasdsa1",props.options,typeof(props.options))
  return (
    <div className='sideBar'>
       <div>Filter By Category</div>
      <select className='category' onChange={(e)=>{
          props.handlleOptions(e.target.value)
      }}>
         {props.options.map(e=>{
            return <option value={`${e}`} >{e}</option>
         })}
          
      </select>
    </div>
  )
}

export default SideBar
