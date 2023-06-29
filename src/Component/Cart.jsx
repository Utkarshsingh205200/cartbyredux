import React from "react";
import "../App.css";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { remove } from "../Store/cartslice";

const Cart = () => {
  const data = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const removeHandler = ((product) =>{
      dispatch(remove(product.id));
  })



  // console.log(products);
  return (
    <div className="container">
      <h1 className="text-center m-5"> Cart </h1>
      <div className="row">
        {
           data.map((product) => {
            return(
            <div className='col-lg-3 col-sm-12 col-md-6 Card' key={product.id}>
              <img src={product.image} alt='Hello'/>
              <p>{product.title}</p>
              <p>{product.price}</p>
              <button type='btn' onClick={() => removeHandler(product)} >Remove</button>
            </div>
            )
           }) 
        }
      </div>
    </div>
  );
};

export default Cart;
