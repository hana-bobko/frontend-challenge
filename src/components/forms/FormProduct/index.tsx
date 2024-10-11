import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select } from "@radix-ui/react-select";
import { Input } from "@/components/ui/input";

const schema = z.object({
    name: z.string().min(1, "Nome é obrigatório"),
    category: z.string().min(1, "Categoria é obrigatória"),
    price: z.number().min(0, "Preço deve ser um número positivo"),
    description: z.string().min(1, "Descrição é obrigatória"),
    img: z.instanceof(File).optional(),
});

type FormData = z.infer<typeof schema>;

const FormProduct: React.FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(schema),
    });

    const onSubmit = (data: FormData) => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
                <label htmlFor="name">Nome:</label>
                <Input id="name" {...register("name")} placeholder="Digite o nome do produto" className={errors.name ? "border-red-500" : ""} />
                {errors.name && <span className="text-red-500">{errors.name.message}</span>}
            </div>

            <div>
                <label htmlFor="category">Categoria:</label>
                <Select id="category" {...register("category")} className={errors.category ? "border-red-500" : ""}>
                    <option value="">Selecione uma categoria</option>
                    <option value="eletronicos">Eletrônicos</option>
                    <option value="roupas">Roupas</option>
                    <option value="alimentos">Alimentos</option>
                </Select>
                {errors.category && <span className="text-red-500">{errors.category.message}</span>}
            </div>

            <div>
                <label htmlFor="price">Preço:</label>
                <Input
                    id="price"
                    type="number"
                    {...register("price", { valueAsNumber: true })}
                    placeholder="Digite o preço do produto"
                    className={errors.price ? "border-red-500" : ""}
                />
                {errors.price && <span className="text-red-500">{errors.price.message}</span>}
            </div>

            <div>
                <label htmlFor="description">Descrição:</label>
                <Textarea id="description" {...register("description")} placeholder="Digite a descrição do produto" className={errors.description ? "border-red-500" : ""} />
                {errors.description && <span className="text-red-500">{errors.description.message}</span>}
            </div>

            <div>
                <label htmlFor="img">Upload de Imagem:</label>
                <input type="file" id="img" {...register("img")} accept="image/*" className="border border-gray-300 rounded" />
            </div>

            <Button type="submit">Enviar</Button>
        </form>
    );
};

export default FormProduct;
