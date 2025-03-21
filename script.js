document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll(".nav-link");

    function updateActiveLink(targetId) {
        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href").substring(1) === targetId) {
                link.classList.add("active");
            }
        });
    }

    // Highlight active navigation link based on scroll position
    window.addEventListener("scroll", function() {
        let scrollPosition = window.scrollY;
        document.querySelectorAll("section").forEach(section => {
            if (scrollPosition >= section.offsetTop - 100 &&
                scrollPosition < section.offsetTop + section.offsetHeight) {
                updateActiveLink(section.getAttribute("id"));
            }
        });
    });

    // Smooth scrolling effect for navigation links
    navLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            window.scrollTo({
                top: targetSection.offsetTop - 50,
                behavior: "smooth"
            });

            updateActiveLink(targetId);
        });
    });

    // Contact Form Validation
    const contactForm = document.getElementById("contact-form");

    contactForm.addEventListener("submit", function(event) {
        event.preventDefault(); 

        let name = document.getElementById("username").value.trim();
        let email = document.getElementById("email").value.trim();
        let message = document.getElementById("message").value.trim();

        if (name === "" || email === "" || message === "") {
            alert("All fields are required!");
            return;
        }

        if (!validateEmail(email)) {
            alert("Please enter a valid email address!");
            return;
        }

        alert("Message Sent Successfully!");
        contactForm.reset();
    });

    function validateEmail(email) {
        let re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});
