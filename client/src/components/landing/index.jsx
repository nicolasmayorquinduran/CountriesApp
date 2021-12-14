import React from 'react';
import {Link} from "react-router-dom"

const Index = () => {
    return (
        <div>
           <Link to="/home"><button>Explore!!</button></Link>
        </div>
    );
};

export default Index;