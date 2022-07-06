export const options = {
    plugins: {

        // show legends for our graph
        legend: {
            display: false,
        },

    },
    lineHeightAnnotation: {
        always: true,
        lineWeight: 1,
    },

    //   animate in
    animation: {
        duration: 0.2,
    },


    //   show the x and y scales
    scales: {
        x: {
            display: true,
            ticks: {
                maxRotation: 0,
                maxTicksLimit: 5,

            }
        },
        y: {
            display: true
        },
    },
    time: {
        useUTC: true
    },
};
