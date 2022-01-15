const animContainers = document.querySelectorAll(".anim-sec");

function animtSec(elements){
    for(element of elements){
        if(element.isIntersecting){
            element.target.classList.add("animate-os");
        }else{
            element.target.classList.remove("animate-os");
        }
    }
}

const options = {
    threshold: 1
};
 
const io = new IntersectionObserver(animtSec, options);

for (animContainer of animContainers){
    io.observe(animContainer);
}

