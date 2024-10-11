import React from "react";

interface RelatedProducts {
    img: string;
    name: string;
    price: number;
    onChange: (value: string) => void;
}

const RelatedProducts: React.FC<RelatedProducts> = ({ img, name, price }) => {
    return (
        <div className="relative flex items-center w-full h-28 max-w-lg border my-3 border-gray-300 rounded-md">
            <img
                src={
                    img ||
                    "https://www.kabum.com.br/_next/image?url=https%3A%2F%2Fimages9.kabum.com.br%2Fprodutos%2Ffotos%2F520369%2Fprocessador-amd-ryzen-7-5700x3d-3-6-ghz-4-1ghz-max-turbo-cache-4mb-8-nucleos-16-threads-am4-video-integrado-100-100001503wof_1708023990_g.jpg&w=640&q=100"
                }
                alt="product image"
                className="w-24 h-24"
            />
            <div className="flex-col min-w-0 flex-1 gap-2">
                <p className="mt-6 font-light truncate leading-8 text-gray-600">
                    {name || "Processador AMD Ryzen 7 5700X3D, 3.6 GHz, (4.1GHz Max Turbo), Cachê 4MB, 8 Núcleos, 16 Threads, AM4 - 100-100001503WOF"}
                </p>
                <h2 className="text-lg font-bold">{price || "R$ 700,00"}</h2>
            </div>
        </div>
    );
};

export default RelatedProducts;
