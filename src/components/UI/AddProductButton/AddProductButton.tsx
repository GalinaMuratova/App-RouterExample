'use client'
import React from 'react';
import {handleAddProducts} from "@/lib/functions";

const AddProductButton = () => {
    return (
        <>
            <button className="btn" onClick={handleAddProducts}>Add products</button>
        </>
    );
};

export default AddProductButton;