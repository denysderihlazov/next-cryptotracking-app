import { DetailedHTMLProps, HTMLAttributes} from "react";

export interface TableProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    /*
    href?: string;*/
     //children = content
    data?: any;
}