import React, { FC } from "react";
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";

interface PaginationProps {
    total: number;
    value?: number;
    step: number;
    onChange: (page: number) => void;
}

const PaginationGuide: FC<PaginationProps> = ({ total, value = 1, onChange }) => {
    const handlePrevious = () => {
        if (value > 1) onChange(value - 1);
    };

    const handleNext = () => {
        if (value < total) onChange(value + 1);
    };

    const handleChange = (page: number) => {
        if (page !== value) {
            onChange(page);
        }
    };

    //total={total} value={value}
    return (
        <Pagination className="mt-4">
            <PaginationContent>
                <PaginationItem className={value === 1 ? "disabled" : ""}>
                    <PaginationPrevious href="#" onClick={value === 1 ? undefined : handlePrevious} className={value === 1 ? "cursor-not-allowed opacity-50" : ""} />
                </PaginationItem>
                {[...Array(total)].map((_, index) => {
                    const page = index + 1;
                    return (
                        <PaginationItem key={index} className={page === value ? "active" : ""}>
                            <PaginationLink href="#" onClick={() => handleChange(page)}>
                                {page}
                            </PaginationLink>
                        </PaginationItem>
                    );
                })}
                {total > 5 && (
                    <PaginationItem>
                        <PaginationEllipsis />
                    </PaginationItem>
                )}

                <PaginationItem className={value === total ? "disabled" : ""}>
                    <PaginationNext href="#" onClick={value === total ? undefined : handleNext} className={value === total ? "cursor-not-allowed opacity-50" : ""} />
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    );
};

export default PaginationGuide;
