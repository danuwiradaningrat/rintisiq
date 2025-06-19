// script.js
// --- Testimonial slider logic ---
document.addEventListener('DOMContentLoaded', function () {
  // Slider setup
  const slides = document.querySelectorAll('.slide');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const dotsContainer = document.getElementById('sliderDots');
  let current = 0;
  let autoSlide;

  // Create dots
  slides.forEach((_, idx) => {
    const dot = document.createElement('button');
    dot.className = 'slider-dot' + (idx === 0 ? ' active' : '');
    dot.setAttribute('aria-label', 'Testimoni ' + (idx + 1));
    dot.addEventListener('click', () => showSlide(idx));
    dotsContainer.appendChild(dot);
  });
  const dots = dotsContainer.querySelectorAll('.slider-dot');

  // Show slide by index
  function showSlide(idx) {
    slides[current].classList.remove('active');
    dots[current].classList.remove('active');
    current = idx;
    slides[current].classList.add('active');
    dots[current].classList.add('active');
  }

  // Next/Prev handlers
  function nextSlide() {
    showSlide((current + 1) % slides.length);
  }
  function prevSlide() {
    showSlide((current - 1 + slides.length) % slides.length);
  }

  // Auto slide
  function startAutoSlide() {
    autoSlide = setInterval(nextSlide, 3500);
  }
  function stopAutoSlide() {
    clearInterval(autoSlide);
  }

  // Event listeners
  nextBtn.addEventListener('click', () => { nextSlide(); stopAutoSlide(); startAutoSlide(); });
  prevBtn.addEventListener('click', () => { prevSlide(); stopAutoSlide(); startAutoSlide(); });

  // Start slider
  startAutoSlide();

  // --- FAQ accordion logic ---
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', function () {
      const item = this.parentElement;
      item.classList.toggle('open');
    });
  });
});