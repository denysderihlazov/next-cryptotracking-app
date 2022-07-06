import { ReactNode } from "react";

export interface HtagProps {
    tag: 'h1' | 'h2' | 'h3' | 'h1_shadow' | 'h2_shadow' | 'h3_shadow';
    children: ReactNode;
}