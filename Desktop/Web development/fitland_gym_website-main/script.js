const accordionBtns = document.querySelectorAll('.accordion');

accordionBtns.forEach(accordion => {
  
  accordion.addEventListener('click', () => {
    accordion.classList.toggle('is-open');
    let content = accordion.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + 'px';
    }
    

  })
  

})

// window.onclick = function(event) {
// if (!event.target.matches('.accordion')) {
//   var dropdowns = document.getElementsByClassName("accordion is-open");
//   var i;
//   for (i = 0; i < dropdowns.length; i++) {
//     var openDropdown = dropdowns[i];
//     if (openDropdown.classList.contains('is-open')) {
//       openDropdown.classList.remove('is-open');
//       let content = accordion.nextElementSibling;
//       content.style.maxHeight = null;
//     }
//   }
  
// }
// }
//use class list.add and remove to stop it from showing when not clicked

// for(i=0; i<=accordionBtns.length; i++){


// }