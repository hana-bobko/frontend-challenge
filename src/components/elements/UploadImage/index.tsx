import React, { useRef } from "react";
import { UploadCloud } from "lucide-react"; // Usando o ícone 'UploadCloud' da lib 'lucide-react'

interface FileInputProps {
    onFileChange: (file: File | null) => void;
}

const UploadImage: React.FC<FileInputProps> = ({ onFileChange }) => {
    const fileInputRef = useRef<HTMLInputElement | null>(null);

    // Função chamada quando o usuário seleciona uma imagem
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0] || null;
        onFileChange(file);
    };

    // Função para ativar o clique no input de file
    const handleClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    return (
        <div className="w-full flex flex-col items-center">
            <div
                onClick={handleClick}
                className="cursor-pointer p-6 w-full h-48 border-2 border-dashed border-gray-200 rounded-md flex flex-col justify-center items-center hover:border-gray-300 transition-colors"
            >
                <UploadCloud className="h-8 w-8 text-gray-500" />
                <span className="mt-2 text-sm text-gray-500">Faça upload da imagem do produto</span>
            </div>

            {/* Input escondido que será ativado pelo clique */}
            <input id="picture" ref={fileInputRef} type="file" accept="image/*" className="hidden" onChange={handleFileChange} />
        </div>
    );
};

export default UploadImage;
