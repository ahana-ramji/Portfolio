//change the color of the navigation links on hover
const navLinks = document.querySelectorAll("nav ul li a");

navLinks.forEach(link => {
    link.addEventListener("mouseover", function(){
        link.style.color =rgb(151, 46, 28)
    });

    link.addEventListener("mouseout",function(){
        link.style.color = "";
    });
});

const links = document.querySelectorAll('.link');
const sections = document.querySelectorAll('section');

let activeLink = 0;

links.forEach((link, i) => {
    link.addEventListener('click', () => {
        if(activeLink != i){
            links[activeLink].classList.remove('active');
            link.classList.add('active');
            sections[activeLink].classList.remove('active');

            setTimeout(() => {
                activeLink = i;
                sections[i].classList.add('active');
            }, 1000);
        }
    })
})