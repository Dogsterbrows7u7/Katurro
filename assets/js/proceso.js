    let slideActual = 0;
    const track = document.getElementById("sliderTrack");
    const slides = document.querySelectorAll(".slide-proceso");
    const dots = document.querySelectorAll(".dot");

    function actualizarSlider() {
      track.style.transform = `translateX(-${slideActual * 100}%)`;

      dots.forEach(dot => dot.classList.remove("activo"));
      dots[slideActual].classList.add("activo");
    }

    function moverSlide(direccion) {
      slideActual += direccion;

      if (slideActual < 0) {
        slideActual = slides.length - 1;
      }

      if (slideActual >= slides.length) {
        slideActual = 0;
      }

      actualizarSlider();
    }

    function irSlide(indice) {
      slideActual = indice;
      actualizarSlider();
    }

/* ================================
   GALERÍA DE VIDEOS DEL PROCESO
================================ */

.proceso-video-premium .container {
  max-width: 1180px;
}

.proceso-video-premium .card {
  background: #fffaf1;
  border-radius: 24px !important;
  overflow: hidden;
  border: 1px solid rgba(70, 45, 25, 0.12) !important;
  box-shadow: 0 14px 30px rgba(45, 28, 16, 0.12) !important;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.proceso-video-premium .card:hover {
  transform: translateY(-10px);
  box-shadow: 0 22px 45px rgba(45, 28, 16, 0.22) !important;
}

.proceso-video-premium .ratio {
  background: #2d1b12;
  position: relative;
}

.proceso-video-premium iframe {
  border: none;
}

.proceso-video-premium .card-body {
  padding: 1.6rem;
  position: relative;
}

.proceso-video-premium .card-body::before {
  content: "";
  position: absolute;
  top: 0;
  left: 1.6rem;
  right: 1.6rem;
  height: 4px;
  background: linear-gradient(90deg, var(--verde), #d8a23a);
  border-radius: 999px;
}

.proceso-video-premium .card-body .etapa-numero {
  display: inline-flex;
  width: 42px;
  height: 42px;
  align-items: center;
  justify-content: center;
  background: var(--verde);
  color: #fff;
  border-radius: 50%;
  font-weight: 700;
  margin-bottom: 0.8rem;
  box-shadow: 0 8px 18px rgba(49, 92, 43, 0.25);
}

.proceso-video-premium .card-body h3 {
  font-size: 1.35rem;
  font-weight: 700;
  margin-bottom: 0.8rem;
}

.proceso-video-premium .card-body p {
  color: #5f4a3c;
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 0;
}

.proceso-video-premium {
  position: relative;
}

.proceso-video-premium::before {
  content: "☕";
  position: absolute;
  top: 20px;
  left: 6%;
  font-size: 4rem;
  opacity: 0.08;
  pointer-events: none;
}

.proceso-video-premium::after {
  content: "🌱";
  position: absolute;
  bottom: 30px;
  right: 6%;
  font-size: 4rem;
  opacity: 0.08;
  pointer-events: none;
}

/* Efecto visual encima del video */
.proceso-video-premium .ratio::after {
  content: "▶";
  position: absolute;
  width: 58px;
  height: 58px;
  background: rgba(255, 250, 241, 0.92);
  color: var(--verde);
  border-radius: 50%;
  display: grid;
  place-items: center;
  font-size: 1.4rem;
  font-weight: 900;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.proceso-video-premium .card:hover .ratio::after {
  opacity: 1;
}

/* Responsive */
@media (max-width: 768px) {
  .proceso-video-premium .card-body {
    padding: 1.3rem;
  }

  .proceso-video-premium .card-body h3 {
    font-size: 1.2rem;
  }

  .proceso-video-premium::before,
  .proceso-video-premium::after {
    display: none;
  }
}