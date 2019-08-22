var page = document.getElementsByClassName("page");
var btn = document.getElementsByClassName("button");
var index = 0;
btn[0].style.opacity = 0;
page[0].style.background = "#FF2D52";
for(var i = 0; i < page.length; i++) {
	page[i].onclick = function() {
		for(var v = 0; v < page.length; v++) {
			page[v].style.background = '#FFFFFF'
		}
		index = this.getAttribute("index");
		page[index].style.background = '#FF2D52';
		if(index != 0) {
			btn[0].style.opacity = 1;
		} else if(index == 0) {
			btn[0].style.opacity = 0;

		}
		if(index == 3) {
			btn[1].style.opacity = 0;
		} else {
			btn[1].style.opacity = 1;
		}
	}
}

//var btn = document.querySelectorAll('button');

btn[0].onclick = function() {
	for(var v = 0; v < page.length; v++) {
		page[v].style.background = '#FFFFFF'
	}
	if(index == 1) {
		page[0].style.background = '#FF2D52';
		index = 0;
		btn[0].style.opacity = 0;
	} else if(index == 2) {
		page[1].style.background = '#FF2D52';
		index = 1;
	} else if(index == 3) {
		page[2].style.background = '#FF2D52';
		index = 2;
		btn[1].style.opacity = 1;
	}

}
btn[1].onclick = function() {
	for(var v = 0; v < page.length; v++) {
		page[v].style.background = "#FFFFFF"
	}
	if(index == 0) {
		page[1].style.background = '#FF2D52';
		index = 1;
		btn[0].style.opacity = 1;
	} else if(index == 1) {
		page[2].style.background = '#FF2D52';
		index = 2;
	} else if(index == 2) {
		page[3].style.background = '#FF2D52';
		index = 3;
		btn[1].style.opacity = 0;
	}

}