import React from 'react';
import { getOneProduct } from '@/lib/functions';
import Image from 'next/image';
import type { Metadata, ResolvingMetadata } from 'next'

type Props = {
    params: { id: string }
    searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata(
    { params, searchParams }: Props,
    parent: ResolvingMetadata
): Promise<Metadata> {
    const id = params.id;
    const product = await getOneProduct(id);
    if (!product) {
        return {
            title: 'Products',
            description: 'No description'
        };
    }
    return {
        title: product.title,
        openGraph: {
            images: [product.image],
        },
        description: product.title
    };
}
const OneProduct = async ({ params }: Props) => {
    const product = await getOneProduct(params.id);
    if (!product) {
        return <div>Not found</div>;
    }
    return (
        <div style={{margin:'20px' }}>
            <Image src={product.image} alt={product.title} width={250} height={250} />
            <div>
                <p>Title: {product.title}</p>
                <p>Price: {product.price}</p>
            </div>
        </div>
    );
};

export default OneProduct;
