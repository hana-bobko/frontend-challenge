import { FC } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

type Option = {
    label: string;
    value: string;
};

interface CustomSelectProps {
    options: Option[];
    placeholder?: string;
    selectedValue: string;
    id: string;
    onValueChange: (value: string) => void;
}

const InputSelect: FC<CustomSelectProps> = ({ id = "select", options, placeholder = "Select an option", selectedValue, onValueChange }) => {
    return (
        <Select value={selectedValue} onValueChange={onValueChange}>
            <SelectTrigger className="w-full mb-3  h-14">
                <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent>
                {options.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                        {option.label}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    );
};

export default InputSelect;
