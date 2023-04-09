import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Brother = () => {

    const gold = useContext(RingContext);

    return (
        <div>
            <h2>Brother</h2>
            <small>Take it: {gold}</small>
        </div>
    );
};

export default Brother;