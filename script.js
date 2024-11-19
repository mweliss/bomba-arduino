document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav a");


    const menuHeight = document.querySelector("nav").offsetHeight;


    const extraSpace = 50; 


    const updateMenuHighlight = () => {
        const scrollPosition = window.scrollY + menuHeight + extraSpace; 

        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute("id");

            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach((link) => {
                    link.classList.remove("active");
                    if (link.getAttribute("href") === `#${sectionId}`) {
                        link.classList.add("active");
                    }
                });
            }
        });
    };

  
    window.addEventListener("scroll", updateMenuHighlight);
    navLinks.forEach((link) => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetId = e.target.getAttribute("href").slice(1);
            const targetSection = document.getElementById(targetId);

         
            window.scrollTo({
                top: targetSection.offsetTop - menuHeight - extraSpace, 
                behavior: "smooth"
            });
        });
    });
});

const waterfall = document.getElementById('waterfall');
const pool = document.getElementById('pool');

let poolHeight = 0; 

function createDrop() {
    const drop = document.createElement('div');
    drop.classList.add('drop');

 
    drop.style.left = Math.random() * 100 + 'vw';

   
    const size = Math.random() * 10 + 5;
    drop.style.width = `${size}px`;
    drop.style.height = `${size * 3}px`;


    waterfall.appendChild(drop);

  
    setTimeout(() => {
        drop.remove();
        increasePoolHeight(size); 
    }, 3000);
}


function increasePoolHeight(size) {
    const increment = size * 0.01;
    poolHeight = Math.min(poolHeight + increment, 100); 
    pool.style.height = `${poolHeight}vh`;
}


setInterval(createDrop, 100); 


function resetPoolOnScroll() {
    const documentHeight = document.documentElement.scrollHeight;
    const windowHeight = window.innerHeight;
    const scrollPosition = window.scrollY + windowHeight;


    if (scrollPosition >= documentHeight) {
        poolHeight = 0; 
        pool.style.height = `${poolHeight}vh`; 
    }
}


window.addEventListener('scroll', resetPoolOnScroll);



const menuToggle = document.getElementById('menu-toggle');
const menu = document.querySelector('.menu');


menuToggle.addEventListener('click', () => {
    menu.classList.toggle('open'); 
});
