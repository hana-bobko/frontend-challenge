import LayoutShellProps from "@/components/layouts/shell";

import { Button } from "@/components/ui/button";

import RelatedProducts from "@/components/elements/RelatedProducts";
function Details() {
    return (
        <LayoutShellProps>
            <div className=" flex justify-between  w-full mx-auto  md:p-6 lg:p">
                <div className="flex-col px-9">
                    <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">IPhone 16 128GB Ultramarino</h1>
                    <div className="flex my-9 h-72">
                        <img
                            className="h-80 w-80"
                            src="https://www.kabum.com.br/_next/image?url=https%3A%2F%2Fimages0.kabum.com.br%2Fprodutos%2Ffotos%2F634690%2Fiphone-16-128gb-ultramarino_1727104401_g.jpg&w=640&q=100"
                            alt="product image"
                        />
                        <div className="flex-col">
                            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">R$ 1.000,00</h1>
                            <p className="mt-6 text-lg leading-8 text-gray-600">*Frete grátis acima de R$ 900,00</p>
                            <Button title="Adicionar aao carrinho" className="h-16 w-96 mt-36">
                                <h3 className="text-sm font-semibold text-white">Adicionar ao carrinho</h3>
                            </Button>
                        </div>
                    </div>
                    <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Descrição</h1>{" "}
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua. Fugiat ipsum
                        ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur qui ipsum aliquip consequat sint. Sit id mollit nulla mollit
                        nostrud in ea officia proident. Irure nostrud pariatur mollit ad adipisicing reprehenderit deserunt qui eu.
                    </p>
                </div>
                <div className="flex-col">
                    <h3 className="text-base font-semibold leading-7 text-gray-900">Produtos relacionados</h3>
                    <ul>
                        <RelatedProducts />
                        <RelatedProducts />
                        <RelatedProducts />
                        <RelatedProducts />
                        <RelatedProducts />
                    </ul>
                </div>
            </div>
        </LayoutShellProps>
    );
}
export default Details;
