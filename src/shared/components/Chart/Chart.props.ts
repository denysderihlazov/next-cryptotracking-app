import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface ChartProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    /*
    href?: string;*/
     //children = content
    data?: any;
}