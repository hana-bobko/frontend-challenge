"use client";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Home() {
    const router = useRouter();

    useEffect(() => {
        localStorage.setItem("isAuth", "false");
        router.push("/catalog/");
    }, [router]);

    return null;
}
