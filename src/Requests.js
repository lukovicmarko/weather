import UI from './UI';

const ui = new UI();

class API {
    constructor() {
        this.urlWeather = 'https://api.darksky.net/forecast/';
        this.key = '20e8f2fabc210fc4ee36a26372f25520';
        this.units = 'si'
    }

    getLocation() {
        return new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject);
        });
    }

    async fetchData() {
        try {
            // Handle coordinates
            const { coords } = await this.getLocation();
            const { latitude, longitude } = coords;

            //weather data
            const responseWeather = await fetch(`https://cors-anywhere.herokuApp.com/${this.urlWeather}${this.key}/${latitude},${longitude}?units=${this.units}`);
            const weather = await responseWeather.json();
            return weather;

        } catch (error) {
            // Handle error
            console.error(error);
            ui.showMessage(error.message)
        }
    };
}

export default API;