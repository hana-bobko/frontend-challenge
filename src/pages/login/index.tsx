import { useState } from "react";
import { useAuth } from "../../context/auth-context";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Logo from "../../../public/images/oderco-logo.png";
export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { login } = useAuth();
    const user = " user@email.com";
    const pass = " User123@";
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        login(email, password);
    };

    const Gamb = () => {
        return <p className="text-white">●</p>;
    };

    return (
        <div className="flex h-screen items-center justify-center">
            <form onSubmit={handleSubmit} className="bg-white border border-gray-300 flex-col justify-center items-center p-6 rounded-lg shadow-md w-auto">
                <img src={Logo?.src} alt="Logo" />
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    <Input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                        required
                        placeholder="Email"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Senha</label>
                    <Input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                        placeholder="Senha"
                        required
                    />
                </div>
                <div className="mb-4 flex items-center ">
                    <Button className="mt-5 bg-sky-600 text-white py-2 px-4 rounded-md w-full">Entrar</Button>
                </div>
                <span className="inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-sm font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20">
                    Use o e-mail <Gamb />
                    <strong>{user}</strong>
                    <Gamb /> e a senha
                    <Gamb /> <strong>{pass}</strong>
                </span>
            </form>
        </div>
    );
}
