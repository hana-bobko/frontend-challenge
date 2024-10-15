import React, { useEffect, useState } from "react";
import Logo from "../../../../public/images/oderco-logo.png";
import ShoppingCar from "@/components/elements/ShoppingCart";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/router";
import { useStore } from "@/hooks/use-store";
export default function Header() {
    const [auth, setAuth] = useState();
    const cart = useStore((state) => state.cart);
    const router = useRouter();
    useEffect(() => {
        const a = localStorage.getItem("isAuth");
        setAuth(a);
    }, [0]);
    async function navigate(route) {
        await router.push(route);
    }
    console.log(auth, "AUTHENCTI");
    const ButtonLogin = () => {};
    return (
        <div className="flex justify-between border border-gray-200 rounded-sm w-full h-28 items-center py-4">
            <img src={Logo?.src} alt="logo" className="w-80 h-24 my-2 cursor-pointer" onClick={() => navigate("/catalog")} />
            <div className="flex justify-between w-52 px-6">
                {(auth == "false" || auth == undefined) && <ShoppingCar handleClick={() => navigate("/cart")} pop={cart.length} />}
                {(auth == "true" && (
                    <Button
                        className="bg-red-600"
                        onClick={() => {
                            localStorage.removeItem("isAuth"), router.push("/catalog");
                        }}
                    >
                        <strong>Sair</strong>
                    </Button>
                )) ||
                    ((auth == "false" || auth == undefined) && (
                        <Button className="bg-sky-600" onClick={() => router.push("/login")}>
                            <strong>Entrar</strong>
                        </Button>
                    ))}
            </div>
        </div>
    );
}
