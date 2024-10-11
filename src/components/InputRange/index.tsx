import { FC } from "react";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";

interface CustomSelectProps {
    initValue: number;
    max?: number;
    step: number;
    label: string;
    onChange: (value: string) => void;
}

const InputRange: FC<CustomSelectProps> = ({ initValue, max, step, label, onChange }) => {
    return (
        <div className="flex-col mb-3">
            <div className="flex justify-between">
                <Label className="mb-3" htmlFor="range">
                    {label || "Label"}
                </Label>
                <Label className="mb-3" htmlFor="range">{`R$ ${initValue} à R$ ${max}`}</Label>
            </div>
            <Slider id="range" defaultValue={[initValue || 33]} max={max || 100} step={step || 1} onChange={onChange} />
        </div>
    );
};

export default InputRange;
