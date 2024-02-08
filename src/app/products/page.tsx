import React from 'react';
import ProductCard from "@/app/components/ProductCard/ProductCard";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Products',
    description: 'Something about products',
}

const handleAddProducts = async () => {
    try {
        const response = await fetch('https://js-course-18-c9943-default-rtdb.europe-west1.firebasedatabase.app/dishes.json', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title: 'Pizza',
                price: '500',
                image: 'https://dodopizza-a.akamaihd.net/static/Img/Products/ae37f56eb05c434c82fb06f2d8d13d3c_366x366.webp',
            }),
        });
        const data = await response.json();
        console.log('Product added', data);
    } catch (error) {
        console.error('Error', error);
    }
};

const getProducts = async () => {
    const res = await fetch('https://js-course-18-c9943-default-rtdb.europe-west1.firebasedatabase.app/dishes.json',  { cache: 'no-store' });
    const json = await res.json();
    if (!res.ok) {
        throw new Error('Failed')
    }
    return Object.entries(json).map(([key, value]) => ({id: key, ...value}));
};

const Products = async () => {

    const products = await getProducts();

    return (
        <div style={{margin: '40px 0'}}>
            <h1 style={{fontSize: '35px', marginBottom: '20px'}}>Products page</h1>
            <div style={{display: "flex", flexWrap: 'wrap'}}>
                {products.map((el) => (
                    <ProductCard key={el.id} id={el.id} title={el.title} price={el.price} image={el.image}/>
                ))}
            </div>
        </div>
    );
};

export default Products;