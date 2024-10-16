import React, { FC } from "react";
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";

interface PaginationProps {
    total: number; // Total number of pages
    value?: number; // Current page value
    step: number; // Step size, if necessary
    onChange: (page: number) => void; // Function to handle page change
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
            onChange(page); // Ensure only non-current page clicks trigger change
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

                {/* {[...Array(total)].map((_, index) => (
                    <PaginationItem key={index}>
                        <PaginationLink href="#" onClick={() => handleChange(index + 1)}>
                            {index + 1}
                        </PaginationLink>
                    </PaginationItem>
                ))} */}
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
