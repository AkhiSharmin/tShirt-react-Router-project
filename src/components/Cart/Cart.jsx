import React from 'react';

const Cart = ({cart,handelRemoveFromCart}) => {
    // console.log(cart);
    return (
        <div>
            <h2>Order Summary: {cart.length}</h2>
            {
                cart.map(tShirt => <p 
                    key={tShirt._id}>
                    {tShirt.name}
                    <button onClick={()=>handelRemoveFromCart(tShirt._id)}>X</button>
                </p>)
            }
        </div>
    );
};

export default Cart;