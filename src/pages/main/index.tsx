import { useAuth } from "@/context/auth-context";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Main() {
    const { isAuthenticated, logout } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!isAuthenticated) {
            router.push("/login");
        }
    }, [isAuthenticated, router]);

    return (
        <div className="flex h-screen items-center justify-center flex-col">
            <h1 className="text-4xl font-bold">Página Principal</h1>
            <button onClick={logout} className="mt-5 bg-red-500 text-white py-2 px-4 rounded-md">
                Sair
            </button>
        </div>
    );
}
