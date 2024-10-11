import React, { useState } from "react";
import LayoutShellProps from "@/components/layouts/shell";
import CartItem from "@/components/elements/CartItem";
import CustomButton from "@/components/CustomButton";
function Catalog() {
    return (
        <LayoutShellProps>
            <div className="flex w-full h-full justify-center items-start border border-gray-200 rounded-sm p-3">
                <div className="flex-col w-full h-full justify-center items-center">
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Seu carrinho</h1>
                    <div className="flex max-w-xl justify-between my-3">
                        <p className="mt-1 max-w-2xl text-lg leading-6 text-gray-800">Total (3 itens)</p>
                        <p className="mt-1 max-w-2xl text-lg font-semibold leading-6 text-gray-800">R$ 3.000,00</p>
                    </div>
                    <CartItem />
                </div>
                <div className="flex-col w-full h-full border border-gray-200 rounded-sm p-3">
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900 my-3">Resultado do pedido</h1>
                    <div className="flex justify-between">
                        <p className="mt-1 max-w-2xl text-lg leading-6 text-gray-800">Subtotal</p>
                        <p className="mt-1 max-w-2xl text-lg leading-6 text-gray-800">R$ 3.000,00</p>
                    </div>
                    <div className="flex justify-between">
                        <p className="mt-1 max-w-2xl text-lg leading-6 text-gray-800">Entrega</p>
                        <p className="mt-1 max-w-2xl text-lg leading-6 text-gray-800">R$ 100,00</p>
                    </div>
                    <div className="border-t border-gray-300 flex-grow m-3" />
                    <div className="flex justify-between">
                        <p className="mt-1 max-w-2xl text-lg leading-6 text-gray-800">Total</p>
                        <p className="mt-1 max-w-2xl text-lg leading-6 text-gray-800">R$ 3.100,00</p>
                    </div>
                    <div className="flex w-full justify-center items-center px-12 my-3">
                        <CustomButton label="Finalizar compra" handleCliclk={() => console.log("cliquei")} />
                    </div>
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
