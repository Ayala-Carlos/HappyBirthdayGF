const startBtn = document.getElementById("startBtn");

startBtn.onclick = () => {
gsap.to("#intro-screen",{
opacity:0,
duration:1,
onComplete:()=>{
document.getElementById("intro-screen").style.display="none";
}
})
}

document.addEventListener("click",function(e){

const heart = document.createElement("div");

heart.innerHTML="💗";
heart.style.position="fixed";
heart.style.left=e.clientX+"px";
heart.style.top=e.clientY+"px";
heart.style.fontSize="30px";

document.body.appendChild(heart);

gsap.to(heart,{
y:-150,
opacity:0,
duration:2,
onComplete:()=>heart.remove()
})

})

// Cursor following effect
const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

// Typing effect for greeting
const greetingText = "Nicole… hoy es un día muy especial, porque nació la persona que hace mis días más bonitos.  💖";
const greetingElement = document.querySelector('.greeting');
let charIndex = 0;

function typeGreeting() {
    if (charIndex < greetingText.length) {
        greetingElement.textContent += greetingText.charAt(charIndex);
        charIndex++;
        setTimeout(typeGreeting, 100);
    }
}

// Create floating elements
const floatingElements = ['💖', '✨', '🌸', '💫', '💕'];
function createFloating() {
    const element = document.createElement('div');
    element.className = 'floating';
    element.textContent = floatingElements[Math.floor(Math.random() * floatingElements.length)];
    element.style.left = Math.random() * 100 + 'vw';
    element.style.top = Math.random() * 100 + 'vh';
    element.style.fontSize = (Math.random() * 20 + 20) + 'px';
    document.body.appendChild(element);

    gsap.to(element, {
        y: -500,
        x: Math.random() * 100 - 50,
        rotation: Math.random() * 360,
        duration: Math.random() * 5 + 5,
        opacity: 1,
        ease: "none",
        onComplete: () => element.remove()
    });
}

// Initialize animations
window.addEventListener('load', () => {
    // Title animation
    gsap.to('h1', {
        opacity: 1,
        duration: 1,
        y: 20,
        ease: "bounce.out"
    });

    // Button animation
    gsap.to('.cta-button', {
        opacity: 1,
        duration: 1,
        y: -20,
        ease: "back.out"
    });

    // Start typing effect
    typeGreeting();

    // Create floating elements periodically
    setInterval(createFloating, 1000);
});

// Hover effects
       // Hover effects
       document.querySelectorAll('.cta-button').forEach(button => {
        button.addEventListener('mouseenter', () => {
            gsap.to(button, {
                scale: 1.1,
                duration: 0.3
            });
        });

        button.addEventListener('mouseleave', () => {
            gsap.to(button, {
                scale: 1,
                duration: 0.3
            });
        });

        // Smooth page transition on click
        button.addEventListener('click', () => {
            gsap.to('body', {
                opacity: 0,
                duration: 1,
                onComplete: () => {
                    window.location.href = 'porquetequiero.html'; // Replace with the actual URL of the next page
                }
            });
        });
    });