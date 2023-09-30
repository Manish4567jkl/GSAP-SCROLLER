let activeComponent = 3;
let minCircles = document.querySelectorAll(".min-circle");
gsap.to(".circle", {
    rotate:0,
    ease:Expo.easeInOut,
    duration:2
})

gsap.to(minCircles[activeComponent-1],{
    opacity:0.5
})
minCircles.forEach((value,index) =>{
    value.addEventListener("click",function(){
        gsap.to(".circle",{
            rotate:(3-(index+1))*10,
            ease:Expo.easeInOut,
            duration:1
    })
        greyOut();
        gsap.to(this, {
            opacity:0.5
        })
        gsap.to(second[index],{
            opacity:0.4
        })
    })
})
function greyOut(){
    gsap.to(minCircles,{
        opacity:0.08
    })
}
