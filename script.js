// Animasi Scroll
document.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section");
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
            section.style.transform = "translateY(0)";
            section.style.opacity = "1";
        }
    });
});

// Animasi Tombol
document.getElementById("ctaButton").addEventListener("click", () => {
    alert("Selamat menjelajahi website!");
});
