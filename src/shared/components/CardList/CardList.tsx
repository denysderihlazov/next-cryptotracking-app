import { CardListProps } from "./CardList.props";
import styles from "./CardList.module.css";
import React, { useState, useEffect } from 'react';
import { Card } from "../Card/Card";
import { Search } from "../Search/Search";
import cookie from "js-cookie";


export const CardList = ({ children, ...props }: CardListProps): JSX.Element => {
    const [citiesList, setCitiesList] = useState(['London', 'Vien']) // 👉️ | []


    //const [citiesList, setCitiesList] = useState<string[]>(localStorage.getItem['citiesList']);



    return (
        <div
            className={styles.CardList}
            {...props}
        >
        {
            citiesList.map(city => <Card key={city} city={city} temperature={0} />)
        }    
        </div>  
    )
};

