import React from 'react';

const Cart = ({cart,handelRemoveFromCart}) => {
    
    //conditional Rendering
    let message;
    if(cart.length === 0) {
        message = <p>Please Add Some Product</p>
    }
    else{
        message = <div>
            <h3>Boroloxx</h3>
            <p><small>Thanks for giving your money</small></p>
        </div>
    }



    return (
        <div>
            <h2>Order Summary: {cart.length}</h2>

            {/* 2. ternary: condition */}
            {cart.length > 2 ? <span>Aro kino</span> : <span>Fokira</span>}
            {message}

            {
                cart.map(tShirt => <p 
                    key={tShirt._id}>
                    {tShirt.name}
                    <button onClick={()=>handelRemoveFromCart(tShirt._id)}>X</button>
                </p>)
            }

        {/* logical &&  operator jodi 2ta product add hoy taholei p execute korbe */}
            {
                cart.length === 2 && <p>Double Bonus</p>
            }
        
        {/* jodi cart.length === 3 mitha hoy taholei h3 execute korbe  mane 3ta besi product add korle*/}

            {
                cart.length === 3 || <h3>Awww ta to hoilo na</h3>
            }

        </div>
    );
};

export default Cart;



/*
conditional rendering
1. use if else to set a variable that will contain an element , components 
2. ternary: condition ? 'for true' : 'false'
3. logical && (if the condition is true then the next thing will be displayed)
4. logical || (if the condition is false then the next thing will be displayed)
*/