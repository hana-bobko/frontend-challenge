import React, { useState } from "react";

type QuantityButtonProps = {
    initialQuantity?: number;
    minQuantity?: number;
    maxQuantity?: number;
    onChange?: (quantity: number) => void;
};

const QuantityButton: React.FC<QuantityButtonProps> = ({ initialQuantity = 1, minQuantity = 1, maxQuantity = 10, onChange }) => {
    const [quantity, setQuantity] = useState<number>(initialQuantity);

    const handleIncrease = () => {
        if (maxQuantity && quantity < maxQuantity) {
            const newQuantity = quantity + 1;
            setQuantity(newQuantity);
            onChange?.(newQuantity);
        }
    };

    const handleDecrease = () => {
        if (quantity > minQuantity) {
            const newQuantity = quantity - 1;
            setQuantity(newQuantity);
            onChange?.(newQuantity);
        }
    };

    return (
        <div className="flex items-center space-x-2">
            <button onClick={handleDecrease} className="px-3 py-1 bg-red-500 text-white rounded-md disabled:opacity-50" disabled={quantity <= minQuantity}>
                -
            </button>

            <input type="text" value={quantity} readOnly className="text-center w-12 border rounded-md" />

            <button
                onClick={handleIncrease}
                className="px-3 py-1 bg-green-500 text-white rounded-md disabled:opacity-50"
                disabled={maxQuantity !== undefined && quantity >= maxQuantity}
            >
                +
            </button>
        </div>
    );
};

export default QuantityButton;
