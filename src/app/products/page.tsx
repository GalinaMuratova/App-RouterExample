import React from 'react';
import ProductCard from "@/components/ProductCard/ProductCard";
import {Metadata} from "next";
import actions from "@/lib/actions";
import AddProductButton from "@/components/UI/AddProductButton/AddProductButton";
export const metadata: Metadata = {
    title: 'Products',
    description: 'Something about products',
}

const getProducts = async () => {
    const res = await fetch('https://js-course-18-c9943-default-rtdb.europe-west1.firebasedatabase.app/dishes.json', { next: { tags: ['collection'] } });
    const json = await res.json();
    if (!res.ok) {
        throw new Error('Failed')
    }
    await actions();
    return Object.entries(json).map(([key, value]) => ({id: key, ...value}));
};


const Products = async () => {
    const products = await getProducts();

    return (
        <div style={{margin: '40px 0'}}>
            <h1 style={{fontSize: '35px', marginBottom: '20px'}}>Products page</h1>
            <AddProductButton />
            <div style={{display: "flex", flexWrap: 'wrap'}}>
                {products.map((el) => (
                    <ProductCard key={el.id} id={el.id} title={el.title} price={el.price} image={el.image}/>
                ))}
            </div>
        </div>
    );
};

export default Products;