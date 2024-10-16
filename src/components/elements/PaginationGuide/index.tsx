import { FC } from "react";
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";

interface PaginationProps {
    total: number;
    value?: number;
    step: number;
    onChange: (value: number) => void;
}

const PaginationGuide: FC<PaginationProps> = ({ total, value = 1, onChange }) => {
    const handlePrevious = () => {
        if (value > 1) onChange(value - 1);
    };

    const handleNext = () => {
        if (value < total) onChange(value + 1);
    };

    const handleChange = (page: number) => {
        onChange(page); // Atualiza a página diretamente
    };

    return (
        <Pagination className="mt-4" total={total} value={value} onChange={handleChange}>
            <PaginationContent>
                <PaginationItem>
                    <PaginationPrevious href="#" onClick={handlePrevious} />
                </PaginationItem>
                {[...Array(total)].map((_, index) => (
                    <PaginationItem key={index}>
                        <PaginationLink href="#" onClick={() => handleChange(index + 1)}>
                            {index + 1}
                        </PaginationLink>
                    </PaginationItem>
                ))}
                <PaginationItem>
                    <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                    <PaginationNext href="#" onClick={handleNext} />
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    );
};

export default PaginationGuide;
