// don't work when use add elent dynamically
// becasue .on() would only be added on existing element when declared
// $("li").on("click", function(){
//     $(this).toggleClass("completed");
// });

// so it need to be fixed to below
/*
    $("ul") -> need to be existing element when this code run
    .on(second arg = li) -> means run onClick() when <ul> child of <li> is clicked
*/
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});

$("i.fa-edit").on("click", function(){
    $("input[type='text'").fadeToggle();
})

$("ul").on("click", "span",function(ev){
    $(this).parent().fadeOut(300, function(){
        $(this).remove();
    });
    ev.stopPropagation();
});

$("input[type='text'").keypress(function(ev){
    if(ev.which === 13) {
        var text = $(this).val();
        //initialize input value to empty space
        $(this).val("");
        $("ul").append("<li><span><i class='far fa-trash-alt'></i></span> " + text + "</li>");
    }
});