import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface MiniChartProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    /*
    href?: string;*/
     //children = content
    data?: any;
}