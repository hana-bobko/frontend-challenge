import React, { useState, useEffect } from "react";
import LayoutShellProps from "@/components/layouts/shell";
import InputSelect from "@/components/InputSelect";
import SearchBar from "@/components/elements/SearchBar";
import CustomButton from "@/components/CustomButton";
import DataGrid from "@/components/elements/DataGrid";
import Modal from "@/components/elements/Modal";
import FormProduct from "@/components/forms/FormProduct";
import { useStore } from "@/hooks/use-store";
function Catalog() {
    const [selectedTheme, setSelectedTheme] = useState("recentes");
    const [searchValue, setSearchValue] = useState("");
    const [isModalOpen, setModalOpen] = useState(false);

    const { products, addProduct, updateProduct, removeProduct } = useStore();
    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);

    const themeOptions = [
        { label: "Mais recentes", value: "recentes" },
        { label: "Menor preço", value: "menor" },
        { label: "Maior preço", value: "maior" },
    ];

    return (
        <LayoutShellProps>
            <div className="flex-col w-full h-full justify-center items-center">
                <div className="flex justify-between gap-3 items-start w-full">
                    <div className="flex items-center justify-start w-2/3 gap-3">
                        <div className="flex gap-3 w-2/3">
                            <SearchBar placeholder="Buscar itens..." value={searchValue} onChange={(newValue) => setSearchValue(newValue)} onClear={() => setSearchValue("")} />
                            <div className="w-1/3">
                                <InputSelect options={themeOptions} placeholder="Select Theme" selectedValue={selectedTheme} onValueChange={(value) => setSelectedTheme(value)} />
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center w-96">
                        <CustomButton label="Cadastrar" handleCliclk={openModal} />
                    </div>
                </div>

                <div className="flex-col">
                    <DataGrid data={products} />
                </div>

                <Modal isOpen={isModalOpen} onClose={closeModal} title="Cadastrar produto" description="">
                    <FormProduct onClose={closeModal} />
                </Modal>
            </div>
        </LayoutShellProps>
    );
}

export default Catalog;
