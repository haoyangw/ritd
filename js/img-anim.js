var list = new Array();
var increment = 0;

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
$("#deactive").attr('src', list[increment]);


//$("#active").attr('src', list[increment]);

setTimeout(function(){
    Materialize.fadeOutImage("#deactive");
    increment++;

    if(increment == list.length){
        increment = 0;
    }

    //$("#deactive").attr('src', list[increment]);

    //Materialize.fadeInImage('#deactivate');
    setTimeout(function() {
      rotate();
    }, 1400);


    /**$("#deactive").fadeIn(1000, function(){
        rotate();
    });**/
}, 4000);
}
