
import React from 'react'
import MediaCard from './card'
import Navbar from './Navbar'
import { useEffect , useState } from 'react'
import Axios from "axios";
import { flexbox } from '@mui/system';

function Homepage() {
    const [products, setproducts] = useState([]);

    const fetchdata = () => 
    {
         Axios({
            method: "GET",
            withCredentials: true,
            url: "http://localhost:5000/allproducts",
          })
            .then((res) => {
             
              setproducts(res.data);
            })
            .catch((error) => {
              console.log(error);
            });

    }

    useEffect(() => {
        fetchdata();
      }, []);


    return (
     <div>
         <Navbar /> 
        <div style= {{ display:'flex', flexDirection: 'row', flexWrap: 'wrap' }}>

        
         {
          products.map((product, index) => {
            return (
                <MediaCard name= {product.name} description={product.description} type={product.type} />
            );
          })}

         </div>
    </div>
      
    )
}

export default Homepage
