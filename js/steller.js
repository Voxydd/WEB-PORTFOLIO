/*!
=========================================================
* Steller Landing page
=========================================================

* Copyright: 2019 DevCRUD (https://devcrud.com)
* Licensed: (https://devcrud.com/licenses)
* Coded by www.devcrud.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// smooth scroll
$(document).ready(function(){
	$("#hire-me").on('click', function(event) {
		$("#learn-more").on('click', function(event) {

    		if (this.hash !== "") {

				event.preventDefault();

				var hash = this.hash;

				$('html, body').animate({
				scrollTop: $(#"contact").offset().top
				scrollTop: $(#"portfolio").offset().top
				}, 700, function(){
				window.location.hash = hash;
				});
			}	
		});
    });
});