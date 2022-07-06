
import { ChartProps } from "./Chart.props";
import styles from "./Chart.module.css";
import React, { useState, useEffect, useRef } from 'react';
import { Button } from "../Button/Button";
import { options } from "./ChartConfig.js";
import { Chart as ChartJS, ArcElement, CategoryScale, LinearScale, PointElement, LineElement, Filler, Tooltip, Legend, ScriptableContext, } from "chart.js";
import { Chart as ReactChart, Line } from "react-chartjs-2";

import Cookies from 'js-cookie'

import coinGecko from "../../../apis/coinGecko";

ChartJS.register(ArcElement, Tooltip, Filler, Legend, CategoryScale, LinearScale, PointElement, LineElement);


export const CoinPriceChart = (props) => {

    const [timeFormat, setTimeFormat] = useState("30d");
    const [coinPrice, setCoinPrice] = useState([]);
    const [coinHistory, setCoinHistory] = useState([]);
    const x = [];
    const y = [];




    useEffect(() => {

        const fetchData = async () => {
            await fetch(`https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=${timeFormat}`)

                .then((response) => {
                    return response.json();

                })
                .then((data) => {
                    for (let i = 0; i < data.prices.length; i++) {
                        x.push(data.prices[i][1])
                        setCoinPrice(x)
                    }

                    for (let i = 0; i < data.prices.length; i++) {
                        if (timeFormat == "1d"){
                            y.push(new Date(data.prices[i][0]).toLocaleTimeString("en-GB", {timeStyle: "short", hour12: true}))
                            setCoinHistory(y)
                        } 
                        if (timeFormat == "7d"){
                            y.push(new Date(data.prices[i][0]).toLocaleDateString("en-GB", {weekday:"short"}))
                            setCoinHistory(y)
                        }
                        if (timeFormat == "30d"){
                            y.push(new Date(data.prices[i][0]).toLocaleDateString("en-GB", {month: "short", day: "numeric"}))
                            setCoinHistory(y)
                        } 
                        if (timeFormat == "365d"){
                            y.push(new Date(data.prices[i][0]).toLocaleDateString("en-GB", {month:"short", year:"numeric"}))
                            setCoinHistory(y)
                        } 
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
                pointRadius: 0,
                pointHoverRadius: 2,
                lineTension: 0.1,
                backgroundColor: (context: ScriptableContext<"line">) => {
                    const ctx = context.chart.ctx;
                    const gradient = ctx.createLinearGradient(0, 0, 0, 350);
                    gradient.addColorStop(0, "rgba(91,56,237,0.45)");
                    gradient.addColorStop(1, "rgba(91,56,237,0.0)");
                    return gradient;
                },
                borderColor: (context: ScriptableContext<"line">) => {
                    const ctx = context.chart.ctx;
                    const gradient = ctx.createLinearGradient(40, 0, 30, 350);
                    gradient.addColorStop(0.2, "rgba(97,137,197,255)");
                    gradient.addColorStop(0.4, "rgba(99,131,191,255)");
                    gradient.addColorStop(0.6, "rgba(94,105,191,255)");
                    gradient.addColorStop(0.8, "rgba(102,102,202,255)");
                    gradient.addColorStop(1, "rgba(202,146,189,255)");
                    return gradient;
                },
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
            <Line id="myChart" data={chart} options={options} />

            <div 
                className={styles.btn}
            >
                <Button
                    onClick={() => setTimeFormat("1d")}
                    appearance={"chart"} 
                >
                    Day
                </Button>
                <Button
                    onClick={() => setTimeFormat("7d")}
                    appearance={"chart"}
                >
                    Week
                </Button>
                <Button
                    onClick={() => setTimeFormat("30d")}
                    appearance={"chart"}
                >
                    Month
                </Button>
                <Button
                    onClick={() => setTimeFormat("365d")}
                    appearance={"chart"}                >
                    Year
                </Button>
            </div>
        </div>
    );
};



