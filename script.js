document.addEventListener("DOMContentLoaded", function() {
    let index = 0;
    const slides = document.querySelectorAll(".slide");
    
    function showSlide(i) {
        slides.forEach(slide => slide.classList.add("hidden"));
        slides[i].classList.remove("hidden");
    }
    
    function nextSlide() {
        index = (index + 1) % slides.length;
        showSlide(index);
    }
    
    setInterval(nextSlide, 3000);
    showSlide(index);
});