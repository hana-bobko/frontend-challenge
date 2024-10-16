import React from "react";
import { IconX } from "@tabler/icons-react";
import { Input } from "@/components/ui/input";
import { IconSearch } from "@tabler/icons-react";
import QuantityButton from "../QuantityButton";
import formatCurrency from "@/utils/data/format-currency";
interface SearchBarProps {
    img: string;
    price: number;
    name: string;
    handleRemove: () => void;
    onClear?: () => void;
}

const CartItem: React.FC<SearchBarProps> = ({ img, price, name, handleRemove }) => {
    const handleQuantityChange = (quantity: number) => {
        console.log("Quantidade atual:", quantity);
    };
    return (
        <div className="relative flex-col w-full max-w-xl border border-gray-300 rounded-sm my-3">
            <div className="flex w-full justify-end pr-3 pt-3">
                <IconX className="text-red-500 self-end cursor-pointer" onClick={handleRemove} />
            </div>
            <div className="flex justify-start  p-3 gap-3 items-center">
                <img src={img} alt="Product" className="w-36 h-36" />
                <div className="flex-col w-full mt-9 ">
                    <h3 className="text-base font-semibold leading-7 text-gray-900">{name}</h3>
                    <div className="flex justify-between w-full">
                        <QuantityButton initialQuantity={1} minQuantity={1} maxQuantity={5} onChange={handleQuantityChange} />
                        <h3 className="text-base font-semibold leading-7 text-gray-900">{formatCurrency(price)}</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItem;
