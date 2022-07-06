import { SearchProps } from "./Search.props";
import styles from "./Search.module.css";
import cn from 'classnames';
import { Input } from "../Input/Input";
import { Button } from "../Button/Button";
import { useEffect, useState } from "react";
import GlassIcon from './glass.svg';


import { cookies } from "../../libs/setCookie";

export const  Search = ({ className, ...props }: SearchProps): JSX.Element => {
    
    const [inputValue, setInputValue] = useState<string>("");
    const [citiesList, setCitiesList] = useState([]);

    const handleOnClick = () => {
        setCitiesList((currentArray) => [...currentArray, inputValue])   
    }

    const handleOnChange = (event) => {
        setInputValue(event.target.value);
    }
    
    return (
        <div className={cn(className, styles.search)} {...props} >
            <Input
                className={styles.input}
                placeholder="Search..."
                value={inputValue}
                onChange={handleOnChange}

            />
            <Button
                appearance="primary"
                className={styles.button}
                onClick={handleOnClick}
            >
                <GlassIcon />
            </Button>
        </div>
    )
};


/* 


    const handleOnClick = () => {
        setCitiesList((currentArray) => [...currentArray, inputValue])
        console.log(citiesList, "FROM SEARCH")
        cookie.set("citiesList", JSON.stringify(citiesList))
    }

    const handleOnChange = (event) => {
        setInputValue(event.target.value);
    }

*/


/*
function setCookie() {
    setCitiesList((currentArray) => [...currentArray, inputValue])
    console.log(citiesList)
    //cookie.set("setCities", JSON.stringify(setCities))
    const date = new Date("June 25, 2022");
    const dateString = date.toTimeString();
    if (citiesList != []){
        const cookieString = ("citiesList"+ JSON.stringify(citiesList)+ dateString)
        document.cookie = cookieString;
    }
    console.log(citiesList)

}
*/


    /*
    useEffect(() => {
        setCookie(citiesList)
    }, [citiesList]);

    function setCookie(citiesList) {
        if (citiesList.length){
            Cookies.set('coinSearch', JSON.stringify(citiesList))
        }
    }
    */