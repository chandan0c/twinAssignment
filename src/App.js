
import './App.css';

import { useEffect, useState } from 'react';

import DetailsPage from './components/DetailsPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';


function App() {
  const [data,setData]=useState([]);
  const [filterData,setFilterData]=useState([])
  const [option,setOption]=useState([]);
  const [refresh,setRefresh]=useState(false)
  const [pageDeatails,SetPageDetails]=useState({})
  const [search,setSearch]=useState("")

    useEffect(()=>{
        fetch("https://originhighway-staging-kxyaws5ixa-uc.a.run.app/proxy/catalog/products")
        .then((res)=>{
            return res.json()
        }).then((res)=>{
            console.log("chandan",res.data)
            if(res.data && res.data.products.length>0){
              console.log("jdjjewfwefwe",res.data)
            let options= []
            for(let e of res.data.products){
              if(!options.includes(e.main_category)){
                options.push(e.main_category)
              }
            }
            setData(res.data.products)
            setFilterData(res.data.products)
            setOption(options)
          }
        })
    },[])

    const handleSinglPage=(data)=>{
      console.log("Dsadasd")
      SetPageDetails(data)
    
    }

    const handlleOptions=(value)=>{
      if(value){
      let filterData=[]
         filterData=data.filter(e=>{
          if(e.main_category===value){
            return true
          }
          return false
         })
      setFilterData(filterData)
    }
    }

    const hadlePriceFilter=(value)=>{

      let finalData=[]
       if(value==="LTH"){
       finalData=filterData.sort((a,b)=>{
          console.log(a.mrp.mrp,b.mrp.mrp)
           return a.mrp.mrp - b.mrp.mrp
        })
       
       }
       else if(value==="HTL"){
        finalData= filterData.sort((a,b)=>{
         return b.mrp.mrp-a.mrp.mrp
        })
     
       }
       
       setFilterData(finalData)
       setRefresh(!refresh)
    }
    const handleSearchBar=()=>{
         let result=[];
         let tempdata=data
         if(search){
         for(let e of tempdata){
          console.log("hgcvghvhg",e.name)
          let temp=e.name.toLowerCase()
          if(temp.includes(search)){
            result.push(e)
          }
         }
         setFilterData(result)
        }
         else{
          setFilterData(data)
         }

         
        
    }
    console.log("radnsjd",pageDeatails,data)

  return (
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home hadlePriceFilter={hadlePriceFilter} handleSearchBar={handleSearchBar} handlleOptions={handlleOptions} handleSinglPage={handleSinglPage} filterData={filterData} options={option} setSearch={setSearch} ></Home>} >
     
        </Route>

        <Route exact path="/Details" element={<DetailsPage data={pageDeatails}></DetailsPage>}></Route>
          {/* <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}

      </Routes>
    </BrowserRouter>
    



      // <DetailsPage data={pageDeatails}></DetailsPage>
        
   
  );
}

export default App;
