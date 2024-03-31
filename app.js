
// annimation js
AOS.init();

 


// (function($){
// 	$(document).ready(function(){
// 		$('ul.dropdown-menu [data-toggle=dropdown]').on('click', function(event) {
// 			event.preventDefault(); 
// 			event.stopPropagation(); 
// 			$(this).parent().siblings().removeClass('open');
// 			$(this).parent().toggleClass('open');
// 		});
// 	});
// })(jQuery);


 

function openPage(pageName,elmnt,color) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "";
    }
    document.getElementById(pageName).style.display = "block";
    elmnt.style.backgroundColor = color;
  }
  
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();

 
 