
import styles from "./MiniChartThird.module.css";
import React, { useState, useEffect } from 'react';
import { P } from '../';
import { options } from "./ChartConfig.js";
import { Chart as ChartJS, ArcElement, CategoryScale, LinearScale, PointElement, LineElement, Filler, Tooltip, Legend, ScriptableContext, } from "chart.js";
import { Chart as ReactChart, Line } from "react-chartjs-2";
import { FaExchangeAlt } from 'react-icons/fa';

import coinGecko from "../../../apis/coinGecko";

ChartJS.register(ArcElement, Tooltip, Filler, Legend, CategoryScale, LinearScale, PointElement, LineElement);


export const MiniChartThird = (props) => {

    const [timeFormat, setTimeFormat] = useState("1d");
    const [coinPrice, setCoinPrice] = useState([]);
    const [coinHistory, setCoinHistory] = useState([]);
    const x = [];
    const y = [];


    useEffect(() => {
        const fetchData = async () => {
            await fetch(`https://api.coingecko.com/api/v3/coins/dogecoin/market_chart?vs_currency=usd&days=${timeFormat}`)

                .then((response) => {
                    return response.json();

                })
                .then((data) => {
                    for (let i = 0; i < data.prices.length; i++) {
                        x.push(data.prices[i][1])
                        setCoinPrice(x)
                    }

                    for (let i = 0; i < data.prices.length; i++) {
                        y.push(new Date(data.prices[i][0]).toLocaleTimeString("en-GB", {timeStyle: "short", hour12: true}))
                        setCoinHistory(y)
                    }

                })
        };

        fetchData();
          // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [timeFormat]);



    const chart = {
        labels: coinHistory,
        datasets: [
            {
                data: coinPrice,
                lineTension: 0.1,
                pointRadius: 0,
                borderColor: (context: ScriptableContext<"line">) => {
                    const ctx = context.chart.ctx;
                    const gradient = ctx.createLinearGradient(20, 50, 200, 0);
                    gradient.addColorStop(0, "rgba(246,142,126,255)");
                    gradient.addColorStop(1, "rgba(241,201,121,255)");
                    return gradient;
                },
                backgroundColor: 'transparent',
                fill: true,


            }
        ],
        options: {
            ...options
        },
    };

    return (
        <div
            className={styles.Chart}
            {...props}
        >
            <div className={styles.info}><P size="s">DOGE <FaExchangeAlt />USDT</P>     <P>{((parseFloat(coinPrice[coinPrice.length -1]) - (parseFloat(coinPrice[0]))) / (parseFloat(coinPrice[0]))*100).toFixed(2)}%</P></div>
            <P>{parseFloat(coinPrice[coinPrice.length -1]).toFixed(3)}$</P>
            <Line id="myChart" data={chart} options={options} />

            
        </div>
    );
};



