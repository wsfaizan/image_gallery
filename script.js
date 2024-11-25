// File: script.js
document.addEventListener("DOMContentLoaded", () => {
    const tagButtons = document.querySelectorAll(".tag-btn");
    const galleryItems = document.querySelectorAll(".gallery-item");

    tagButtons.forEach(button => {
        button.addEventListener("click", () => {
            const filter = button.getAttribute("data-filter");

            galleryItems.forEach(item => {
                if (filter === "all" || item.getAttribute("data-category") === filter) {
                    item.style.display = "block";
                } else {
                    item.style.display = "none";
                }
            });

            // Add active class to the clicked button
            tagButtons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");
        });
    });
});
