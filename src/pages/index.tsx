import { GetStaticProps } from "next";
import React, { Children, useState } from "react";
import { Button, Htag, P, Tag, CoinPriceChart, MiniChart, MiniChartSecond, MiniChartThird, MiniChartFourth, Table } from '../shared/components';
import { withLayout } from "../shared/layouts/Layout";


function Home(): JSX.Element {
    const [coinData, setCoinData] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    const [rating, setRating] = useState<number>(4);

    return (
        <>
            <CoinPriceChart></CoinPriceChart>
            <MiniChart></MiniChart>
            <MiniChartSecond></MiniChartSecond>
            <MiniChartThird></MiniChartThird>
            <MiniChartFourth></MiniChartFourth>
            <Table></Table>
        </>
    );
}

export default withLayout(Home);