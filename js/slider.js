var Slider = {
	//slider inteval
	interval: 0,
	//slider timer
	timer: "",
	//auto change images in slider
	carousel: function() {
		var wrapper = document.getElementById("sliderWrapper");
		var images = wrapper.children;
		var thumbnall = document.getElementById("sliderThumbnall");
		var a = thumbnall.children;
		for(var i = 0; i < images.length; i++ ) {
			if(images[i].hasAttribute("class")) {
				a[i].removeAttribute("class");
				images[i].removeAttribute("class");
				if(images[i+1] == undefined) {
					a[0].setAttribute("class", "active");
					images[0].setAttribute("class", "active");
				}
				else {
					a[i+1].setAttribute("class", "active");
					images[i+1].setAttribute("class", "active");
				break;
				}
			}
		}
		//change slider active
		},
	change: function(e) {
		if(e.target.localName == "img"){	
			clearInterval(this.timer);
			var element = e.target.parentElement;
			var wrapper = document.getElementById("sliderWrapper");
			var images = wrapper.children;
			var thumbnall = document.getElementById("sliderThumbnall");
			var a = thumbnall.children;
				for(var i = 0; i < images.length; i++) {
					images[i].removeAttribute("class");
					a[i].removeAttribute("class");
					if(!element.hasAttribute("class")) {
						element.setAttribute("class","active");
						wrapper.children[0].removeAttribute("class");
						wrapper.children[i].setAttribute("class","active");
					}
				}
		}
		setTimeout(Slider.start(5000))
	},
//start slider
	start: function(interval) {
		this.interval = interval;
		this.timer = setInterval(this.carousel, this.interval);
	},
}
document.addEventListener("click",function(e){
	Slider.change(e)
})