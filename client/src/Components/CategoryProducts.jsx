import React from 'react'
import { useLocation } from 'react-router-dom';

const CategoryProducts = () => {
    const location = useLocation();
    const cat = location.pathname.slice(10)
    console.log(cat);
    return (
        <div>
            {cat}
        </div>
    )
}

export default CategoryProducts
