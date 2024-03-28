
// annimation js
AOS.init();

// document.querySelector('.mobile').style.display = "none";

// function handleMenu() {
//     document.querySelector('.mobile').style.display = "flex";
// }

// function handleClose() {
//     document.querySelector('.mobile').style.display = "none";
// }
///////////////////


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

//  use cases 
//  let items = document.querySelectorAll('.carousel .carousel-item')

// 		items.forEach((el) => {
// 			const minPerSlide = 4
// 			let next = el.nextElementSibling
// 			for (var i=1; i<minPerSlide; i++) {
// 				if (!next) {
//             // wrap carousel by using first child
//             next = items[0]
//         }
//         let cloneChild = next.cloneNode(true)
//         el.appendChild(cloneChild.children[0])
//         next = next.nextElementSibling
//     }
// })