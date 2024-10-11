import React from "react";
import { IconX } from "@tabler/icons-react";
import { Input } from "@/components/ui/input";
import { IconSearch } from "@tabler/icons-react";
import QuantityButton from "../QuantityButton";
interface SearchBarProps {
    img: string;
    qty: number;
    price: number;
    name: string;
    onChange: (value: string) => void;
    onClear?: () => void;
}

const CartItem: React.FC<SearchBarProps> = ({ img, qty, price, name }) => {
    const handleQuantityChange = (quantity: number) => {
        console.log("Quantidade atual:", quantity);
    };
    return (
        <div className="relative flex-col w-full max-w-xl border border-gray-300 rounded-sm">
            <div className="flex w-full justify-end pr-3 pt-3">
                <IconX className="text-red-500 self-end" />
            </div>
            <div className="flex justify-start  p-3 gap-3 items-center">
                <img
                    src={
                        img ||
                        "https://www.kabum.com.br/_next/image?url=https%3A%2F%2Fimages7.kabum.com.br%2Fprodutos%2Ffotos%2F384627%2Fplaca-de-video-msi-nvidia-geforce-rtx-3060-ventus-2x-12gb-gddr6-dlss-ray-tracing-912-v397-272_1663850312_g.jpg&w=640&q=100"
                    }
                    alt="Product"
                    className="w-36 h-36"
                />
                <div className="flex-col w-full mt-9 ">
                    <h3 className="text-base font-semibold leading-7 text-gray-900">Processador RTX Ryzen</h3>
                    <div className="flex justify-between w-full">
                        <QuantityButton initialQuantity={2} minQuantity={1} maxQuantity={5} onChange={handleQuantityChange} />
                        <h3 className="text-base font-semibold leading-7 text-gray-900">R$ 1.000,00</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItem;
