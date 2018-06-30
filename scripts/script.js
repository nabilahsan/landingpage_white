 
 var myVar = setTimeout(myTimer, 4000); //start running function after 4seconds
 
 function myTimer(){
  var scroll = new SmoothScroll(); //using smoothscroll libraary
  var anchor = document.querySelector('#defn'); //where it is scrolling to
  var toggle = document.querySelector('#space'); //where it is scrolling from
  var options = {speed: 3000, easing: 'easeOutCubic', updateURL: false}; //speed: how long it scrolls, easing is the transition effect
  scroll.animateScroll(anchor, toggle, options);
}