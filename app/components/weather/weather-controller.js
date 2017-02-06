(function () {

	var wc = this;
	var weatherService = new WeatherService();

	// weatherService.getWeather(function(weather){
	// 	console.log(weather);
	// 	//What can you do with this weather object?


	// })

	new Vue({
		el: '#weather',
		data: {
			weather: {},
			tempF: true
		},
		mounted: function () {
			weatherService.getWeather(this.setWeather)
		
		},
		methods: {
			setWeather: function (weather) {
				this.weather = JSON.parse(weather);

			}
		},
		computed: {
			displayWeather: function () {
				
				if (this.weather.id) {
					return {
	tempF: ((this.weather.main.temp*(9/5))-459.67).toFixed()+ " degrees Farenheit",
	tempC:(this.weather.main.temp - 273.12).toFixed()+" degrees Celsius",
	town: this.weather.name
					}
				}
				return {
					temp: "Loading",
					tempC:"",
					town: "Did you mean Mordor"
				}

			}
		}
	})
} ())
