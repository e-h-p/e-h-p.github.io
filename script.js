document.addEventListener("DOMContentLoaded", function () {
    const paragraphs = [
        "animated-text",
        "animated-text-2",
        "animated-text-3",
        "animated-text-4"
    ];

    paragraphs.forEach((id, index) => {
        const delay = 1500 * index; // 1.5s delay between each paragraph
        setTimeout(() => {
            const element = document.getElementById(id);
            element.style.opacity = "1"; // Fade in
            element.style.transform = "translateY(0)"; // Reset position
        }, delay);
    });
});
