import React from 'react';
import {Link} from "react-router-dom"
import { useNavigate } from "react-router-dom";


const Index = () => {

    const toHome = useNavigate();

    const HandleHome = () => {
        toHome("/home")
    }

    return (
        <div>

            <ul></ul>
            <li><button onClick={HandleHome}>Home</button></li>
            <Link to = "/create"><li>Add Activity</li></Link>
            
        </div>
    );
};

export default Index;