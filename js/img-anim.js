var list = new Array();
var increment = 0;
var img;

$(function(){
$.when(
    $("#image_preload img").each(function(i, e){
        image = $(this).attr('src');
        list.push(image);
    })
).then(function(){
    rotate()
});
});

function rotate(){
img = document.getElementById('deactive');
$("#deactive").attr('src', list[increment]);
img.style.opacity = "1";
//$("#active").attr('src', list[increment]);

setTimeout(function(){
    Materialize.fadeOutImage("#deactive");
    increment++;

    if(increment == list.length){
        increment = 0;
    }

    img.style.opacity = "0";
    //$("#deactive").attr('src', list[increment]);
    setTimeout(function() {
      Materialize.fadeInImage('#deactivate');
    }, 1400);

    setTimeout(function() {
      rotate();
    }, 1400);


    /**$("#deactive").fadeIn(1000, function(){
        rotate();
    });**/
}, 4000);
}
