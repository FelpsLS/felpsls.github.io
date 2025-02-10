function hamburg(){
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform = "translateY(0px)"
}
function cancel(){
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform = "translateY(-500px)"
    navbar.classList.toggle("dropdown")
}
// Typewriter Effect
const texts = [
    "Developer",
    "Pentester",
    "Ethical Hacker"
]
let speed  =100;
const textElements = document.querySelector(".typewriter-text");
let textIndex = 0;
let charcterIndex = 0;
function typeWriter(){
    if (charcterIndex < texts[textIndex].length){
        textElements.innerHTML += texts[textIndex].charAt(charcterIndex);
        charcterIndex++;
        setTimeout(typeWriter, speed);
    }
    else{
        setTimeout(eraseText, 1000)
    }
}
function eraseText(){
    if(textElements.innerHTML.length > 0){
        textElements.innerHTML = textElements.innerHTML.slice(0,-1);
        setTimeout(eraseText, 50)
    }
    else{
        textIndex = (textIndex + 1) % texts.length;
        charcterIndex = 0;
        setTimeout(typeWriter, 500)
    }
}
window.onload = typeWriter
document.addEventListener("DOMContentLoaded", function(){
    const sections = document.querySelectorAll("section");
    let currentIndex = 0;
    let isScrolling = false;

    function scrollToSection(index){
        if(index >= 0 && index < sections.length){
            sections[index].scrollIntoView({behavior: "smooth"});
            currentIndex = index;
        }
    }

    window.addEventListener("wheel", function(event){
        if(isScrolling) return;

        isScrolling = true;
        setTimeout(() => isScrolling = false, 800);

        if(event.deltaY > 0){
            if(currentIndex < sections.length - 1){
                scrollToSection(currentIndex + 1);
            } 
        } else {
            if(currentIndex > 0){
                scrollToSection(currentIndex - 1);
            }
        }
    })
})