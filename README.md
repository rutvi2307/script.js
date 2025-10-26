// ScrollReveal Animations
ScrollReveal().reveal('.navbar',{origin:'top', distance:'20px', duration:800, delay:200, opacity:0});
ScrollReveal().reveal('.hero-left',{origin:'left', distance:'50px', duration:1000, delay:300, opacity:0});
ScrollReveal().reveal('.about-img',{origin:'left', distance:'50px', duration:1000, delay:200, opacity:0});
ScrollReveal().reveal('.about-content',{origin:'right', distance:'50px', duration:1000, delay:300, opacity:0});
ScrollReveal().reveal('.skill-card',{origin:'bottom', distance:'40px', duration:800, interval:200, opacity:0});
ScrollReveal().reveal('.project-card',{origin:'bottom', distance:'60px', duration:1000, interval:250, opacity:0});
ScrollReveal().reveal('.contact-section',{origin:'bottom', distance:'60px', duration:1000, delay:300, opacity:0});
ScrollReveal().reveal('.footer',{origin:'bottom', distance:'30px', duration:800, delay:200, opacity:0});

// WhatsApp Message Function
function sendWhatsApp() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const text = `Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`;
    const phone = "919328796380";
    const link = `https://wa.me/${phone}?text=${text}`;
    window.open(link, "_blank");
}
