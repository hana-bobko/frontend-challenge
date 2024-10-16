import React, { useState } from "react";
import LayoutShellProps from "@/components/layouts/shell";
import CartItem from "@/components/elements/CartItem";
import CustomButton from "@/components/CustomButton";
import { useRouter } from "next/router";
import { useStore } from "@/hooks/use-store";
import formatCurrency from "@/utils/data/format-currency";
import Modal from "@/components/elements/Modal";
function Catalog() {
    const [open, setOpen] = useState(false);
    const router = useRouter();
    const { cart, removeFromCart, clearCart } = useStore();

    const calculateTotalPrice = () => {
        return cart.reduce((total, item) => total + item.price, 0);
    };
    async function finishOrder() {
        setOpen(true);

        await clearCart();

        setTimeout(() => {
            router.push("/catalog");
            setOpen(false);
        }, 3000);
    }
    return (
        <LayoutShellProps>
            <div className="flex w-full h-full justify-center items-start border border-gray-200 rounded-sm p-3">
                <div className="flex-col w-full h-full justify-center items-center">
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Seu carrinho</h1>
                    {cart?.length > 0 ? (
                        <div className="flex-col">
                            <div className="flex max-w-xl justify-between my-3">
                                <p className="mt-1 max-w-2xl text-lg leading-6 text-gray-800">Total ({`${cart?.length + " " + `${cart?.length <= 1 ? "item" : "itens"}`}`})</p>
                                <p className="mt-1 max-w-2xl text-lg font-semibold leading-6 text-gray-800">R$ 3.000,00</p>
                            </div>

                            <ul>
                                {cart.map((item, index) => (
                                    <CartItem img={item?.img} qty={item?.qty} price={item?.price} name={item?.name} handleRemove={() => removeFromCart(index)} />
                                ))}
                            </ul>
                        </div>
                    ) : (
                        <div className="flex justify-center items-center h-40 w-full">
                            <p className="mt-1 max-w-2xl text-lg leading-6 text-gray-800">Seus items aparecerão aqui</p>
                        </div>
                    )}
                </div>
                <div className="flex-col w-full h-full border border-gray-200 rounded-sm p-3">
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900 my-3">Resultado do pedido</h1>
                    <div className="flex justify-between">
                        <p className="mt-1 max-w-2xl text-lg leading-6 text-gray-800">Subtotal</p>
                        <p className="mt-1 max-w-2xl text-lg leading-6 text-gray-800">{formatCurrency(calculateTotalPrice())}</p>
                    </div>
                    <div className="flex justify-between">
                        <p className="mt-1 max-w-2xl text-lg leading-6 text-gray-800">Entrega</p>
                        <p className="mt-1 max-w-2xl text-lg leading-6 text-gray-800">R$ 0,00</p>
                    </div>
                    <div className="border-t border-gray-300 flex-grow m-3" />
                    <div className="flex justify-between">
                        <p className="mt-1 max-w-2xl text-lg leading-6 text-gray-800">Total</p>
                        <p className="mt-1 max-w-2xl text-lg leading-6 text-gray-800">{formatCurrency(calculateTotalPrice())}</p>
                    </div>
                    <div className="flex w-full justify-center items-center px-12 my-3">
                        <CustomButton label="Finalizar compra" handleCliclk={() => finishOrder()} />
                    </div>
                    <Modal isOpen={open} onClose={() => setOpen(false)} title="Parabéns!" description="Description"></Modal>
                    <div className="mt-12">
                        <p className="mt-1 text-sm leading-6 text-gray-600 underline">Ajuda</p>
                        <p className="mt-1 text-sm leading-6 text-gray-600 underline">Reembolso</p>
                        <p className="mt-1 text-sm leading-6 text-gray-600 underline">Entregas e Frete</p>
                        <p className="mt-1 text-sm leading-6 text-gray-600 underline">Trocas e Devoluções</p>
                    </div>
                </div>
            </div>
        </LayoutShellProps>
    );
}

export default Catalog;
