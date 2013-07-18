var utils = function() {
	'use strict';
	function addClass(element, classString) {
		element.classList.add(classString);
	}
	function removeClass(element, classString) {
		element.classList.remove(classString);
	}
	function removeClasses(element, classArray) {
		var length = classArray.length,
			classList = element.classList
			i = length;

		for (i; i > 0; i--) {
			classList.remove(classArray[i]);
		}
	}
	function removeAllClassesExcept(element, classString) {
		element.className = classString;
	}
	return {
		addClass: addClass,
		removeClass: removeClass,
		removeAllClassesExcept: removeAllClassesExcept,
		removeClasses: removeClasses
	};
}();

var app = (function(document, utils, undefined) {
	'use strict';
	var buttonHello = document.getElementById('buttonHello'),
		buttonHi = document.getElementById('buttonHi');
		
	function init(){
		buttonHello.addEventListener('click', function(){
			utils.removeAllClassesExcept(buttonHello,'button');
			utils.removeAllClassesExcept(buttonHi,'button');
			utils.addClass(buttonHello,'translateBottom');
			utils.addClass(buttonHi,'translateTop');
		});
		buttonHi.addEventListener('click', function(){
			utils.removeAllClassesExcept(buttonHello,'button');
			utils.removeAllClassesExcept(buttonHi,'button');
			utils.addClass(buttonHello,'translateRight');
			utils.addClass(buttonHi,'translateLeft');
		});
	}
	
	return {
		init: init
	};
})(document,utils);

app.init();
