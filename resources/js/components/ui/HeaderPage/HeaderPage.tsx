import { ReactNode } from "react";

interface HeaderPageType {
    children: ReactNode;
}

export default function HeaderPage({ children }: HeaderPageType) {
    return <h2>{children}</h2>;
}
