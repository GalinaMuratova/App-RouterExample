'use client'

import React from 'react';
import Image from "next/image";
import './ProductCard.css';
import {handleDeleteProduct, handleUpdateAllProduct, handleUpdateProduct} from "@/app/functions";

interface Props {
    id: string
    title: string;
    price: string;
    image: string;
}

const ProductCard: React.FC<Props> = ({title, price,image, id}) => {

    return (
        <div className='card'>
            <div className='imageContainer'>
                <Image src={image} alt={title} width={250} height={250}/>
            </div>
            <div className='details sm:'>
                <h5 className='title'>{title}</h5>
                <p className='price'>Price: {price}</p>
                <button className='btn' onClick={() => handleDeleteProduct(id)}>Delete</button>
                <button className='btn' onClick={() => handleUpdateAllProduct(id)}>Edit</button>
                <button className='btn' onClick={() => handleUpdateProduct(id)}>Change title</button>
            </div>
        </div>
    );
};

export default ProductCard;