import styles from "./Menu.module.css";
import cn from 'classnames';
import {Htag, P, PMenu, Search } from '../../components';



export const Menu = ({className}): JSX.Element => {
    return (
        <div className={styles.menuFirstLevel} >
            <Htag tag='h1'>Crypto Advizor</Htag>
            <Search />
            <div className={cn(className, styles.secondBlock)}>
                    <PMenu size="m">Trade</PMenu>
                    <PMenu size="m">Deposits</PMenu>
                    <PMenu size="m">Protocols</PMenu>
                    <PMenu size="m">Settings</PMenu>
                    <PMenu size="m">Profile</PMenu>
            </div>
        </div>
    );
};