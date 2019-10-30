import moment from 'moment';

let myChart = document.getElementById('myChart').getContext('2d');

//Global options
Chart.defaults.global.defaultFontColor = '#000';

let weatherChart = new Chart(myChart, {
    type: 'line',
    data: {
        labels: [],
        datasets: [{
            label: 'Forecast',
            data: [],
            backgroundColor: 'rgba(255,255,255, 0.1)',
            borderColor: '#4BC0C0'
        }]
    },
    options: {
        legend: {
            display: false
        },
        scales: {
            yAxes: [{
                ticks: {
                    // Include a celsius sign in the ticks
                    callback: function (value) {
                        return value + " ºC";
                    }
                },
                gridLines: {
                    // color: '#2A7877'
                }
            }],
            xAxes: [{
                gridLines: {
                    // color: '#2A7877'
                }
            }]
        }
    }
})


class ChartJS {
    //update chart
    addData(chart, label, data) {
        chart.data.labels = label;
        chart.data.datasets[0].data = data;
        chart.update();
    }

    updateTimeAndDate(tempData) {
        const forecastResult = tempData.hourly.data;
        const forecastTemp = [];
        const forecastTime = [];
        const newTime = [];

        //get temp and date from forecast data
        forecastResult.forEach(item => {
            forecastTemp.push(item.temperature);
            forecastTime.push(item.time);
        });

        for (let i = 0; i <= 24; i++) {
            let time = moment(forecastTime[i] * 1000).format("H:mm") + 'h';
            newTime.push(time)
        }

        this.addData(weatherChart, newTime, forecastTemp);
    }
}

export default ChartJS;
