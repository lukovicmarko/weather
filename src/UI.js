import moment from 'moment';

class UI {
    constructor() {
        this.container = document.getElementById('container');
        this.weather = document.getElementById('weather');
        this.title = document.getElementById('title');
    }
    render(weather) {
        const { temperature, humidity, windSpeed, summary, pressure } = weather.currently;
        this.weather.innerHTML = `
                <div class="wrapper">
                    <h1 class="temp">
                    <canvas class="icon" width="128px" height="128px"></canvas>
                        ${Math.round(temperature)} ºC
                    </h1>
                    <p class="main">${summary}</p>
                    <p class="time">${moment().format("H:m MMM D")}</p>
                </div>
                <table class="items">
                    <tbody>
                        <tr class="item">
                            <td>
                                Wind
                            </td>
                            <td id="widget-wind">
                                ${windSpeed} m/s
                            </td>
                        </tr>
                        <tr class="item">
                            <td>
                                Humidity
                            </td>
                            <td>
                                ${humidity} %   
                            </td>
                        </tr>
                        <tr class="item">
                            <td>
                                Pressure 
                            </td>
                            <td>
                                ${pressure} hpa    
                            </td>
                        </tr>                     
                    </tbody>
                </table>
            `
        this.title.innerHTML = weather.timezone;
    }

    //replace api icons with skycons
    setIcons(icon, iconID) {
        const skycons = new Skycons({ "color": "#2b7a78" });
        const currentIcon = icon.replace(/-/g, "_").toUpperCase();
        skycons.play();
        return skycons.set(iconID, Skycons[currentIcon]);
    }

    showMessage(message) {
        this.container.innerHTML = '';
        this.container.innerHTML = `<h1 class="error">${message} !</h1>`
    }
}

export default UI;