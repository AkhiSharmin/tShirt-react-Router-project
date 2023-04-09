import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import TShirt from '../TShirt/TShirt';
import Cart from '../Cart/Cart';
import './Home.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
    
    const tShirts = useLoaderData()

    const [cart, setCart] = useState([])
    const handelAddToCart = (tShirt) => {
        const exists = cart.find(ts => ts._id === tShirt._id);

        if(exists){
            toast('You have already added This T-Shirt')
        }
        else{
            const newCart = [...cart, tShirt]
            setCart(newCart);
        }

    }

    const handelRemoveFromCart = id => { 
        const reaming = cart.filter(ts => ts._id !== id);
        setCart(reaming)
    }



    return (
        <div className='home-container'>
            <div className='t-shirts-container'>
                {
                    tShirts.map(tShirt => <TShirt
                    key={tShirt._id}
                    tShirt={tShirt}
                    handelAddToCart={handelAddToCart}
                    ></TShirt>)
                }
            </div>
            <div className="cart-container">
                <Cart
                key={cart.id} 
                cart={cart}
                handelRemoveFromCart={handelRemoveFromCart}
                ></Cart>
            </div>
        </div>
    );
};

export default Home;