import { FC } from "react";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
interface CustomSelectProps {
    label: string;
    handleCliclk: void;
}

const CustomButton: FC<CustomSelectProps> = ({ label, handleCliclk }) => {
    return (
        <Button className="bg-sky-600 w-full h-14" onClick={handleCliclk}>
            <Label className="font-semibold">{label}</Label>
        </Button>
    );
};

export default CustomButton;
