import React, { useState } from "react";
import { useRouter } from "next/router";
import LayoutShellProps from "@/components/layouts/shell";
import InputSelect from "@/components/InputSelect";
import SearchBar from "@/components/elements/SearchBar";
import InputRange from "@/components/InputRange";
import CheckboxGroup from "@/components/CheckboxGroup";
import Cards from "@/components/Cards";
import data from "../../data/data.json";
import PaginationGuide from "@/components/elements/PaginationGuide";
function Catalog() {
    const [selectedTheme, setSelectedTheme] = useState("recentes");
    const [searchValue, setSearchValue] = useState("");
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const themeOptions = [
        { label: "Mais recentes", value: "recentes" },
        { label: "Menor preço", value: "menor" },
        { label: "Maior preço", value: "maior" },
    ];
    const router = useRouter();
    const handleNavigate = (product) => {
        const p = product;
        console.log(p, "DATADATAADATA");
        router.push(`/details?data=${encodeURIComponent(JSON.stringify(p))}`);
    };

    const itemsPerPage = 12;
    const [currentPage, setCurrentPage] = useState(1);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const currentItems = data?.products?.slice(startIndex, endIndex);

    const totalPages = Math.ceil(data?.products?.length / itemsPerPage);
    return (
        <LayoutShellProps>
            <div className="w-full h-full justify-center items-center">
                <div className="flex gap-3 justify-center w-full">
                    <div className="flex-col w-1/3">
                        <InputSelect options={themeOptions} placeholder="Select Theme" selectedValue={selectedTheme} onValueChange={(value) => setSelectedTheme(value)} />
                        <div className="border border-gray-300 rounded-md h-64 flex-col p-6">
                            <InputRange initValue={0} max={99999} step={2} onValueChange={(e) => console.log(e)} label="Preço" />
                            <CheckboxGroup items={data?.categories} selectedItems={selectedCategories} onChange={setSelectedCategories} />
                        </div>
                    </div>
                    <div className="flex-col w-2/3">
                        <SearchBar placeholder="Buscar itens..." value={searchValue} onChange={(newValue) => setSearchValue(newValue)} onClear={() => setSearchValue("")} />
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
                            {currentItems?.map((item) => (
                                <Cards handleClick={() => handleNavigate(item)} key={item?.id} title={`R$ ${item?.price}`} content={item?.name} image={item?.img} />
                            ))}
                        </div>
                        {totalPages > 1 && <PaginationGuide total={totalPages} value={currentPage} step={itemsPerPage} onChange={(page) => setCurrentPage(parseInt(page))} />}
                    </div>
                </div>
            </div>
        </LayoutShellProps>
    );
}

export default Catalog;
