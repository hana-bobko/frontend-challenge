import React from "react";
import { Checkbox } from "@/components/ui/checkbox";

interface CheckboxItem {
    id: string | number;
    label: string;
}

interface CheckboxGroupProps {
    items: CheckboxItem[];
    selectedItems: string[];
    onChange: (selected: string[]) => void;
}

const CheckboxGroup: React.FC<CheckboxGroupProps> = ({ items, selectedItems, onChange }) => {
    const handleCheckboxChange = (itemId: string) => {
        const isSelected = selectedItems.includes(itemId);
        const updatedSelection = isSelected ? selectedItems.filter((id) => id !== itemId) : [...selectedItems, itemId];

        onChange(updatedSelection);
    };

    return (
        <div className="flex flex-col gap-2">
            {items.map((item) => (
                <div key={item.id} className="flex items-center space-x-2">
                    <Checkbox id={item.id.toString()} checked={selectedItems.includes(item.id.toString())} onCheckedChange={() => handleCheckboxChange(item.id.toString())} />
                    <label htmlFor={item.id.toString()} className="text-sm text-gray-800">
                        {item.label}
                    </label>
                </div>
            ))}
        </div>
    );
};

export default CheckboxGroup;
