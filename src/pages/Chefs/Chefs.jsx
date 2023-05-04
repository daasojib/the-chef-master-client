import React, { useEffect, useState } from 'react';

const Chefs = () => {

          const {categories,setCategories} = useState([]);

          useEffect(()=>{
                    fetch('http://localhost:5000/categories')
                    .then(res=>res.json())
                    .then(data=>console.log(data))
                    .catch(error=>console.log(error))
          },[])


          return (
                    <div>
                             <h2>This is chefs section</h2> 
                    </div>
          );
};

export default Chefs;