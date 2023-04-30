import React, { useEffect, useState } from "react";

import axios from "axios";
const ProductSearch = () => {
   const [userList , setUserList] = useState([]);
   const [search, setSearch] = useState([]);
   useEffect(()=>{
      axios.get('https://fakestoreapi.com/products').then(
        (response)=>{
          setUserList(response.data);
          console.log(response.data);
        }
      )
   },[]);
    return(
      <>
        <div className="main">
          <h1>Products List</h1>
          <p>Products Categories are men's clothing , women's clothing , jewelery , electronics</p>
          <input  type="text" placeholder="Search Products Category or Products Name" onChange={(e) => setSearch(e.target.value)}/>
          
          <table className="list-group">
            <thead>
             <tr className="list-group-item">
              <th className="p-4">#</th>
              <th className="p-4">Products image</th>
              <th className="p-4">Products Name</th>
              <th className="p-4">Price</th>
              
             </tr>
            </thead>
            <tbody>
             {userList.filter((elem) => {
              if(search === " "){
                return elem
              }else if((elem.category.toLowerCase().includes(search))||(elem.title.toLowerCase().includes(search))){
                return elem.category
              }
            }).map((elem, idx)=>{
              return(
                <tr className="list-group-item" key={idx}>
                  <td className="p-3">{idx + 1}</td>
                  <td  className="p-3">
                    <img src={elem.image} alt="p"/>
                  </td>
                  <td  className="p-3">
                    <h4>{elem.title}</h4>
                  </td>
                  <td  className="p-3">
                    <h4>${elem.price}</h4>
                  </td>
                 
                </tr>
              )
             })}
             
            </tbody>
          </table>
        </div>
      
      </>
    )
}

export default ProductSearch