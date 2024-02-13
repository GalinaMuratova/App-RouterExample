import actions from "@/lib/actions";
import {IProduct} from "../../types";

export const getOneProduct = async (productId: string): Promise<IProduct | null> => {
    try {
        const res = await fetch(`https://js-course-18-c9943-default-rtdb.europe-west1.firebasedatabase.app/dishes/${productId}.json`);
        return await res.json();
    } catch (error) {
        console.error('Error', error);
        return null;
    }
}
export const handleAddProducts = async () => {
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
        await actions();
        console.log('Product added', data);
    } catch (error) {
        console.error('Error', error);
    }
};

export const handleUpdateAllProduct = async (productId: string) => {
    try {
       await fetch(`https://js-course-18-c9943-default-rtdb.europe-west1.firebasedatabase.app/dishes/${productId}.json`, {
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
        await actions();
    } catch (error) {
        console.error('Error', error);
    }
};

export const handleUpdateProduct = async (productId: string) => {
    try {
        await fetch(`https://js-course-18-c9943-default-rtdb.europe-west1.firebasedatabase.app/dishes/${productId}.json`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title:'Changed just title',
            }),
        });
        alert('Product changed');
        await actions();
    } catch (error) {
        console.error('Error', error);
    }
};

export const handleDeleteProduct = async (productId: string) => {
    try {
        await fetch(`https://js-course-18-c9943-default-rtdb.europe-west1.firebasedatabase.app/dishes/${productId}.json`, {
            method: 'DELETE',
        });
        alert('Product deleted ');
        await actions();
    } catch (error) {
        console.error('Error', error);
    }
};