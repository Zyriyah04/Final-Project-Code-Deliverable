document.addEventListener("DOMContentLoaded", function() {
    // Modal elements
    var modal = document.getElementById("alert-modal");
    var span = document.getElementsByClassName("close-btn")[0];

    // Open the modal when the page loads
    window.onload = function() {
        modal.style.display = "block";
    };

    // Close the modal when the user clicks on <span> (x)
    span.onclick = function() {
        modal.style.display = "none";
    };

    // Close the modal when the user clicks anywhere outside of the modal
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };

    // Form submission handling for the alert modal
    document.getElementById("alert-form").addEventListener("submit", function(event) {
        event.preventDefault();
        var email = document.getElementById("email").value;
        var phone = document.getElementById("phone").value;

        if (email || phone) {
            alert("Thank you for signing up for alerts!");
            modal.style.display = "none";
        } else {
            alert("Please enter either an email or a phone number.");
        }
    });

    // Handle navigation highlight
    function highlightCurrentPage() {
        const navLinks = document.querySelectorAll("nav ul li a");
        navLinks.forEach(link => {
            if (link.href === window.location.href) {
                link.classList.add("active");
            }
        });
    }

    highlightCurrentPage();

    // Scroll animation for all pages
    function scrollToElement(target) {
        document.querySelector(target).scrollIntoView({ 
            behavior: 'smooth' 
        });
    }

    // Example of triggering scroll animation when clicking a link
    document.querySelectorAll('.scroll-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = this.getAttribute('href');
            scrollToElement(target);
        });
    });

    // Form validation example for contact page
    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", function(event) {
            event.preventDefault();
            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const message = document.getElementById("message").value;

            if (name && email && message) {
                alert("Thank you for contacting us, " + name + "! We will get back to you soon.");
                contactForm.reset();
            } else {
                alert("Please fill out all fields.");
            }
        });
    }

    // Forum page 
    const forumForm = document.getElementById("forum-form");
    if (forumForm) {
        forumForm.addEventListener("submit", function(event) {
            event.preventDefault();
            const postContent = document.getElementById("post-content").value;

            if (postContent) {
                const postList = document.getElementById("post-list");
                const newPost = document.createElement("li");
                newPost.textContent = postContent;
                postList.appendChild(newPost);
                forumForm.reset();
            } else {
                alert("Please write something to post.");
            }
        });
    }

    // Animation on page load for each section (fade-in effect)
    const sections = document.querySelectorAll("section");
    sections.forEach(section => {
        section.style.opacity = 0;
        section.style.transition = "opacity 2s ease-in-out";
    });

    window.addEventListener("load", () => {
        sections.forEach(section => {
            section.style.opacity = 1;
        });
    });

    // Image grid interaction
    const images = document.querySelectorAll(".recipe-item img");
    images.forEach(image => {
        image.addEventListener("click", function() {
            alert("You clicked on " + this.alt);
        });
    });

    // Back to top button functionality
    const backToTopBtn = document.getElementById("back-to-top");
    if (backToTopBtn) {
        backToTopBtn.addEventListener("click", function() {
            scrollToElement("body");
        });

        window.addEventListener("scroll", function() {
            if (window.pageYOffset > 300) {
                backToTopBtn.style.display = "block";
            } else {
                backToTopBtn.style.display = "none";
            }
        });
    }
});
