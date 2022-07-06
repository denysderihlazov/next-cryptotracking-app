import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface PMenuProps extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>{
    size?: 's' | 'm' | 'l';
    children: ReactNode;
    href?: string;
}