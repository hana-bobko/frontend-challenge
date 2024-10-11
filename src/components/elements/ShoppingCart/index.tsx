import { ShoppingCart } from "lucide-react";

/**
 * @O_NOME_CART_FOI_ESCRITO_SEM_O_T_PROPOSITALMENTE_DEVIDO_A_CONFLITO_COM_O_NOME_DO_ICONE
 */
type ShoppingCarProps = {
    pop: number;
};

export default function ShoppingCar({ pop }: ShoppingCarProps) {
    return (
        <div className="flex">
            <ShoppingCart size={24} className="text-gray-800" />
            {pop > 0 && <div className="flex items-center justify-center bg-emerald-500 w-6 h-6 rounded-full text-white">{pop}</div>}
        </div>
    );
}
