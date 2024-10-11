import Logo from "../../../../public/images/oderco-logo.png";
import ShoppingCar from "@/components/elements/ShoppingCart";
import { Button } from "@/components/ui/button";
export default function Header() {
    return (
        <div className="flex justify-between border border-gray-200 rounded-sm w-full h-28 items-center py-4">
            <img src={Logo?.src} alt="logo" className="w-80 h-24 my-2" />
            <div className="flex justify-between w-52 px-6">
                <ShoppingCar pop={3} />
                <Button className="bg-sky-600">
                    <strong>Entrar</strong>
                </Button>
            </div>
        </div>
    );
}
