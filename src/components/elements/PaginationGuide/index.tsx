import { FC } from "react";
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
interface PaginationProps {
    total: number;
    value?: number;
    step: number;
    onChange: (value: number) => void;
}

const PaginationGuide: FC<PaginationProps> = ({ total, value, onChange }) => {
    const handlePrevious = () => {
        if (value && value > 1) onChange(value - 1);
    };

    const handleNext = () => {
        if (value && value < total) onChange(value + 1);
    };
    return (
        <Pagination className="mt-4" total={total} value={value} onChange={handleNext}>
            <PaginationContent>
                <PaginationItem>
                    <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#">1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                    <PaginationNext href="#" />
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    );
};
export default PaginationGuide;
