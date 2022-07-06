import { PMenuProps } from "./PMenu.props";
import styles from "./PMenu.module.css";
import cn from 'classnames';


export const PMenu = ({ size = 'm', children, href, className, ...props }: PMenuProps): JSX.Element => {
    return (
        <p
            className={cn(styles.p, className, {
                [styles.s]: size == 's',
                [styles.m]: size == 'm',
                [styles.l]: size == 'l',
            })}
            {...props}
        >
            {children}
        </p>
    )
};