import { create } from "zustand";
import React, { useEffect } from "react";
import data from "../data/data.json";
interface Product {
    name: string;
    category: string;
    price: number;
    description: string;
    img?: string | File;
    id: number;
}

interface StoreState {
    products: Product[];
    cart: Product[];
    addProduct: (newProduct: Product) => void;
    addToCart: (newProduct: Product) => void;
    removeFromCart: (index: number) => void;
    removeProduct: (index: number) => void;
    updateProduct: (index: number, updatedProduct: Product) => void; // Nova função
}

export const useStore = create<StoreState>((set) => ({
    products: data?.products || [],
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
    removeProduct: (id: number) => {
        set((state) => {
            const updatedProducts = state.products.filter((product) => product.id !== id);
            if (typeof window !== "undefined") {
                localStorage.setItem("products", JSON.stringify(updatedProducts));
            }
            return { products: updatedProducts };
        });
    },
    updateProduct: (id: number, updatedProduct: Product) => {
        set((state) => {
            const updatedProducts = state.products.map((product) => (product.id === id ? { ...product, ...updatedProduct } : product));
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
    clearCart: () => set(() => ({ cart: [] })),
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
