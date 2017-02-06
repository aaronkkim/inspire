function ImageService() {
	var url = 'http://bcw-getter.herokuapp.com/?url=';
	var url2 = 'http://www.splashbase.co/api/v1/images/random'
	var apiUrl = url + encodeURIComponent(url2);

	this.getImage = function (callWhenDone) {
		// ^^^^^^^ How do you use this?
		return  fetch(apiUrl)
			.then(res=>res.json())
			
			//What are you going to do with the image that comes back?
		}
	}

