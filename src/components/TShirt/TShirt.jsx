import React from 'react';
import './TShirt.css'

const TShirt = ({tShirt, handelAddToCart}) => {
    const {_id, name, price, picture, gender} = tShirt;
    return (
        <div className='t-shirt'>
            <img src={picture} alt="" />
             <h4>{name}</h4>
            <p>Price: ${price}</p>
            <p>Gender: {gender}</p>
            <button onClick={() => handelAddToCart(tShirt)}>Buy Now</button>
        </div>
    );
};

export default TShirt;