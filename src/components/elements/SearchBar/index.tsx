import React from "react";

import { Input } from "@/components/ui/input";
import { IconSearch } from "@tabler/icons-react";
import { IconX } from "@tabler/icons-react";

interface SearchBarProps {
    placeholder?: string;
    value: string;
    onChange: (value: string) => void;
    onClear?: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ placeholder = "Search...", value, onChange, onClear }) => {
    return (
        <div className="relative flex items-center w-full max-w-md ">
            <IconSearch className="absolute left-3 text-gray-500 mb-3" size={20} />

            <Input type="text" className="pl-10 pr-10 mb-3  h-14" placeholder={placeholder} value={value} onChange={(e) => onChange(e?.target?.value)} />

            {value && (
                <button className="absolute right-3 text-gray-500 hover:text-gray-700 transition-colors" onClick={onClear}>
                    <IconX size={20} />
                </button>
            )}
        </div>
    );
};

export default SearchBar;
