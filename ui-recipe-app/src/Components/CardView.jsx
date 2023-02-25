import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

function CardView(props) {
    const [data, setData] = useState({})
    const location = useLocation()
    useEffect(()=>{
        setData(location.state)
    }, [])
    
    return (
       <>
            <div>
                <h1>{data.name}</h1>
                <img src={data.url}/>
            </div>
       </>
    );
}

export default CardView;