import React from "react";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

type CustomCardProps = {
    title?: string;
    description?: string;
    image: string;
    content: string;
    handleClick: () => void;
};

const Cards: React.FC<CustomCardProps> = ({ title, image, content, handleClick }) => {
    return (
        <Card className="h-64 rounded-md mr-3" onClick={handleClick}>
            <CardHeader className="flex-col justify-start items-start">
                <img src={image} alt="product image" className="w-60 h-40" />
                <CardDescription>{content}</CardDescription>
                <CardTitle>{title}</CardTitle>
            </CardHeader>
        </Card>
    );
};

export default Cards;
