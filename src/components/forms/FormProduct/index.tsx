import React, { useState, useEffect, FC } from "react";
import { generateUniqueId } from "@/utils/data/generate-unique-id";
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
});

type FormData = z.infer<typeof schema>;

interface FormProductProps {
    onClose: () => void;
}

const FormProduct: FC<FormProductProps> = ({ onClose }) => {
    const [selectedFile, setSelectedFile] = useState(null);
    const { addProduct } = useStore();

    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
    } = useForm<FormData>({
        resolver: zodResolver(schema),
    });

    const handleFileChange = (file: any) => {
        setSelectedFile(file);
    };

    const onSubmit = async (formData: FormData) => {
        const newProduct = {
            id: generateUniqueId(),
            img: selectedFile ? URL.createObjectURL(selectedFile) : "",
            ...formData,
        };

        addProduct(newProduct);

        onClose();
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
                <Input id="name" {...register("name")} placeholder="Digite o nome do produto" className={errors.name ? "border-red-500" : "h-14"} />
                {errors.name && <span className="text-red-500">{errors.name.message}</span>}
            </div>

            <div className="flex gap-3">
                <Select onValueChange={(value) => setValue("category", value)}>
                    <SelectTrigger className={errors.category ? "border-red-500" : "h-14"}>
                        <SelectValue placeholder="Selecione uma categoria" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>Categoria</SelectLabel>

                            <SelectItem value="teclado">Teclado</SelectItem>
                            <SelectItem value="headset">Headset</SelectItem>
                            <SelectItem value="placa">placa de Vídeo</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
                {errors.category && <span className="text-red-500">{errors.category.message}</span>}

                <Input
                    id="price"
                    type="number"
                    {...register("price", { valueAsNumber: true })}
                    placeholder="Digite o preço do produto"
                    className={errors.price ? "border-red-500 h-14" : "h-14"}
                />
                {errors.price && <span className="text-red-500">{errors.price.message}</span>}
            </div>

            <div>
                <Textarea id="description" {...register("description")} placeholder="Digite a descrição do produto" className={errors.description ? "border-red-500" : "h-32"} />
                {errors.description && <span className="text-red-500">{errors.description.message}</span>}
            </div>

            <div>
                <UploadImage onFileChange={handleFileChange} />
                {selectedFile && (
                    <div className="mt-4">
                        <p className="text-green-700">Arquivo enviado!</p>
                    </div>
                )}
            </div>

            <div className="flex justify-between">
                <Button onClick={onClose} className="bg-gray-500 font-semibold">
                    Fechar
                </Button>
                <Button type="submit" className="bg-sky-700 font-semibold">
                    Salvar Produto
                </Button>
            </div>
        </form>
    );
};

export default FormProduct;
