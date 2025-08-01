window.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('.fade-in, .slide-in, .slide-in-left, .slide-in-right').forEach(el => {
        el.style.animationDelay = Math.random() * 0.5 + 's';
    });
});
