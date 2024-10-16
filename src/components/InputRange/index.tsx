import { FC } from "react";
import * as Slider from "@radix-ui/react-slider";
import { Label } from "@/components/ui/label";

interface InputRangeProps {
    initValue: number[]; // Agora recebe um array com [min, max]
    max?: number;
    step: number;
    label: string;
    onValueChange: (value: number[]) => void;
}

const InputRange: FC<InputRangeProps> = ({ initValue, max = 100, step, label, onValueChange }) => {
    return (
        <div className="flex-col mb-3">
            <div className="flex justify-between">
                <Label className="mb-3" htmlFor="range">
                    {label || "Label"}
                </Label>
                <Label className="mb-3" htmlFor="range">
                    {`R$ ${initValue[0]} à R$ ${initValue[1]}`}
                </Label>
            </div>
            <Slider.Root
                defaultValue={initValue}
                value={initValue}
                max={max}
                step={step}
                minStepsBetweenThumbs={1}
                onValueChange={onValueChange}
                className="relative flex w-full h-2 bg-gray-200 rounded-lg"
            >
                <Slider.Track className="relative flex-grow h-2 bg-gray-200 rounded-lg">
                    <Slider.Range className="absolute h-full bg-sky-700 rounded-lg" />
                </Slider.Track>
                <Slider.Thumb className="relative bottom-3 w-5 h-5 bg-white rounded-full cursor-pointer border-2 border-sky-700  shadow" />
                <Slider.Thumb className="relative bottom-3 w-5 h-5 bg-white rounded-full cursor-pointer border-2 border-sky-700  shadow" />
            </Slider.Root>
        </div>
    );
};

export default InputRange;
