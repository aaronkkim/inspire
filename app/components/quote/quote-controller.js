(function () {

	//Get your QuoteService
	var qs = new QuoteService

	var vm = new Vue({
		el: '#quote',
		data: {
			saying: {}
		},

		computed: {
			displayQuote: function () {
			
				if (this.saying.id) {
					return {
						quote: this.saying.quote,
						author: this.saying.author
					}
				}
				return {
					quote: "if(sad() === true){sad().stop();beAwesome();}",
					author:"Aaron Kim"
				}
			}
		},
		mounted: function () {
			
			qs.getQuote()
				.then(function (res) {
					vm.saying = res	
				})
				.catch(console.error)
		}
	})

} ())
