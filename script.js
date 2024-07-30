
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function circleMouseFollower(){
    window.addEventListener("mousemove", function(dets){
        console.log(dets);
        document.querySelector("#minicircle").style.transform=`translate(${dets.clientX}px, ${dets.clientY}px)`;
    })
}
circleMouseFollower();

function firstpageAnim(){
    var tl = gsap.timeline();
    tl.from("#nav",{
        y :'-100',
        opacity:0,
        ease: Expo,
        duration: 1.1,
    })
    .to(".boundingelem",{
        y:'-20',
        ease: Expo.easeInOut,
        duration: 1,
        
    })
    .from("#footer",{
        y: '-1000',
        opacity:0,
        ease:Expo.easeInOut,
        duration:1,
        
        
    })
}

function mouseskiew(){
    var xscale = 1;
    var yscale =2;

    var xprev = 0;
    var yprev = 0;

    window.addEventListener("mouseskiew", function (dets){
        var xdiff = dets.clientX - xprev;
        var ydiff = dets.clientX - yprev;

        xprev = dets.clientX;
        yprev = dets.clientY;

       xscale = gsap.utils.clamp(.40,8.8, xdiff);
       yscale = gsap.utils.clamp(.40,8.8, ydiff);
    })

    document.querySelectorAll(".elemlast") .forEach(function(elemlast) {
        elemlast.addEventListener("mouseskiew", function(dets){
            var diff = dets.clientY - elem.getBoundingClientRect().top;
            gsap.to(elemlast.querySelector("img"),{
                opacity:1,
                ease: Power1,
                top:diff,
                left:dets.clientX,
            });
        });
    });



}
firstpageAnim();
mouseskiew();