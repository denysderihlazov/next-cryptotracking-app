import { CardProps } from "./Card.props";
import styles from "./Card.module.css";
import cn from 'classnames';


export const Card = ({ temperature, city, ...props }: CardProps): JSX.Element => {
    /*const data = useWeather(city);
    if (!data) return null;
    const { name, weather, main } = data;*/ //destructing of obj
    //const { description, icon } = weather[0];
    //const { temp, humidity, feels_like } = main;

    const citiesList = []

    return (
        <div
            className={styles.Card}
            {...props}
        >
            <h1 className={styles.MainInfo}>{city}</h1>
            <h1 className={styles.Temperature}>{temperature}</h1>
        </div>
    )
};