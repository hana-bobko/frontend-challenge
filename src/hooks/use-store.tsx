import { create } from "zustand";
import React, { useEffect, useState } from "react";

interface Product {
    name: string;
    category: string;
    price: number;
    description: string;
    img?: string | File;
}

interface StoreState {
    products: Product[];
    cart: [];
    addProduct: (newProduct: Product) => void;
    addToCart: (newProduct: Product) => void;
    removeFromCart: (index: number) => void;
    removeProduct: (index: number) => void;
}

export const useStore = create<StoreState>((set) => ({
    products: [],
    cart: [],
    addProduct: (newProduct: Product) => {
        set((state) => {
            const updatedProducts = [...state.products, newProduct];
            if (typeof window !== "undefined") {
                localStorage.setItem("products", JSON.stringify(updatedProducts));
            }
            return { products: updatedProducts };
        });
    },
    removeProduct: (index: number) => {
        set((state) => {
            const updatedProducts = state.products.filter((_, i) => i !== index);
            if (typeof window !== "undefined") {
                localStorage.setItem("products", JSON.stringify(updatedProducts));
            }
            return { products: updatedProducts };
        });
    },

    addToCart: (newProduct: Product) => {
        set((state) => {
            const updatedCart = [...state.cart, newProduct];
            if (typeof window !== "undefined") {
                localStorage.setItem("cart", JSON.stringify(updatedCart));
            }
            return { cart: updatedCart };
        });
    },

    removeFromCart: (index: number) => {
        set((state) => {
            const updatedCart = state.cart.filter((_, i) => i !== index);
            if (typeof window !== "undefined") {
                localStorage.setItem("cart", JSON.stringify(updatedCart));
            }
            return { cart: updatedCart };
        });
    },
}));

const ProductsLoader: React.FC = () => {
    const { setProducts } = useStore((state) => ({
        setProducts: (products: Product[]) => state.products.length === 0 && state.addProduct(products[0]),
    }));

    useEffect(() => {
        if (typeof window !== "undefined") {
            const initProducts = JSON.parse(localStorage.getItem("products") || "[]");
            setProducts(initProducts);
        }
    }, [setProducts]);

    return null;
};

export default ProductsLoader;
