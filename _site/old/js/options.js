/** rsCard Options */
var rsOptions = {
    rtl: false,	
	timeline: {
		topSpace: 50,
		itemsSpace: 25		
	},
	refSlider: {		
		speed: 800, //Slide transition duration (in ms)		
		auto: false, //Slides will automatically transition
		pause: 6000, //The amount of time (in ms) between each auto transition
		autoHover: true, //Auto show will pause when mouse hovers over slider		
		adaptiveHeight: true, //Dynamically adjust slider height based on each slide's height
		adaptiveHeightSpeed: 500 //Slide height transition duration (in ms).
	},
	postSlider: {
		speed: 800, //Slide transition duration (in ms)
		auto: true, //Slides will automatically transition
		pause: 6000, //The amount of time (in ms) between each auto transition
		autoHover: true //Auto show will pause when mouse hovers over slider
	},
	clientsSlider: {
		items: 5,
		singleItem: false,
		autoPlay: true,
		stopOnHover: true,
		itemsDesktopSmall: [992, 4],
		itemsTabletSmall: [767, 3],
		itemsMobile: [320, 1]
    }	
};