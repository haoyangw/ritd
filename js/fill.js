$(window).load(function(){
  var body = document.body,
    html = document.documentElement,
    header = document.getElementById('header'),
    main = document.getElementById('main'),
    footer = document.getElementById('footer');

var height1 = Math.max( body.scrollHeight, body.offsetHeight,
                       html.clientHeight, html.scrollHeight, html.offsetHeight );
var main = document.getElementById('main');
var height = height1 - $('#header').height() - $('#footer').height() - $('#main').height();
//console.log(height, "vs", height1);
main.style.paddingTop = (height/2)-0.25 + "px";
main.style.paddingBottom = (height/2)-0.25 + "px";
});
