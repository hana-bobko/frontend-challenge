"use client";
import React, { FC, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import UploadImage from "@/components/elements/UploadImage";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useStore } from "@/hooks/use-store";
const schema = z.object({
    name: z.string().min(1, "Nome é obrigatório"),
    category: z.string().min(1, "Categoria é obrigatória"),
    price: z.number().min(0, "Preço deve ser um número positivo"),
    description: z.string().min(1, "Descrição é obrigatória"),
    img: z.instanceof(File).optional(),
});

type FormData = z.infer<typeof schema>;
interface Product {
    id: number;
    img: string;
    price: number;
    name: string;
    category: string;
    description: string;
}
interface FormProductProps {
    onClose: () => void;
    product: Product;
}

const FormEditProduct: FC<FormProductProps> = ({ onClose, product }) => {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const { updateProduct } = useStore();

    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
    } = useForm<FormData>({
        resolver: zodResolver(schema),
        defaultValues: {
            name: product?.name || "",
            category: product?.category || "",
            price: product?.price || 0,
            description: product?.description || "",
        },
    });

    const handleFileChange = (file: File | null) => {
        setSelectedFile(file);
    };

    const onSubmit = async (formData: FormData) => {
        const newProduct = {
            ...formData,
            img: `/images/${product?.category || "logo"}.png`,
            id: product.id, // Certifique-se de que está passando o ID correto
        };

        updateProduct(product.id, newProduct); // Atualize aqui para passar newProduct

        onClose();
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
                <Input id="name" defaultValue={product?.name} {...register("name")} placeholder="Digite o nome do produto" className={errors.name ? "border-red-500" : "h-14"} />
                {errors.name && <span className="text-red-500">{errors.name.message}</span>}
            </div>
            <div className="flex gap-3">
                <Input
                    id="category"
                    type="text"
                    defaultValue={product?.category}
                    {...register("category")}
                    placeholder="Categoria"
                    className={errors.category ? "border-red-500 h-14" : "h-14"}
                />
                {errors.category && <span className="text-red-500">{errors.category.message}</span>}

                <Input
                    id="price"
                    type="number"
                    defaultValue={product?.price}
                    {...register("price", { valueAsNumber: true })}
                    placeholder="Digite o preço do produto"
                    className={errors.price ? "border-red-500 h-14" : "h-14"}
                />
                {errors.price && <span className="text-red-500">{errors.price.message}</span>}
            </div>

            <div>
                <Textarea
                    id="description"
                    defaultValue={product?.description}
                    {...register("description")}
                    placeholder="Digite a descrição do produto"
                    className={errors.description ? "border-red-500" : "h-32"}
                />
                {errors.description && <span className="text-red-500">{errors.description.message}</span>}
            </div>

            <div>
                <UploadImage onFileChange={handleFileChange} />
                {selectedFile && (
                    <div className="mt-4">
                        <p>{selectedFile.name}</p>
                    </div>
                )}
            </div>
            <div className="flex justify-between">
                <Button onClick={onClose} className="bg-gray-500 font-semibold">
                    Fechar
                </Button>
                <Button type="submit" className="bg-sky-700 font-semibold">
                    Salvar Alterações
                </Button>
            </div>
        </form>
    );
};

export default FormEditProduct;
