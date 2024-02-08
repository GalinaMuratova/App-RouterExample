'use client'

import React from 'react';
import Image from "next/image";
import './ProductCard.css';
interface Props {
    id: string
    title: string;
    price: string;
    image: string;
}
const handleDeleteProduct = async (productId) => {
    try {
        const response = await fetch(`https://js-course-18-c9943-default-rtdb.europe-west1.firebasedatabase.app/dishes/${productId}.json`, {
            method: 'DELETE',
        });
        if (!response.ok) {
            throw new Error('Failed');
        }
        alert('Product deleted ');
    } catch (error) {
        console.error('Error', error);
    }
};
const handleUpdateAllProduct = async (productId) => {
    try {
        const response = await fetch(`https://js-course-18-c9943-default-rtdb.europe-west1.firebasedatabase.app/dishes/${productId}.json`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title: 'La la la title',
                price: '999',
                image: 'https://dodopizza-a.akamaihd.net/static/Img/Products/ada478de4d6a466aa049f59b4656a781_366x366.webp',
            }),
        });
        alert('Product edited');
    } catch (error) {
        console.error('Error', error);
    }
};

const handleUpdateProduct = async (productId: string) => {
    try {
        const response = await fetch(`https://js-course-18-c9943-default-rtdb.europe-west1.firebasedatabase.app/dishes/${productId}.json`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title:'Changed just title',
            }),
        });
        if (!response.ok) {
            throw new Error('Failed to update product');
        }
        alert('Product changed');
    } catch (error) {
        console.error('Error', error);
    }
};

const ProductCard: React.FC<Props> = ({title, price,image, id}) => {

    return (
        <div className='card'>
            <div className='imageContainer'>
                <Image src={image} alt={title} width={250} height={250}/>
            </div>
            <div className='details'>
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