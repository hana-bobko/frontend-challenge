import LayoutShellProps from "@/components/layouts/shell";
import { useStore } from "@/hooks/use-store";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/router";
import RelatedProducts from "@/components/elements/RelatedProducts";
import datas from "../../data/data.json";
import formatCurrency from "@/utils/data/format-currency";
function Details() {
    const { addToCart } = useStore();
    const router = useRouter();

    const { data } = router.query;
    const hasData = data ? JSON.parse(decodeURIComponent(data as string)) : null;
    console.log(hasData);
    return (
        <LayoutShellProps>
            {hasData ? (
                <div className=" flex justify-between  w-full mx-auto  md:p-6 lg:p">
                    <div className="flex-col px-9">
                        <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{hasData?.name}</h1>
                        <div className="flex my-9 h-72">
                            <img className="h-80 w-80" src={hasData?.img} alt="product image" />
                            <div className="flex-col">
                                <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{formatCurrency(hasData?.price)}</h1>
                                <p className="mt-6 text-lg leading-8 text-gray-600">*Frete grátis acima de R$ 900,00</p>
                                <Button onClick={() => addToCart({ ...hasData, quantity: 1 })} title="Adicionar aao carrinho" className="h-16 w-96 mt-36">
                                    <h3 className="text-sm font-semibold text-white">Adicionar ao carrinho</h3>
                                </Button>
                            </div>
                        </div>
                        <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Descrição</h1>
                        <p className="mt-6 text-lg leading-8 text-gray-600">{hasData?.description}</p>
                    </div>
                    <div className="flex-col h-screen p-3 overflow-auto">
                        <h3 className="text-base font-semibold leading-7 text-gray-900">Produtos relacionados</h3>
                        <ul className="h-screen">
                            {datas?.products.map((item) => (
                                <RelatedProducts img={item?.img} name={item?.name} price={item?.price} onChange={() => console.log("item relacionado")} />
                            ))}
                        </ul>
                    </div>
                </div>
            ) : (
                <h3>Ops! Algo deu errado!</h3>
            )}
        </LayoutShellProps>
    );
}
export default Details;
