function onOptionSelected(){
    var x = document.getElementsByClassName("selected");
    for(var i =0; i < x.length;i++){
        x[i].classList.remove("selected");
    }
}

$(document).click(function(event) {
    var element = event.target;
    console.log(element.classList);
    if(element.classList.contains("option")){
        if(element.classList.contains("selected"))return;
        element.classList.add("selected");
    }
    var eid = element.id;
    console.log("element id "+eid);
    if(eid == "linkedin") window.open("https://www.linkedin.com/in/vikas-jilla-95356657");
    else if(eid == "github") window.open("https://github.com/VikasJilla");
    else if(eid == "wordpress") window.open("https://vikasjilla.wordpress.com");
});

window.addEventListener("resize", onWindowResize);
function onWindowResize(){
    var w = $(document).width()*0.2;
    if(w<200){
        document.getElementById("content_holder").style.flexDirection = "column";
        var elements = document.getElementsByClassName('externalProfile');
        for(var i = 0;i< elements.length;i++){
            elements[i].classList.add("externalProfileMobile");
        }
    }else{
        document.getElementById("content_holder").style.flexDirection = "row";
        var elements = document.getElementsByClassName('externalProfileMobile');
        for(var i = 0;i< elements.length;i++){
            elements[i].classList.remove("externalProfileMobile");
        }
    }
}

window.onload = function() {
    onWindowResize();
};