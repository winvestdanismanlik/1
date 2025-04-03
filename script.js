document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll(".nav-link");
    const sections = document.querySelectorAll(".section");

    links.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            
            sections.forEach(section => section.classList.remove("active"));
            
            const targetId = this.getAttribute("href").substring(1);
            document.getElementById(targetId).classList.add("active");
        });
    });
});
