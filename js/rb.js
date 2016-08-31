$(window).load(function(){
  var colors = ["#26c6da", "#ffea00", "#ffa726", "#00e676", "#e040fb"];
  var index = 1;
  change();

  function change() {

  setTimeout(function() {
    if(index === colors.length) {
      index = 0;
    }
    document.getElementById('main').style.color = colors[index];
    console.log(colors[index]);
    index++;
    change();
  }, 5000);
}

});
