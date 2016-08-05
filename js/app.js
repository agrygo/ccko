//Model
var cats = [
		{
			name: 'Blacky',
			clickCount: 0,
			imgSrc: "images/Blacky.jpg",
			nicknames: ['dark']
		},
		{
			name: 'Fluffy',
			clickCount: 0,
			imgSrc: "images/Fluffy.jpg"
		},
		{
			name: 'Lazy',
			clickCount: 0,
			imgSrc: "images/Lazy.jpg"
		},
		{
			name: 'Tabby',
			clickCount: 0,
			imgSrc: "images/Tabby.jpg"
		},
		{
			name: 'Zule',
			clickCount: 0,
			imgSrc: "images/Zule.jpg"
		}
];

//make ViewModel
var ViewModel = function () {
	var self = this;  //access outer 'this' of the view model

	this.catList = ko.observableArray([]);

	cats.forEach(function(catItem){
		self.catList.push( new Cat(catItem));
	});

	this.currentCat = ko.observable(this.catList()[0]);

	this.setCurrentCat =  function(clickedCat){
		console.log("name clicked");
		self.currentCat(clickedCat);
		//this.currentCat();
	};

	//sets click count
	this.incrementCounter = function() {
		self.currentCat().clickCount(self.currentCat().clickCount() + 1);
	};
}

var Cat = function (data) {
	this.clickCount = ko.observable(data.clickCount);
	this.name = ko.observable(data.name);
	this.level = ko.computed(function(){
		if (this.clickCount() < 5 ) {
			return "kitten";
		}else if (this.clickCount() < 20 ){
			return "teen";
		}else {
			return "adult";
		}
	}, this);
	this.imgSrc = ko.observable(data.imgSrc);
	this.imgAttribution = ko.observable(data.imgAttribution);

	this.nicknames = ko.observableArray(data.nicknames);
}


//apply bindings to ViewModel
ko.applyBindings (new ViewModel());