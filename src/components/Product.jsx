import React ,{ useState,useEffect}from "react";
import { Text,Image,Box,Stack,Heading, Tag,TagLabel , Button,Input } from '@chakra-ui/react'

const Product = () => {
  // TODO: Remove below const and instead import them from chakra
  // const Text = () => <div />;
  // const Image = () => <div />;
  // const Box = () => <div />;
  // const Stack = () => <div />;
  // const Heading = () => <div />;
  // const Tag = () => <div />;
  // const TagLabel = () => <div />;
  const [mapDdata, setMapData] = useState([])
  const axios = require('axios').default;
  async function getdata() {
    // console.log("YES")
    try {
      const response = await axios.get('http://localhost:8080/products');
      // console.log(response);
      let datamap = response.data
      // console.log(datamap)
      setMapData(datamap)
    } catch (error) {
      console.error(error);
    }
  }
  
  useEffect(()=>{
    getdata()
  },[])
  
  

  return (
    <>
    

     
      {mapDdata.map((el,index)=>(
        // {console.log(el.category)}
        
          <Stack data-cy="product" key='el.id'>
            <Image data-cy="product-image" src='el.imageSrc'/>
          <Text data-cy="product-category">{el.category}</Text>
            <Tag>
              <TagLabel data-cy="product-gender">{el.gender}</TagLabel>
            </Tag>
            <Heading data-cy="product-title">{el.title}</Heading>
            <Box data-cy="product-price">{el.price}</Box>
          </Stack>
        
      ))}
    
    
  </>
  );
};

export default Product;
