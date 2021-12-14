import React from 'react';
import {useParams} from "react-router-dom"

const Index = () => {

    const {id} = useParams()

    return (
        <div>
            {`Detail of id ${id}`}
        </div>
    );
};

export default Index;