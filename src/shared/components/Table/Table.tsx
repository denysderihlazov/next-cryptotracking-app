
import React, { useState, useEffect } from 'react';
import { Input } from '../';
import styles from "./Table.module.css";

export const Table = (props) => {


    const [search, setSearch] = useState("");
    const [crypto, setCrypto] = useState([]);

    useEffect(() => {

        const fetchData = async () => {
            await fetch(`https://api.coinstats.app/public/v1/coins?skip=0&limit=100¤cy=USD`)

                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    setCrypto(data.coins)
                })
        };

        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    return (
        <div

            {...props}
        >
            <h1>All Cryptocurrencies</h1>
            <Input
                type="text"
                placeholder="Search..."
                onChange={(e) => {
                    setSearch(e.target.value);
                }}
            />
            <table className={styles.table}>
                <thead>
                    <tr>
                        <td>Rank</td>
                        <td>Name</td>
                        <td>Symbol</td>
                        <td>Total Supply</td>
                        <td>Market Cap</td>
                        <td>Price</td>
                        <td>Volume(24hrs)</td>
                    </tr>
                </thead>
                {/* Mapping all the cryptos */}
                <tbody>
                    {/* Filtering to check for the searched crypto */}
                    {crypto
                        .filter((val) => {
                            return val.name.toLowerCase().includes(search.toLowerCase());
                        })
                        .map((val, id) => {
                            return (
                                <React.Fragment key={id}>
                                    <tr id={id.toString()}>
                                        <td>{val.rank}</td>
                                        <td>
                                            <a href={val.websiteUrl}>
                                                <picture>
                                                    <img src={val.icon} alt="logo" width="30px" />
                                                </picture>
                                            </a>

                                            <p>{val.name}</p>

                                        </td>
                                        <td className="symbol">{val.symbol}</td>
                                        <td>${(val.totalSupply / 1000000).toFixed(0)} K</td>
                                        <td>${(val.marketCap / 1000000000).toFixed(1)} B</td>
                                        <td>${val.price < 0.01 ? val.price.toFixed(4) : val.price.toFixed(2) }</td>
                                        <td>${(val.volume / 1000000000).toFixed(1)} B</td>
                                    </tr>
                                </React.Fragment>//val.price.toFixed(4)
                            );
                        })}
                </tbody>
            </table>
        </div>
    );
};



