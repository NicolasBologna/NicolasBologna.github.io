const dinamicURL = 'https://www.dinamicstudio.com/';
const pwcURL = 'https://www.pwc.com/';
function redirect(site){window.open(site, 'blank');} 

window.addEventListener("scroll", function() {
    var elementTarget = document.getElementById("portfolio-section");
    if (window.scrollY > (elementTarget.offsetTop + elementTarget.offsetHeight)) {
        elementTarget.getElementsByTagName("h4")[0].classList.add('loading');
    }
  });