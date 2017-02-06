(function () {

	//Your ImageService is a global constructor function what can you do here if you new it up?

	var is = new ImageService()

	var vm = new Vue({
		el: '#image',
		data: {
			image: {}
		},

		computed: {
			displayImage: function () {

				if (this.image.large_url) {
					return {

						imageUrl: 'url("' + this.image.large_url + '")',

					}
				}
				if (this.image.url) {
					return {

						imageUrl: 'url("' + this.image.url + '")',
					}

				}
				return {

					imageUrl: "url(https://source.unsplash.com/1600x900/?nature)"
				}

			},
			bstyle: function () {
				return { "background-image": this.displayImage.imageUrl  }
			}
		},
		mounted: function () {
			is.getImage()
				.then(function (res) {

					vm.image = res
				})
				.catch(console.error)
		}
	
	})
} ())
