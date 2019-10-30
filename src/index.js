import API from './Requests';
import UI from './UI';
import ChartJS from './ChartJS';

const request = new API();
const ui = new UI();
const chart = new ChartJS();

request.fetchData().then(data => {
    console.log(data)
    if (data) {
        ui.render(data);
        ui.setIcons(data.currently.icon, document.querySelector('.icon'));
        chart.updateTimeAndDate(data);
    }
});
