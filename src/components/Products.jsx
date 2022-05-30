import React from "react";

// import Product from "./Product";
import Product from "./Product"
import Pagination from './Pagination'

import { Flex,Grid,} from '@chakra-ui/react'
// import { useEffect } from "react";
const Products = () => {
  // TODO: Remove below const and instead import them from chakra
  // const Flex = () => <div />;
  // const Grid = () => <div />;
  // const [data, setData] =useState([])
 
  

  return (
   
    
      
    

    
      
     <Flex >
      
        
         
        <Grid><Product /></Grid> 
        <Pagination />
      </Flex>
    
  );
};

export default Products;
