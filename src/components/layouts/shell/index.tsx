import React, { ReactNode } from "react";
import Header from "./header";

interface LayoutShellProps {
    children: ReactNode;
}
export default function LayoutShell({ children }: LayoutShellProps) {
    return (
        <div className="flex-1 flex-col ">
            <Header />
            <div className="flex justify-center items-center p-9 w-full h-full">{children}</div>
        </div>
    );
}
