
$(document).ready(function() {
	$('#multiscroll').multiscroll({
    anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage'],
    menu: '#myMenu',
		verticalCentered : true,
		scrollingSpeed: 700,
		easing: 'easeInQuart',
		menu: true,
		sectionsColor: [],
		navigation: true,
		navigationPosition: 'right',
		navigationColor: '#000',
		navigationTooltips: [],
		loopBottom: false,
		loopTop: false,
		css3: false,
		paddingTop: 0,
		paddingBottom: 0,
		normalScrollElements: null,
		scrollOverflow: false,
		scrollOverflowOptions: null,
		keyboardScrolling: true,
    touchSensitivity: 5,
    sectionsColor: ['#000000', '#ffffff', '#000000', '#ffa841', '#000'],

		//responsive
		responsiveWidth: 0,
		responsiveHeight: 0,
		responsiveExpand: false,

		// Custom selectors
		sectionSelector: '.ms-section',
		leftSelector: '.ms-left',
		rightSelector: '.ms-right',

		//events
		onLeave: function(index, nextIndex, direction){},
		afterLoad: function(anchorLink, index){},
		afterRender: function(){},
		afterResize: function(){},
	});
});
$('.button').click(function(){
	$('.modal').css('display','flex');
});
$('.modal').click(function(){
	$('.modal').css('display','none');
});

