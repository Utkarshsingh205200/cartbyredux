import React, { useEffect} from 'react'
import { useDispatch , useSelector} from 'react-redux/es/exports';
import { add } from '../Store/cartslice';
import { fetchProducts } from '../Store/productSlice';


const Home = () => {

  const dispatch = useDispatch();
  const {data: products, status} = useSelector((state)=> state.product); 

  useEffect(()=>{
    dispatch(fetchProducts());
    // const fetchProducts = async() =>{
      
    //   setData(products);
    // };
    // fetchProducts();  
  },[])
  
 const addHandler = (product) =>{
     dispatch(add(product));
 }

  return (
    <div className='container '>
      <h1 className=" container text-center py-4 my-3 bg-success'"> Home </h1>
      <div className='products container-fluid row' >
          {
           products.map((product) => {
            return(
            <div className='col-lg-3 col-sm-12 col-md-6 Card' key={product.id}>
              <img src={product.image} alt='Hello'/>
              <p>{product.title}</p>
              <p>{product.price}</p>
              <button type='btn' onClick={() => addHandler(product)}>Add to cart</button>
            </div>
            )
           }) 
          }    
      </div>  
    </div>
  )
}

export default Home